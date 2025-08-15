<template>
    <section-component :title="'ask me about...'">
        <div class="cards__container spacing-gap-l">
            <a class="card featured-projects__card" tabindex="0" target="_blank" href="https://p1.nl">
              <p class="card-title featured-projects__card-title text-xs">P1 website</p>
              <img src="../assets/img/featured_p1.png" alt="Slimladen">
            </a>
            <div class="card featured-projects__card" tabindex="0" target="_blank" href="https://p1.nl">
              <p class="card-title featured-projects__card-title text-xs">Slimladen Android app</p>
              <img src="../assets/img/featured_slimladen.png" alt="Slimladen">
            </div>
            <div class="card featured-projects__card" tabindex="0" target="_blank" href="https://p1.nl">
              <p class="card-title featured-projects__card-title text-xs">SlikSVN Panel (WIP)</p>
              <img src="../assets/img/featured_sliksvn.png" alt="Slimladen">
            </div>
        </div>
        <button class="button button--secondary" @click="$emit('openProjectWall')">More >></button>
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
  export default class HobbiesSection extends Vue {
    openProjectWall() {
      this.$emit("openProjectWall");
    }
  }
  </script>
  
  <style>
  
  </style>