<template>
  <div class="projects-wall" v-if="visible">
    <span class="projects-wall__overlay" @click="close"></span>
    <div class="projects-wall__content">
        <div class="projects-wall__item">
            Offri
        </div>
        <div class="projects-wall__item">
            Plotter
        </div>
        <div class="projects-wall__item">
            Smarterdam 2.0
        </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    visible: Boolean,
  },
})
export default class ProjectsWall extends Vue {
    close() { 
        this.$emit("closeProjectWall");
    }

}
</script>

<style>

</style>