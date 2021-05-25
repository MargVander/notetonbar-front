<template>
  <ion-tabs>
    <div class="top" />
    <ion-tab-bar slot="bottom">
      <div class="icons">
        <ion-img
          v-if="currentPage !== 'home'"
          @click="this.$router.push('homepage')"
          class="icon"
          src="./assets/img/home.svg"
        />
        <ion-img
          v-if="currentPage === 'home'"
          @click="this.$router.push('homepage')"
          class="icon"
          src="./assets/img/homeactive.svg"
        />
        <ion-img
          v-if="currentPage !== 'search'"
          @click="this.$router.push('/bars')"
          class="icon"
          src="./assets/img/search.svg"
        />
        <ion-img
          v-if="currentPage === 'search'"
          @click="this.$router.push('/bars')"
          class="icon"
          src="./assets/img/searchactive.svg"
        />
        <ion-img
          v-if="currentPage !== 'profil'"
          class="icon"
          src="./assets/img/profil.svg"
          @click="this.$router.push('/ProfilUser')"
        />
        <ion-img
          v-if="currentPage === 'profil'"
          class="icon"
          src="./assets/img/profilactive.svg"
        />
      </div>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
export default {
  name: "Tab",
  props: {
    currentPage: String,
  },
};
</script>

<style>
.icons {
  justify-content: space-around;
  display: flex;
  width: 100%;
}
.top {
  height: 3.5rem;
}
ion-tab-bar {
  background-color: #242529;
  position: fixed;
  left: -2px;
  bottom: 0px;
  width: 100%;
  height: 3rem;
}
.icon {
  width: 30px;
}
</style>
