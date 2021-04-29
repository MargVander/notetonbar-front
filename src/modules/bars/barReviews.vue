<template>
  <ion-content>
    <div class="flex top-review">
      <ion-icon @click="this.$router.push(`/bar/${this.id}`)" name="chevron-back-outline"></ion-icon>
      <ion-title>{{this.name}}</ion-title>
    </div>
    <ReviewsList :datas="this.reviews" />
  </ion-content>
</template>

<script>
import BarService from "./services/BarService";
import ReviewsList from "../reviews/components/reviewsList"
import { ellipse, square, triangle } from "ionicons/icons";
import { addIcons } from "ionicons";
import { construct, home } from "ionicons/icons";
import { chevronBackOutline } from "ionicons/icons";

addIcons({
  "chevron-back-outline": chevronBackOutline
});

export default {
  name: "bar-reviews",
  props: {
    name: String
  },
  components: {
    ReviewsList
    // StarRating
  },
  data() {
    return {
      id: this.$route.params.id,
      reviews: []
    };
  },
  methods: {
    fetchReviews(id) {
      BarService.fetchReviews(id).then(reviews => {
        this.reviews = reviews;
      });
    }
  },
  created() {
    this.fetchReviews(this.id);
  }
};
</script>

<style>
ion-content {
  --padding-bottom: 20px;
  --padding-end: 20px;
  --padding-start: 20px;
  --padding-top: 20px;
}
.top-review {
  font-size: 20px;
  align-items: center;
}
ion-title {
  font-size: 20px;
  margin-left: 5px;
  position: unset;
  text-align: unset;
  padding: 0;
}
</style>