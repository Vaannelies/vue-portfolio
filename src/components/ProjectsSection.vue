<template>
  <section-component :title="'methods'" imageName="glitter">
    <div class="projects__container">
      <div class="project__card" @click="toggleProjectCard($event, true)" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper spacing-gap">
          <h2 class="project__card-title title">front-end</h2>
          <p class="project__card-subtitle text-xs">Websites, web apps, native apps (Android)</p>
        </div>
      </div>
      <div class="project__card" @click="toggleProjectCard($event, true)" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper spacing-gap">
          <h2 class="project__card-title title">back-end</h2>
          <p class="project__card-subtitle text-xs">(REST) APIs, database queries (CRUD), creating endpoints, data validation, authentication, authorization, migrations, seeders</p>
        </div>
      </div>
      <div class="project__card" @click="toggleProjectCard($event, true)" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper spacing-gap">
          <h2 class="project__card-title title">UX</h2>
          <p class="project__card-subtitle text-xs">Accessibility, interviews, journey maps, personas, user flows, usability testing, info architecture, paper prototypes, empathy maps, user stories, wireframes</p>
        </div>
      </div>
      <div class="project__card" @click="toggleProjectCard($event, true)" @focus="toggleProjectCard($event, true)" @blur="toggleProjectCard($event, false)">
        <div class="project__card-content__wrapper spacing-gap">
          <h2 class="project__card-title title">hardware</h2>
          <p class="project__card-subtitle text-xs">Rapid prototyping, soldering, robots, Arduino, Raspberry Pi, IoT, smart objects, 3D printing, laser cutting</p>
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
      return;
      // const projectCardEl = event.target
      // const projectListEl = projectCardEl.querySelector(".project__card__list")
      // const projectListItems = projectListEl.querySelectorAll(".project__card__list-item")
      // let height = 0
      // if(newState) {
      //   projectListItems.forEach(el => {
      //     height += parseInt(getComputedStyle(el).height)
      //   });
      // }
      // projectListEl.setAttribute('style', 'height: ' + height + 'px')
    }
  }
}

</script>

<style>

</style>