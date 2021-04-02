<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <form @submit.prevent="onSubmit" novalidate>
          <ion-item>
            <ion-label position="floating" class="fontSize">
              adresse mail :</ion-label
            >
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
import { IonContent, IonPage, IonLabel, IonItem, IonInput } from "@ionic/vue";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import loginService from "./services/loginService";

export default {
  name: "ForgotPassword",
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonInput,
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
      console.log(v$);
      loginService.forgotMail(mail.value);
    };
    return { v$, onSubmit };
  },
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2em;
  margin-right: 2em;
}
.center {
  text-align: center;
}
.fontSize {
  font-size: 8px;
}
</style>
