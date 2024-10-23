<template>
  <section-component :title="'tools'">
    <div class="projects__container">
      <div tabindex="0" class="project__card">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l text-l">front-end</h2>
          <p class="project__card-subtitle text-xs">Mostly VueJS, vanilla JS, TypeScript, Smarty</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            SlimLaden (Android app)
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Plotter crew planning
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Offri recursive components
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">back-end</h2>
          <p class="project__card-subtitle text-xs">Mostly NodeJS, PHP</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Offri NodeJS module
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Plotter PHP thing
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Laravel dieren database
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">UX</h2>
          <p class="project__card-subtitle text-xs">collaborative design, interviews, brainstorming, creative sessions</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Plotter PHP thing
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">hardware</h2>
          <p class="project__card-subtitle text-xs">Arduino, Raspberry Pi, IoT, soldering, smart objects, robots</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            Laravel dieren database
          </div>
        </div>
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