<template>
  <ion-page>
    <ion-content>
      <div class="body" />

      <div class="bodyForm">
        <form @submit.prevent="onSubmit" class="">
          <ion-item>
            <ion-label position="floating"> Pseudo </ion-label>
            <ion-input type="text" v-model="state.pseudo" />
          </ion-item>
          <div v-if="v$.pseudo.$error" class="center red">
            veuillez renseigner un pseudo
          </div>

          <ion-item>
            <ion-label position="floating"> Mail </ion-label>
            <ion-input type="text" v-model="state.mail" />
          </ion-item>
          <div v-if="v$.mail.$error" class="center red">
            veuillez renseigner une adresse mail valide
          </div>
          <ion-item>
            <ion-label position="floating"> Mot de passe </ion-label>
            <ion-input type="password" v-model="state.password" />
          </ion-item>
          <div v-if="v$.password.$error" class="center red">
            veuillez renseigner un mot de passe de 6 caractères manimum
          </div>

          <ion-item>
            <ion-label position="floating"> question secrète </ion-label>
            <ion-select type="string" v-model="state.question">
              <ion-select-option
                v-for="(item, index) in state.questions"
                :key="index"
                :value="item"
              >
                {{ item }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <div v-if="v$.question.$error" class="center red">
            veuillez renseigner une question
          </div>

          <ion-item>
            <ion-label position="floating"> réponse </ion-label>
            <ion-input type="text" v-model="state.response" />
          </ion-item>
          <div v-if="v$.response.$error" class="center red">
            veuillez renseigner une réponse
          </div>

          <ion-item>
            <ion-label position="floating"> age </ion-label>
            <ion-input type="number" v-model="state.age" />
          </ion-item>
          <div v-if="v$.age.$error" class="center red">
            veuillez renseigner un age valide
          </div>

          <ion-item>
            <ion-label position="floating"> Avatar </ion-label>
            <ion-input type="file" @change="uploadImage($event)" />
          </ion-item>

          <div class="center">
            <ion-button type="submit">
              s'inscrire
            </ion-button>
          </div>
          <div v-if="state.error" class="center red">
            {{ state.errorMessage }}
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
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import {
  required,
  email,
  integer,
  minValue,
  minLength,
  maxValue,
} from "@vuelidate/validators";
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import loginService from "./services/loginService";
import SignUpModel from "./models/signUpModel";
import router from "@/router";
export default {
  name: "SignUp",
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const state = reactive({
      pseudo: "",
      mail: "",
      password: "",
      age: 0,
      picture: File,
      question: "",
      response: "",
      questions: undefined,
      error: false,
      errorMessage: "",
    });

    const rules = {
      pseudo: { required },
      mail: { email, required },
      password: { required, minLength: minLength(6) },
      question: { required },
      response: { required },
      age: { integer, minValue: minValue(0), maxValue: maxValue(120) },
      picture: {},
    };

    const v$ = useVuelidate(rules, state);

    loginService.getQuestion().then((response) => {
      if (response.Q1) {
        console.log(response);
        state.questions = response;
      }
    });

    const uploadImage = (event: any) => {
      console.log(event.target.files);

      state.picture = event.target.files[0];
    };

    const onSubmit = () => {
      v$.value.$touch();
      console.log(v$);
      if (v$.value.$invalid) return;

      loginService
        .signUp(
          new SignUpModel(
            state.pseudo,
            state.mail,
            state.password,
            state.question,
            state.response,
            state.age
          )
        )
        .then((data) => {
          if (data.identifiers) {
            if (state.picture.name) {
              console.log(state.picture.name);

              loginService.addPicture(state.picture, data.identifiers[0].id);
            }

            router.push({
              name: "SignIn",
            });
          } else {
            state.error = true;
          }
        });
    };

    return { v$, onSubmit, state, uploadImage };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.red {
  color: red;
}
.body {
  height: 10%;
}

.bodyForm {
  height: 80%;
}
</style>
