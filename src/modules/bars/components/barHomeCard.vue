<template>
  <ion-scroll class="barhomelist" scrollX="true" scrollY="false">
    <div @click="this.$router.push(`/bar/${bar.id}`)" class="barcarditem" v-for="bar in datas" :key="bar.id">
      <div
        v-if="!bar.pictures[0]"
        class="cardimg"
        style="background-image: url(https://img.phonandroid.com/2020/09/clients-bar.jpg)"
      />
      <div
        v-if="bar.pictures[0]"
        class="cardimg"
        v-bind:style="{ backgroundImage: 'url(http://localhost:3000/pictures/' + bar.pictures[0].path + ')' }"
      />
      <div class="flex gotobar">
          <ion-text>{{bar.name}}</ion-text>
          <ion-text class="arrow">></ion-text>
      </div>
    </div>
  </ion-scroll>
</template>

<script>
export default {
  name: "BarHomeCard",
  props: {
    datas: Array
  }
};
</script>

<style>
.ion-scroll {
    overflow-x: scroll
}
.barhomelist {
  display: flex;
  margin: 20px 0;
}
.barcarditem {
  margin-left: 20px;
}
.cardimg {
  height: 100px;
  width: 160px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-size: cover;
}
.gotobar {
    justify-content: space-between;
}
.arrow {
    font-weight: bold;
}
</style>