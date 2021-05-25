<template>
  <ion-content class="ion-padding">
    <div class="flex top-modal">
      <ion-text class="title">Ajouter un avis</ion-text>
      <ion-text @click="close" class="close">X</ion-text>
    </div>
    <div class="flex rating">
      <ion-text>Note :</ion-text>
      <div class="rate-stars">
        <star-rating
          active-color="#f4c70e"
          :rating="rating"
          :star-size="25"
          :show-rating="false"
          :increment="0.5"
          @update:rating="setRating"
        />
        <div class="flex rate-div">
          <div @click="setRating(0.5)" />
          <div @click="setRating(1)" />
          <div @click="setRating(1.5)" />
          <div @click="setRating(2)" />
          <div @click="setRating(2.5)" />
          <div @click="setRating(3)" />
          <div @click="setRating(3.5)" />
          <div @click="setRating(4)" />
          <div @click="setRating(4.5)" />
          <div @click="setRating(5)" />
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit(rating)" novalidate>
      <div>
        <ion-textarea v-model="state.review"></ion-textarea>
      </div>
      <div v-if="v$.review.$error" class="center red">
        Votre review doit contenir au minimum 10 caractères
      </div>
      <div class="flex validate">
        <ion-button type="submit" color="medium">Valider</ion-button>
      </div>
    </form>
  </ion-content>
</template>

<script>
import StarRating from "vue-star-rating";
import { defineComponent, reactive } from "vue";
import {
  modalController,
  IonContent,
  IonText,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { ref } from "vue";
import ReviewService from "../../reviews/services/ReviewService";
import { store } from "@/store";

export default defineComponent({
  name: "AddReview",
  props: {
    id: Number,
  },
  components: {
    StarRating,
    IonContent,
    IonText,
    IonTextarea,
    IonButton,
  },
  setup(props, context) {
    const state = reactive({
      review: "",
    });

    const rules = {
      review: { required, minLength: minLength(10) },
    };
    const v$ = useVuelidate(rules, state);

    const onSubmit = (rating) => {
      console.log("submit");

      v$.value.$touch();
      if (v$.value.$invalid) return;
      console.log("ok");

      const data = {
        content: state.review,
        rating: rating,
        userId: store.getters.getToken.id,
        barId: props.id,
      };
      ReviewService.createReview(data).then((data) => {
        console.log(data);
        if (data.status === 201) {
          modalController.dismiss();
        }
      });
    };
    return { v$, onSubmit, state };
  },
  data() {
    return {
      rating: 0.5,
      barId: this.$route.params.id,
    };
  },
  methods: {
    async close() {
      await modalController.dismiss();
    },
    setRating(rating) {
      this.rating = rating;
    },
  },
});
</script>

<style>
.rating {
  align-items: center;
  justify-content: unset;
}
.vue-star-rating {
  margin-left: 5px;
}
textarea {
  background-color: #656669 !important;
  height: 100px;
  margin: 20px 0 !important;
  padding: 10px !important;
}
.rate-stars {
  position: relative;
}
.rate-div {
  position: absolute;
  top: 0;
  left: 10px;
}
.rate-div div {
  width: 12.5px;
  height: 25px;
}
.validate {
  justify-content: flex-end;
}
.center {
  text-align: center;
}
.red {
  color: red;
}
</style>
