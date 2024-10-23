<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeroComponent/>
  <div class="main">
    <StatusSection/>
    <HobbiesSection/>
    <ToolsSection/>
    <ProjectsSection/>
  </div>
  <FooterComponent/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeroComponent from "./components/HeroComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import StatusSection from "./components/StatusSection.vue";
import HobbiesSection from "./components/HobbiesSection.vue";
import ToolsSection from "./components/ToolsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

@Options({
  components: {
    HeroComponent,
    FooterComponent,
    StatusSection,
    HobbiesSection,
    ToolsSection,
    ProjectsSection,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "style.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
