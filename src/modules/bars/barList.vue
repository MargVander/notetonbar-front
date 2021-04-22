<template>
  <ion-content class="test">
    <BarCard :data="bars" />
  </ion-content>
</template>

<script>
import BarCard from "./components/barCard";
import BarService from "./services/BarService"
export default {
  name: "Bars",
  components: {
    BarCard,
  },
  data() {
    return {
      bars: [],
      rating: null,
    }
  },
  methods: {
    fetchBars() {
       BarService.fetchBars()
       .then((bars) => {
        this.bars = bars
      })
    },
  },
  created() {
    this.fetchBars();
  },
}
</script>
