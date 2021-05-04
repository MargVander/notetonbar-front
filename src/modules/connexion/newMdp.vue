<template>
  <ion-page>
    <ion-content>
      <div class="form body">
        <ion-item>
          <ion-label position="floating">
            nouveau mot de passe
            <ion-input> </ion-input>
          </ion-label>
        </ion-item>
      </div>

      <div>
        <ion-item>
          <ion-button> valider </ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonPage,
  IonContent,
} from "@ionic/vue";
// import router from "@/router";
// import { reactive } from "vue";
// import loginService from "./services/loginService";

export default {
  name: "NewMdp",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
  },
};
</script>

<style scoped>
.body {
  height: 100%;
}

.center {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2em;
  margin-left: 2em;
}
</style>
