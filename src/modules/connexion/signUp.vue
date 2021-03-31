<template>
  <ion-page>
    <ion-content>
      <form @submit.prevent="onSubmit" novalidate>
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
          <ion-input type="text" v-model="v$.age.$model" />
        </ion-item>

        <ion-item>
          <ion-label position="floating"> Avatar </ion-label>
          <ion-input type="text" v-model="v$.avatar.$model" />
        </ion-item>

        <div class="center">
          <ion-button type="submit">
            s'inscrire
          </ion-button>
        </div>
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
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
} from "@vuelidate/validators";
import { reactive, toRef } from "vue";
import useVuelidate from "@vuelidate/core";
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
      age: "",
      avatar: "",
    });

    const rules = {
      pseudo: { required },
      mail: { email, required },
      password: { required, minLength: minLength(8) },
      age: { numeric, minValue: minValue(0) },
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
      console.log(state);
    };

    return { v$, onSubmit };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
