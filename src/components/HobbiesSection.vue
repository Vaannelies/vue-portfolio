<template>
    <section-component :title="'hobbies'">
        <div class="cards__container spacing-gap">
            <div class="hobby__card hobby__card--guitar" tabindex="0">
              <p class="hobby__card-title title-s">guitar</p>
              <img src="../assets/img/hobby_vector_guitar.svg"/>
            </div>
            <div class="hobby__card hobby__card--travel" tabindex="0">
              <p class="hobby__card-title title-s">travel</p>
              <img src="../assets/img/hobby_vector_travel.svg"/>
            </div>
            <div class="hobby__card hobby__card--coding" tabindex="0">
              <p class="hobby__card-title title-s">coding</p>
              <img src="../assets/img/hobby_vector_coding.svg"/>
            </div>
            <div class="hobby__card hobby__card--craft" tabindex="0">
              <p class="hobby__card-title title-s">craft</p>
              <img src="../assets/img/hobby_vector_craft.svg"/>
            </div>
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
  export default class HobbiesSection extends Vue {}
  </script>
  
  <style>
  
  </style>