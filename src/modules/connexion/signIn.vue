<template>
  <ion-page>
    <ion-content>
      <div class="body" />
      <div class="body test">
        <ion-grid>
          <ion-row>
            <ion-col size="2" />

            <ion-col>
              <form @submit.prevent="onSubmit" class="test try">
                <ion-item class="fontSize">
                  <ion-label position="floating"> Pseudo :</ion-label>
                  <ion-input type="text" v-model="v$.pseudo.$model" />
                </ion-item>

                <ion-item>
                  <ion-label position="floating"> Mot de passe :</ion-label>
                  <ion-input type="password" v-model="v$.password.$model" />
                </ion-item>

                <div class="center">
                  <ion-button type="submit">
                    se connecter
                  </ion-button>
                </div>
              </form>
            </ion-col>

            <ion-col size="2" />
          </ion-row>
        </ion-grid>

        <div>
          <div class="center">
            <ion-nav-link id="signUp" router-link="SignUp">
              Me créer un compte
            </ion-nav-link>
          </div>
        </div>
      </div>

      <div class="body flex mdp">
        <ion-nav-link id="forgotPassword" router-link="ForgotPassword">
          mot de passe oublié
        </ion-nav-link>
      </div>
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
  IonNavLink,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { reactive, toRef } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import loginService from "./services/loginService";
export default {
  name: "SignIn",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonNavLink,
    IonCol,
    IonGrid,
    IonRow,
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
      if (v$.value.$invalid) return;
      console.log(v$);

      loginService.login(state);
    };
    return { v$, onSubmit };
  },
};
</script>

<style scoped>
.fontSize {
  font-size: 0.9rem;
}
.center {
  text-align: center;
}

.right {
  text-align: right;
}
.body {
  height: 33%;
}

.flex {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
}

.mdp {
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
}
</style>
