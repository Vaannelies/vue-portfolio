<template>
  <div class="projects-wall" v-if="visible">
    <span class="projects-wall__overlay" @click="close"></span>
    <img class="projects-wall__close" src="../assets/img/cross.svg" alt="Close" loading="lazy" @click="close"/>
    <div class="projects-wall__content">
        <h2 class="projects-wall__title title">more projects</h2>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_offri.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_offri.png" alt="Offri" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Offri</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_plotter.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_plotter.png" alt="Plotter" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Plotter</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_stelselmonitor.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_stelselmonitor.png" alt="Stelselmonitor" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Stelselmonitor</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_stadstheater.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_stadstheater.png" alt="Stadstheater Zoetermeer" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Stadstheater Zoetermeer</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_leidse-schouwburg.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_leidse-schouwburg.png" alt="Leidse Schouwburg" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Leidse Schouwburg</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_nabi.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_nabi.png" alt="Nationale Bibliotheek Nictiz highlight" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Nationale Bibliotheek Nictiz highlight search</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_vog-check.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_vog-check.png" alt="Stadstheater Zoetermeer" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">VOG Check accessibility</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_stemwijzer-readspeaker.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_stemwijzer-readspeaker.png" alt="StemWijzer" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">StemWijzer Readspeaker</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_cmmbo.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_cmmbo.png" alt="CMMBO accessibility" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">CMMBO accessibility</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_evm.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_evm.png" alt="EVM" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">EVM</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_kbf.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_kbf.jpg" alt="KBF" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">KBF filter</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_sjgr.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_sjgr.jpg" alt="Stichting Je Goed Recht" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">Stichting Je Goed Recht tweaks</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_plugdata-wind.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_plugdata-wind.png" alt="PlugData simulation of wind sounds" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) PlugData simulation of wind sounds</p>
        </div>
        <div class="projects-wall__item">
          <img src="../assets/img/projects_wall_strings-attached.svg" alt="Strings Attached Guitar Game" loading="lazy"/>
          <p class="projects-wall__item-title text-s">(School) Strings Attached</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_boerderij-box.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_boerderij-box.svg" alt="Boerderij Box" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) Boerderij Box</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_hokkie-led.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_hokkie-led.svg" alt="Hokkie LED" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) Hokkie LED</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_erasmusbrug-pad.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_erasmusbrug-pad.svg" alt="Erasmusbrug Pad" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) Erasmusbrug Pad</p>
        </div>
        <div class="projects-wall__item">
          <img src="../assets/img/projects_wall_rudy.svg" alt="Rudy" loading="lazy"/>
          <p class="projects-wall__item-title text-s">(School) Rudy app</p>
        </div>
        <div class="projects-wall__item">
          <img src="../assets/img/projects_wall_smarterdam.svg" alt="Smarterdam 2.0" loading="lazy"/>
          <p class="projects-wall__item-title text-s">(School) Smarterdam 2.0</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_proplu.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_proplu.svg" alt="Proplu" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) Proplu</p>
        </div>
        <div class="projects-wall__item">
          <picture>
            <source srcset="../assets/img/projects_wall_paper-prototype.webp" type="image/webp"/>
            <img src="../assets/img/projects_wall_paper-prototype.svg" alt="Paper Prototype" loading="lazy"/>
          </picture>
          <p class="projects-wall__item-title text-s">(School) Paper Prototype for a game</p>
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