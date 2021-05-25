<template>
  <ion-app>
    <div class="topbar" />
    <div class="space" />
    <ion-router-outlet />
    <router-view></router-view>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
<style>
.topbar {
  position: fixed;
  width: 100%;
  height: 30px;
  background-color: #242529;
  z-index: 1;
}
.space {
  height: 30px;
}
</style>