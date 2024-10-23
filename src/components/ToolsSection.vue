<template>
  <section-component :title="'tools'">
    <div class="tools__container">
      <div class="grid-item">
          <img src="../assets/img/logo-vue.svg"/>
          Vue (2 + 3)
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-ts.svg"/>
          TypeScript
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-java.svg"/>
          Java
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-php.svg"/>
          PHP
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-cpp.svg"/>
          C++
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-python.svg"/>
          Python
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-js.svg"/>
          JavaScript
      </div>
      <div class="grid-item">
          <img src="../assets/img/logo-nodejs.svg"/>
          NodeJS
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
export default class StatusSection extends Vue {}
</script>

<style>

</style>