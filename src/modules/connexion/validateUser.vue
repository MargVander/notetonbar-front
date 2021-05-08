<template>
  <ion-page>
    <ion-content>
      <ion-item class="body form">
        <ion-text>
          {{ question }}
        </ion-text>
      </ion-item>

      <div class="body form">
        <ion-item>
          <ion-label position="floating">
            réponse
            <ion-input v-model="state.resp" />
          </ion-label>
        </ion-item>

        <div class="center">
          <ion-button @click="check">
            valider
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonLabel,
  IonText,
  IonItem,
  IonButton,
  IonPage,
  IonContent,
} from "@ionic/vue";
import router from "@/router";
import { reactive } from "vue";
import loginService from "./services/loginService";

export default {
  name: "ValidateUser",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonLabel,
    IonText,
    IonItem,
    IonButton,
  },
  setup() {
    const state = reactive({
      resp: "",
    });
    console.log(router.currentRoute.value.params);
    const question = router.currentRoute.value.params.question;
    const mail = router.currentRoute.value.params.mail;

    const check = () => {
      console.log("resp : " + state.resp);

      const a = Promise.resolve(
        loginService.checkResponse({ mail: mail, response: state.resp })
      ).then((value) => {
        console.log(value);

        router.push({
          name: "newMdp",
          params: { mail: value.mail, response: state.resp },
        });
      });
    };
    return { question, state, check };
  },
};
</script>

<style scoped>
.body {
  height: 50%;
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
