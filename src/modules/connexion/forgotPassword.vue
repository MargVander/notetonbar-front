<template>
  <ion-page>
    <ion-content>
      <div class="body" />
      <div class="form body">
        <form @submit.prevent="onSubmit" class="body">
          <ion-item>
            <ion-label position="floating"> adresse mail :</ion-label>
            <ion-input type="text" v-model="v$.mail.$model" />
          </ion-item>
          <div class="center">
            <ion-button type="submit">
              envoyer
            </ion-button>
          </div>
        </form>
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
} from "@ionic/vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ref } from "vue";
import router from "@/router";
import loginService from "./services/loginService";

export default {
  name: "ForgotPassword",
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
  },
  setup() {
    const mail = ref("");
    const rules = {
      mail: { required, email },
    };
    const v$ = useVuelidate(rules, { mail });

    const onSubmit = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      const a = Promise.resolve(loginService.forgotPassword(mail.value));
      a.then((value) => {
        router.push({
          name: "ValidateUser",
          params: { mail: value.mail, question: value.question },
        });
      });
    };
    return { v$, onSubmit };
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
</style>
