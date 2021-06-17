declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module '@vuelidate/core';
declare module '@vuelidate/validators';