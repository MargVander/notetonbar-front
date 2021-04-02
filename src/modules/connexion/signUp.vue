<template>
  <ion-page>
    <ion-content class="test">
      <div class="body" />

      <div class="bodyForm">
        <form @submit.prevent="onSubmit" class="">
          <ion-item>
            <ion-label position="floating"> Pseudo </ion-label>
            <ion-input type="text" v-model="v$.pseudo.$model" />
          </ion-item>

          <ion-item>
            <ion-label position="floating"> Mail </ion-label>
            <ion-input type="text" v-model="v$.mail.$model" />
          </ion-item>

          <ion-item>
            <ion-label position="floating"> Mot de passe </ion-label>
            <ion-input type="password" v-model="v$.password.$model" />
          </ion-item>

          <ion-item>
            <ion-label position="floating"> age </ion-label>
            <ion-input type="number" v-model="v$.age.$model" />
          </ion-item>

          <ion-item>
            <ion-label position="floating"> Avatar </ion-label>
            <ion-input type="file" v-model="v$.avatar.$model" />
          </ion-item>

          <div class="center">
            <ion-button type="submit">
              s'inscrire
            </ion-button>
          </div>
        </form>
      </div>

      <div class="body" />
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
import {
  required,
  email,
  integer,
  minValue,
  minLength,
} from "@vuelidate/validators";
import { reactive, toRef } from "vue";
import useVuelidate from "@vuelidate/core";
import loginService from "./services/loginService";
export default {
  name: "SignUp",
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
      mail: "",
      password: "",
      age: 0,
      avatar: "",
    });

    const rules = {
      pseudo: { required },
      mail: { email, required },
      password: { required, minLength: minLength(8) },
      age: { integer, minValue: minValue(0) },
      avatar: {},
    };

    const v$ = useVuelidate(rules, {
      pseudo: toRef(state, "pseudo"),
      mail: toRef(state, "mail"),
      password: toRef(state, "password"),
      age: toRef(state, "age"),
      avatar: toRef(state, "avatar"),
    });

    const onSubmit = () => {
      v$.value.$touch();
      console.log(v$);
      if (v$.value.$invalid) return;
      loginService.signUp(state);
    };

    return { v$, onSubmit };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.body {
  height: 20%;
}

.bodyForm {
  height: 60%;
}
</style>
