<template>
  <ion-page>
    <ion-content>
      <div class="body form">
        <form @submit.prevent="onSubmit">
          <ion-item>
            <ion-label position="floating">
              nouveau mot de passe
              <ion-input v-model="state.password.pass" />
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label position="floating">
              valider le mot de passe
              <ion-input v-model="state.password.pass2" />
            </ion-label>
          </ion-item>
          <div class="center">
            <ion-button type="submit"> valider </ion-button>
          </div>
        </form>
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
import router from "@/router";
import { computed, reactive } from "vue";
import { required, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import loginService from "./services/loginService";

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
  setup() {
    const state = reactive({
      password: {
        pass: "",
        pass2: "",
      },
      mail: router.currentRoute.value.params.mail,
      response: router.currentRoute.value.params.response,
    });

    const rules = computed(() => {
      return {
        password: {
          pass: { required },
          pass2: { required, sameAs: sameAs(state.password.pass) },
        },
        mail: { required },
        response: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    const onSubmit = () => {
      v$.value.$touch();

      if (v$.value.$invalid) return;
      console.log(v$);

      loginService.newMdp({
        password: state.password.pass,
        mail: state.mail,
        response: state.response,
      });
    };

    return { v$, onSubmit, state };
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
