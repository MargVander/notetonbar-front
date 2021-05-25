<template>
  <ion-list>
    <ion-item v-for="review in datas" :key="review.id" :id="review.id">
      <div class="review-item">
        <div v-if="bar" class="home-name" @click="this.$router.push(`/bar/${review.bar.id}`)">
          <ion-text>{{review.bar.name}}</ion-text>
        </div>
        <div class="review-rating">
          <star-rating
            active-color="#f4c70e"
            :rating="review.rating"
            :star-size="15"
            :show-rating="false"
            :read-only="true"
            :increment="0.1"
          />
          <ion-text class="time">{{parseDate(review.date)}}</ion-text>
        </div>
        <div>
          <ion-text>{{review.content}}</ion-text>
        </div>
        <div class="review-bottom">
          <div class="flex user-info">
            <ion-text
              @click="deleteReviews(review)"
              class="deletebtn"
              v-if="userId === review.user.id"
            >Supprimer</ion-text>
            <div
              class="avatar"
              v-bind:style="{ backgroundImage: 'url(http://localhost:3000/pictures/' + review.user.profile_picture + ')' }"
            />
            <ion-text>{{review.user.pseudo}}</ion-text>
          </div>
        </div>
      </div>
    </ion-item>
  </ion-list>
</template>

<script>
import StarRating from "vue-star-rating";
import ReviewService from "../services/ReviewService";
import moment from "moment";
import { store } from "@/store";

export default {
  name: "ReviewsList",
  components: {
    StarRating
  },
  props: {
    datas: Array,
    bar: Boolean
  },
  data() {
    return {
      userId: store.getters.getToken.id
    };
  },
  methods: {
    parseDate: function(date) {
      return moment(date).format("DD/MM/YYYY HH:mm");
    },
    deleteReviews: function(review) {
      if (this.userId === review.user.id) {
        if (confirm("Êtes-vous sur ?")) {
          ReviewService.deleteReview(review.id).then(() => {
            const index = this.datas.findIndex(
              data => data.id === review.id
            );
            
            document.getElementById(review.id).style.display = "none"
          });
        }
      }
    }
  },
};
</script>

<style>
ion-item {
  --inner-padding-end: 0px;
  --padding-start: 0px;
}
.review-item {
  width: 100%;
  margin: 10px 0;
}
.review-rating {
  display: flex;
  margin-bottom: 7px;
}
.review-bottom {
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  color: #dadadb;
  align-items: center;
  margin-top: 5px;
}
.time {
  font-size: 14px;
  margin-left: 10px;
  color: #dadadb;
}
.user-info {
  justify-content: unset;
}
.avatar {
  background-size: cover;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.home-name {
  font-weight: bold;
  margin-bottom: 10px;
}
.deletebtn {
  color: red;
}
</style>