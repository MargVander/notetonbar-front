<template>
  <ion-content v-if="bar">
    <ion-slides>
      <ion-slide v-for="picture in bar.pictures" :key="picture.id">
        <div
          v-bind:style="{ backgroundImage: 'url(http://localhost:3000/pictures/' + picture.path + ')' }"
        />
      </ion-slide>
    </ion-slides>
    <ion-title class="bar-title">{{bar.name}}</ion-title>
    <div class="content">
      <div class="info">
        <star-rating
          v-if="bar.rating"
          :rating="bar.rating.avg_rating"
          :star-size="20"
          :show-rating="false"
          :read-only="true"
          :increment="0.1"
        />
        <star-rating
          v-if="!bar.rating"
          :rating="0"
          :star-size="20"
          :show-rating="false"
          :read-only="true"
        />
      </div>
      <div class="info-2 flex">
        <div class="address">
          <ion-text>{{bar.address}}</ion-text>
          <br />
          <ion-text>{{bar.zip_code}} {{bar.city}}</ion-text>
        </div>
        <ion-img v-if="bar.terrace" class="bar-icon" src="./assets/img/terace.svg" />
        <div class="flex happyhour">
          <ion-img v-if="bar.happy_hour" class="bar-icon" src="./assets/img/happyhour.svg" />
          <ion-text>{{bar.happy_hour}}</ion-text>
        </div>
        <ion-img @click="openModal" class="bar-icon" src="./assets/img/clock.svg" />
      </div>
      <div class="description">
        <ion-text>{{bar.description}}</ion-text>
      </div>
      <div class="website-div">
        <a class="website-link" :href="bar.website_link">Voir le site du bar</a>
      </div>
    </div>
    <div class="review-top flex">
      <ion-text class="review-title">Les avis :</ion-text>
      <router-link class="review-link" :to="{ name: 'bar-reviews', params: { id: this.id, name: bar.name} }">Voir tout les avis</router-link>
    </div>
    <div class="reviews">
      <ReviewsList :datas="this.reviews" />
    </div>
  </ion-content>
</template>

<script>
import BarService from "./services/BarService";
import StarRating from "vue-star-rating";
import { modalController } from "@ionic/vue";
import HourModal from "./components/hourModal";
import ReviewsList from "../reviews/components/reviewsList"

import { IonContent, IonSlides, IonSlide, IonText, IonTitle, IonImg } from "@ionic/vue";

export default {
  components: {
    StarRating,
    ReviewsList
  },
  data() {
    return {
      id: this.$route.params.id,
      bar: null,
      reviews: null,
    };
  },
  methods: {
    fetchBar(id) {
      BarService.fetchBar(id).then(bar => {
        this.bar = bar;
      });
    },
    fetchReviews(id, limit) {
      BarService.fetchReviews(id, limit).then(reviews => {
        this.reviews = reviews;
      });
    },
    async openModal() {
      const modal = await modalController.create({
        component: HourModal,
        cssClass: "my-custom-class",
        backdropDismiss: true,
        componentProps: {
          hours: this.bar.hours
        }
      });
      return modal.present();
    }
  },
  created() {
    this.fetchBar(this.id);
    this.fetchReviews(this.id, 5);
  }
};
</script>



<style>
ion-slides {
  height: 25%;
}
ion-slide div {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.bar-title {
  height: unset;
  font-size: 25px;
  margin-top: -35px;
  position: relative;
  z-index: 1;
  text-align: left;
  padding: 0 20px;
}
.content {
  padding: 0 20px;
}
.info,
.info-2 {
  margin-top: 10px;
}
.info-2 {
  justify-content: space-between;
}
.happyhour {
  align-items: center;
  font-weight: bold;
}
.happyhour ion-img {
  margin-right: 10px;
}
.flex {
  display: flex;
}
.address {
  font-weight: bold;
}
.bar-icon {
  width: 30px;
}
.description {
  margin-top: 10px;
}
.website-div {
  margin-top: 8px;
}
.website-link {
  color: #f4c70e;
  text-decoration: none;
  margin-top: 10px;
  font-size: 11px;
}
.review-top {
    margin: 20px;
    justify-content: space-between;
}
.review-title {
  font-weight: bold;
  font-size: 18px;
}
.review-link {
    text-decoration: none;
    color: gray;
}
.reviews {
  padding: 0 20px;
}
</style>