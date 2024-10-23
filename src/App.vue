<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeroComponent />
  <div class="main">
    <div class="section">
      <h2 class="section__title">status</h2>
      <div class="section__content">
        <img
          class="picture-half"
          src="./assets/img/IMG_20230807_142920_Bokeh.png"
          alt=""
        />
        <table class="status-text__container">
          <tr class="status-text__container-row status-text__container-row--header"><td>Full-Stack developer <span class="status-text__container-label">@Internetbureau Slik</span></td></tr>
          <tr class="status-text__container-row">
            <td>
              <label>Age:</label>
              <p>24</p>
            </td>
          </tr>
          <tr class="status-text__container-row">
            <td>
              <label>Degree:</label>
              <p>MSc Media Technology, Leiden University</p>
            </td>
          </tr>
          <tr class="status-text__container-row">
            <td>
              <label>Languages:</label>
              <p>Dutch, English</p>
            </td>
          </tr>
          <tr class="status-text__container-row">
            <td>
              <label>Location:</label>
              <p>Rotterdam</p>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section__title">hobbies</h2>
      <div class="section__content">
        <div class="hobby__card hobby__card--guitar">
          <p class="hobby__card-title">guitar</p>
          <img src="./assets/img/hobby_vector_guitar.svg"/>
        </div>
        <div class="hobby__card hobby__card--travel">
          <p class="hobby__card-title">travel</p>
          <img src="./assets/img/hobby_vector_travel.svg"/>
        </div>
        <div class="hobby__card hobby__card--coding">
          <p class="hobby__card-title">coding</p>
          <img src="./assets/img/hobby_vector_coding.svg"/>
        </div>
        <div class="hobby__card hobby__card--craft">
          <p class="hobby__card-title">craft</p>
          <img src="./assets/img/hobby_vector_craft.svg"/>
        </div>
      </div>
    </div>


    <div class="section">
      <h2 class="section__title">tools</h2>
      <div class="section__content">
        <div class="skills__container">
            <div class="grid-item">
                <img src="./assets/img/logo-vue.svg"/>
                Vue (2 + 3)
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-ts.svg"/>
                TypeScript
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-java.svg"/>
                Java
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-php-white.png"/>
                PHP
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-cpp.svg"/>
                C++
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-python.svg"/>
                Python
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-js.svg"/>
                JavaScript
            </div>
            <div class="grid-item">
                <img src="./assets/img/logo-nodejs.svg"/>
                NodeJS
            </div>
          </div>
      </div>
    </div>

    <div class="section">
      <h2 class="section__title">projects</h2>
      <div class="section__content">
        <div class="projects__container">
          <div tabindex="0" class="project__card">
            <div class="project__card-content__wrapper">
              <h2 class="project__card-title">front-end</h2>
              <p class="project__card-subtitle">Mostly VueJS, vanilla JS, TypeScript, Smarty</p>
            </div>
            <div class="project__card__list">
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                SlimLaden (Android app)
              </div>
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Plotter crew planning
              </div>
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Offri recursive components
              </div>
            </div>
          </div>
          <div tabindex="0" class="project__card">
            <div class="project__card-content__wrapper">
              <h2 class="project__card-title">back-end</h2>
              <p class="project__card-subtitle">Mostly NodeJS, PHP</p>
            </div>
            <div class="project__card__list">
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Offri NodeJS module
              </div>
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Plotter PHP thing
              </div>
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Laravel dieren database
              </div>
            </div>
          </div>
          <div tabindex="0" class="project__card">
            <div class="project__card-content__wrapper">
              <h2 class="project__card-title">UX</h2>
              <p class="project__card-subtitle">collaborative design, interviews, brainstorming, creative sessions</p>
            </div>
            <div class="project__card__list">
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Plotter PHP thing
              </div>
            </div>
          </div>
          <div tabindex="0" class="project__card">
            <div class="project__card-content__wrapper">
              <h2 class="project__card-title">hardware</h2>
              <p class="project__card-subtitle">Arduino, Raspberry Pi, IoT, soldering, smart objects, robots</p>
            </div>
            <div class="project__card__list">
              <div class="project__card__list-item">
                <img class="project__card__list-item__picture" src="./assets//img/IMG_20230807_142920_Bokeh.png" />
                Laravel dieren database
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section">
      <h2 class="section__title">Toolbox</h2>
      <div class="skills__container">
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-ts.svg" />
          TypeScript
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-java.svg" />
          Java
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-php-white.png" />
          PHP
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-cpp.svg" />
          C++
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-python.svg" />
          Python
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-js.svg" />
          JavaScript
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-nodejs.svg" />
          NodeJS
        </div>
       
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">Projects</h2>
      <div class="projects__container">
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
        <div class="grid-item">
          <img src="./assets/img/logo-vue.svg" />
          Vue (2 + 3)
        </div>
      </div>
    </div>
    <div class="section">
      <h2 class="section__title">About me</h2>
    </div> -->
  </div>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import HeroComponent from "./components/HeroComponent.vue";

@Options({
  components: {
    HelloWorld,
    HeroComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "style.less";

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
