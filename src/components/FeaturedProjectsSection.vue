<template>
    <section-component :title="''">
        <div class="cards__container spacing-gap-l">
            <div class="card featured-projects__card" tabindex="0">
              <p class="card-title featured-projects__card-title text-xs">P1 website</p>
              <img src="../assets/img/featured_p1.png" alt="Slimladen">
            </div>
            <div class="featured-projects__card" tabindex="0">
              <p class="card-title featured-projects__card-title text-xs">Slimladen Android app</p>
              <img src="../assets/img/featured_slimladen.png" alt="Slimladen">
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