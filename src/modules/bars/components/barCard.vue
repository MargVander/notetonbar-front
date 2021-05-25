<template>
  <ion-content>
    <ion-list>
      <ion-item lines="none" v-for="bar in data" :key="bar.id">
          <ion-card @click="this.$router.push(`/bar/${bar.id}`)">
            <div
              v-if="!bar.pictures[0]"
              class="card-img"
              style="background-image: url(https://img.phonandroid.com/2020/09/clients-bar.jpg)"
            />
            <div
              v-if="bar.pictures[0]"
              class="card-img"
              v-bind:style="{ backgroundImage: 'url(http://localhost:3000/pictures/' + bar.pictures[0].path + ')' }"
            />
            <div class="card-content">
              <div class="flex">
                <ion-card-title>{{bar.name}}</ion-card-title>
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
              <ion-card-subtitle>{{bar.address}} - {{bar.zip_code}} - {{bar.city}}</ion-card-subtitle>
              <ion-card-content>{{bar.description}}</ion-card-content>
              <div class="go-bar">></div>
            </div>
          </ion-card>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import StarRating from "vue-star-rating";

import { IonContent, IonCard, IonCardContent, IonCardSubtitle, IonText, IonTitle, IonItem, IonList } from "@ionic/vue";
export default {
  name: "BarCard",
  props: {
    data: Array
  },
  components: {
    StarRating
  }
};
</script>

<style>
.flex {
  display: flex;
  justify-content: space-between;
}
ion-item {
  --inner-padding-end: 0px;
  --padding-start: 0px;
}
ion-card {
  min-height: 100px;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
}
ion-card .card-img {
  width: 30%;
  background-size: cover;
}
.card-content {
  padding: 0 10px;
  width: 70%;
  color: white;
  position: relative;
}
ion-card-title {
  color: white;
  font-size: 20px;
  width: 55%;
}
ion-card-subtitle {
  font-size: 11px;
  text-transform: inherit;
  margin-top: 2px;
  color: white;
}
ion-card-content {
  font-size: 11px;
  text-transform: inherit;
  padding: 0 !important;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.go-bar {
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 2px;
}
</style>