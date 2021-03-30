<template>
  <ion-page>
    <ion-content>
      <form @submit.prevent="onSubmit" novalidate>
        <ion-item>
          <ion-label> Pseudo </ion-label>
          <ion-input type="text" v-model="v$.pseudo.$model" />
        </ion-item>

        <ion-item>
          <ion-label> Mot de passe </ion-label>
          <ion-input type="password" v-model="v$.password.$model" />
        </ion-item>

        <ion-button type="submit">
          se connecter
        </ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { reactive, toRef } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "SignIn",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  setup() {
    const state = reactive({
      pseudo: "",
      password: "",
    });

    const rules = {
      pseudo: { required },
      password: { required },
    };

    const v$ = useVuelidate(rules, {
      pseudo: toRef(state, "pseudo"),
      password: toRef(state, "password"),
    });

    const onSubmit = () => {
      v$.value.$touch();
      console.log(v$);
    };
    return { v$, onSubmit };
  },
};
</script>

<style scoped></style>
