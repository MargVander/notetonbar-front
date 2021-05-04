<template>
  <ion-page>
    <ion-content>
      <ion-item class="body form">
        <ion-text>
          QUESTION
        </ion-text>
      </ion-item>

      <div class="body form">
        <ion-item>
          <ion-label position="floating">
            réponse
            <ion-input />
          </ion-label>
        </ion-item>

        <div class="center">
          <ion-button>
            valider
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonLabel,
  IonText,
  IonItem,
  IonButton,
  IonPage,
  IonContent,
} from "@ionic/vue";
import router from "@/router";

export default {
  name: "ValidateUser",
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonLabel,
    IonText,
    IonItem,
    IonButton,
  },
  setup() {
    const route = router.currentRoute.value.params;
    console.log(route);
  },
};
</script>

<style scoped>
.body {
  height: 50%;
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
