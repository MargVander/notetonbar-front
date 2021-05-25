<template>
  <ion-page>
    <ion-content>
      <div class="body" />
      <div class="form body">
        <form @submit.prevent="onSubmit" class="body">
          <ion-item>
            <ion-label position="floating"> adresse mail :</ion-label>
            <ion-input type="text" v-model="state.mail" />
          </ion-item>
          <div v-if="v$.mail.$error" class="red">
            veuillez renseigner une adresse mail valide
          </div>
          <div class="center">
            <ion-button type="submit">
              envoyer
            </ion-button>
          </div>
        </form>
      </div>

      <div v-if="state.error">
        <ion-text>
          <div class="center red">
            {{ state.errorMessage }}
          </div>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive } from "vue";
import router from "@/router";
import loginService from "./services/loginService";
import ForgotPasswordModel from "./models/forgotPasswordModel";
import { store } from "@/store";

export default {
  name: "ForgotPassword",
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    IonText,
  },
  setup() {
    const state = reactive({
      mail: "margaux@mail.com",
      error: false,
      errorMessage: "Adresse mail inconnue",
    });
    const rules = {
      mail: { required, email },
    };
    const v$ = useVuelidate(rules, state);
    console.log("depuis le store : " + store.getters.getToken.access_token);

    const onSubmit = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      loginService
        .forgotPassword(new ForgotPasswordModel(state.mail))
        .then((value) => {
          console.log(value);
          if (value.mail) {
            state.error = false;
            router.push({
              name: "ValidateUser",
              params: { mail: value.mail, question: value.question },
            });
          } else {
            state.error = true;
          }
        });
    };
    return { v$, onSubmit, state };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.center {
  text-align: center;
}
.body {
  height: 33%;
}

.red {
  color: red;
}
</style>
