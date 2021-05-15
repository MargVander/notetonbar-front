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

        <div v-if="v$.$error" class="center red">
          le champ ne doit pas être vide
        </div>

        <div class="center">
          <ion-button @click="check">
            valider
          </ion-button>
        </div>

        <div v-if="state.error" class="center red">
          {{ state.errorMessage }}
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
import ValidateUserModel from "./models/validateUserModel";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

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
      error: false,
      errorMessage: "mauvaise réponse",
      resp: "",
    });

    const rules = {
      resp: { required },
    };

    const v$ = useVuelidate(rules, state);

    const question = router.currentRoute.value.params.question;
    const mail = router.currentRoute.value.params.mail;

    const check = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      loginService
        .checkResponse(new ValidateUserModel(mail, state.resp))
        .then((value) => {
          if (value.mail) {
            router.push({
              name: "newMdp",
              params: { mail: value.mail, response: state.resp },
            });
          } else {
            state.error = true;
          }
        });
    };
    return { question, state, check, v$ };
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

.red {
  color: red;
}
</style>
