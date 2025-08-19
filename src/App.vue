<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeroComponent/>
  <div class="main">
    <StatusSection/>
    <HobbiesSection/>
    <ToolsSection/>
    <FeaturedProjectsSection @openProjectWall="showProjectsWall = true"/>
    <ProjectsSection/>
  </div>
  <div class="main main--no-blend">
    <MediaTechSection/>
  </div>
  <FooterComponent/>
  <ProjectsWall :visible="showProjectsWall" @closeProjectWall="showProjectsWall = false"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
import HeroComponent from "./components/HeroComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import StatusSection from "./components/StatusSection.vue";
import HobbiesSection from "./components/HobbiesSection.vue";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection.vue";
import ToolsSection from "./components/ToolsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ProjectsWall from "./components/ProjectsWall.vue";

// Lazy load de grote MediaTechSection component
const MediaTechSection = defineAsyncComponent(() => 
  import("./components/MediaTechSection.vue")
);

@Options({
  components: {
    HeroComponent,
    FooterComponent,
    StatusSection,
    HobbiesSection,
    ToolsSection,
    ProjectsSection,
    MediaTechSection,
    FeaturedProjectsSection,
    ProjectsWall,
  },
})
export default class App extends Vue {
  showProjectsWall = false;
}
</script>

<style>
@import "style.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
