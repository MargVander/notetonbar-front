<template>
  <ion-page>
    <ion-content>
      <div class="body" />
      <div class="body">
        <ion-grid>
          <ion-row>
            <ion-col size="2" />

            <ion-col>
              <form @submit.prevent="onSubmit" class="test try">
                <ion-item class="fontSize">
                  <ion-label position="floating"> mail :</ion-label>
                  <ion-input type="text" v-model="state.mail" />
                </ion-item>
                <div v-if="v$.mail.$error" class="center red">
                  veuillez renseigner une adresse mail valide
                </div>

                <ion-item>
                  <ion-label position="floating"> Mot de passe :</ion-label>
                  <ion-input type="password" v-model="state.password" />
                </ion-item>
                <div v-if="v$.password.$error" class="center red">
                  veuillez remplir ce champ
                </div>

                <div class="center">
                  <ion-button type="submit">
                    se connecter
                  </ion-button>
                </div>

                <div v-if="state.error" class="center red">
                  {{ state.errorMessage }}
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
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import loginService from "./services/loginService";
import LoginModel from "./models/loginModel";
import { store } from "@/store";
import router from "@/router";

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
      mail: "cyriak@mail.com",
      password: "root",
      error: false,
      errorMessage: "Identifiants incorrects",
    });

    const rules = {
      mail: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);

    const onSubmit = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      loginService
        .login(new LoginModel(state.mail, state.password))
        .then((data) => {
          if (data.access_token) {
            state.error = false;
            store.commit("setToken", data);
            console.log(
              "depuis le store : " + store.getters.getToken.access_token
            );
            router.push({
              name: "ProfilUser",
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
.red {
  color: red;
}
</style>
