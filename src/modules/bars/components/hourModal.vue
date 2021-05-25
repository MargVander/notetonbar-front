<template>
  <ion-content class="ion-padding">
    <div class="flex top-modal">
      <ion-text class="title">Horaires :</ion-text>
      <ion-text @click="close" class="close">X</ion-text>
    </div>
    <ion-list>
      <ion-item>
        <ion-label>
          Lundi :
          <ion-text v-if="hours.mon">{{hours.mon[0]}} - {{hours.mon[1]}}</ion-text>
          <ion-text v-if="!hours.mon">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Mardi :
          <ion-text v-if="hours.tue">{{hours.tue[0]}} - {{hours.tue[1]}}</ion-text>
          <ion-text v-if="!hours.tue">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Mercredi :
          <ion-text v-if="hours.wed">{{hours.wed[0]}} - {{hours.wed[1]}}</ion-text>
          <ion-text v-if="!hours.wed">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Jeudi :
          <ion-text v-if="hours.thu">{{hours.thu[0]}} - {{hours.thu[1]}}</ion-text>
          <ion-text v-if="!hours.thu">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Vendredi :
          <ion-text v-if="hours.fri">{{hours.fri[0]}} - {{hours.fri[1]}}</ion-text>
          <ion-text v-if="!hours.fri">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Samedi :
          <ion-text v-if="hours.sat">{{hours.sat[0]}} - {{hours.sat[1]}}</ion-text>
          <ion-text v-if="!hours.sat">Fermé</ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          Dimanche :
          <ion-text v-if="hours.sun">{{hours.sun[0]}} - {{hours.sun[1]}}</ion-text>
          <ion-text v-if="!hours.sun">Fermé</ion-text>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { defineComponent } from "vue";
import { modalController } from "@ionic/vue";

export default defineComponent({
  name: "HourModal",
  props: {
    hours: { type: Object, default: null }
  },
  methods: {
    async close() {
      await modalController.dismiss();
    }
  }
});
</script>
<style>
.title {
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
}
.close {
    padding: 20px;
    font-size: 25px;
}
.top-modal {
    justify-content: space-between
}
ion-list {
  margin-top: 30px;
}
</style>