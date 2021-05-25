<template>
  <ion-page>
    <ion-content>
      <div class="body" />

      <div class="bodyForm">
        <ion-item>
          <ion-label>
            <h4>Avatar</h4>
            <ion-avatar>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPluX0lZs9ujZ8Uy1NNi6blJzh3_0en13QfA&usqp=CAU"
                alt="avatar"
              />
            </ion-avatar>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <h4>pseudo</h4>
            <h2>{{ state.user.pseudo }}</h2>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <h4>mail</h4>
            <h2>{{ state.user.mail }}</h2>
          </ion-label>
        </ion-item>
      </div>

      <div class="right">
        <ion-button @click.prevent="deco"> deconnexion </ion-button>
      </div>

      <Tab :currentPage="'profil'" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Tab from "../home/components/tab.vue";
import { IonContent, IonPage, IonItem, IonLabel } from "@ionic/vue";
import userService from "../user/service/userService";
import { store } from "@/store";
import router from "@/router";
export default defineComponent({
  name: "ProfilUser",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    Tab,
  },
  setup() {
    const state = reactive({
      user: Object,
      token: store.getters.getToken,
    });

    userService.getUser(state.token.id).then((data) => {
      if (data.pseudo) {
        console.log(data);

        state.user = data;
      }
    });

    const deco = () => {
      store.commit("setToken", "");
      router.push({
        name: "SignIn",
      });
    };
    return { state, deco };
  },
});
</script>

<style scoped>
.center {
  text-align: center;
}
.red {
  color: red;
}
.body {
  height: 10%;
}

.right {
  text-align: end;
}

.bodyForm {
  height: 80%;
}
</style>
