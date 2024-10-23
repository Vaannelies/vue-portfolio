<template>
    <section-component :title="'hobbies'">
        <div class="hobby__card hobby__card--guitar">
          <p class="hobby__card-title text-m">guitar</p>
          <img src="../assets/img/hobby_vector_guitar.svg"/>
        </div>
        <div class="hobby__card hobby__card--travel">
          <p class="hobby__card-title text-m">travel</p>
          <img src="../assets/img/hobby_vector_travel.svg"/>
        </div>
        <div class="hobby__card hobby__card--coding">
          <p class="hobby__card-title text-m">coding</p>
          <img src="../assets/img/hobby_vector_coding.svg"/>
        </div>
        <div class="hobby__card hobby__card--craft">
          <p class="hobby__card-title text-m">craft</p>
          <img src="../assets/img/hobby_vector_craft.svg"/>
        </div>
    </section-component>
  </template>
  
  <script>
  import { Options, Vue } from "vue-class-component";
  import SectionComponent from "./SectionComponent.vue";
  
  @Options({
    components: {
      SectionComponent,
    },
  })
  export default class StatusSection extends Vue {}
  </script>
  
  <style>
  
  </style>