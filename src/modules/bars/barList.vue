<template>
  <ion-content class="test">
     <ion-item class="select">
      <ion-label>Trier par :</ion-label>
      <ion-select @ionChange="onChange($event)" :value="sort">
        <ion-select-option :value="0">Plus récent</ion-select-option>
        <ion-select-option :value="1">Popularité</ion-select-option>
      </ion-select>
    </ion-item>
    <BarCard :data="bars" />
    <div class="xtraspace" />
    <Tab :currentPage="'search'" />
  </ion-content>
</template>

<script>
import BarCard from "./components/barCard";
import BarService from "./services/BarService";
import Tab from "../home/components/tab";


import { IonContent, IonSelect, IonSelectOption } from "@ionic/vue";

export default {
  components: {
    BarCard,
    Tab,
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      bars: [],
      rating: null,
      sort: 0,
    };
  },
  methods: {
    fetchBars() {
      BarService.fetchBars().then(bars => {
        this.bars = bars;
      });
    },
    fetchBarsByPopularity() {
      BarService.fetchBarsByPopularity().then(bars => {
        this.bars = bars;
      });
    },
    onChange(event) {
      if (event.detail.value === 0) {
        this.fetchBars()
        this.sort = 0
      } else {
        this.fetchBarsByPopularity()
        this.sort = 1
      }
    }
  },
  created() {
    this.fetchBars();
  },
};
</script>
<style>
.select {
  margin: 0 20px;
}
.select h2{
  color: black;
}
.alert-title.sc-ion-alert-ios, .alert-radio-label.sc-ion-alert-ios {
  color: black;
}

</style>
