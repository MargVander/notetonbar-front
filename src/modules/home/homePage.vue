<template>
  <ion-content class="home">
    <div class="bars">
      <ion-text class="hometitle">Découvrez les derniers bars</ion-text>
    </div>
    <BarHomeCard :datas="this.bars" />

    <div class="reviews">
      <ion-text class="hometitle">Découvrez les dernieres reviews</ion-text>
      <ReviewsList :datas="this.reviews" :bar="true" />
    </div>
    <Tab :currentPage="'home'" />
  </ion-content>
</template>

<script>
import ReviewsList from "../reviews/components/reviewsList";
import BarService from "../bars/services/BarService";
import ReviewService from "../reviews/services/ReviewService";
import BarHomeCard from "../bars/components/barHomeCard";
import Tab from "./components/tab";

export default {
  components: {
    ReviewsList,
    BarHomeCard,
    Tab
  },
  data() {
    return {
      bars: null,
      reviews: null
    };
  },
  methods: {
    async fetchReviews(limit) {
      await ReviewService.fetchReviews(limit).then(reviews => {
        this.reviews = reviews;
      });
    },
    async fetchBars(limit) {
      await BarService.fetchBars(limit).then(bars => {
        this.bars = bars;
      });
    }
  },
  created() {
    this.fetchReviews(3);
    this.fetchBars(5);
  }
};
</script>

<style>
.home .flex {
  display: flex;
}
.home .reviews,
.home .bars {
  padding: 10px 20px 0;
}
.home .reviews .hometitle,
.home .bars .hometitle {
  font-weight: bold;
}
</style>