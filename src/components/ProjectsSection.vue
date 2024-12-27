<template>
  <section-component :title="'projects'">
    <div class="projects__container">
      <div tabindex="0" class="project__card" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l text-l">front-end</h2>
          <p class="project__card-subtitle text-xs">Mostly VueJS, vanilla JS, TypeScript, Smarty</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
            <p class="text-xs">
              SlimLaden (Android app)
            </p>
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">back-end</h2>
          <p class="project__card-subtitle text-xs">NodeJS, PHP</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">UX</h2>
          <p class="project__card-subtitle text-xs">...</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
        </div>
      </div>
      <div tabindex="0" class="project__card" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper">
          <h2 class="project__card-title text-l">hardware</h2>
          <p class="project__card-subtitle text-xs">Arduino, Raspberry Pi, IoT, soldering, smart objects, robots</p>
        </div>
        <div class="project__card__list">
          <div class="project__card__list-item">
            <img class="project__card__list-item__picture" src="../assets//img/IMG_20230807_142920_Bokeh.png" />
          </div>
        </div>
      </div>
    </div>
  </section-component>
</template>
<script>
import SectionComponent from "./SectionComponent.vue";

export default {
  components: {
    SectionComponent,
  },
  data() {
    return {
    }
  },
  methods: {
    toggleProjectCard(event, newState) {
      const projectCardEl = event.target
      const projectListEl = projectCardEl.querySelector(".project__card__list")
      const projectListItems = projectListEl.querySelectorAll(".project__card__list-item")
      let height = 0
      if(newState) {
        projectListItems.forEach(el => {
          height += parseInt(getComputedStyle(el).height)
        });
      }
      projectListEl.setAttribute('style', 'height: ' + height + 'px')
    }
  }
}

</script>

<style>

</style>