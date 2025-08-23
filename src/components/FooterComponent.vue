<template>
  <footer>
    <div class="footer__contact-wrapper">
      <div class="footer__contact-container">
          <h2 class="title">let's connect</h2>
          <div class="footer__icons">
            <a target="_blank" href="https://linkedin.com/in/anneliesvaandrager" class="footer__icon button"><img src="../assets/img/linkedin-app-white-icon.png"/></a>
            <a target="_blank" href="https://github.com/Vaannelies" class="footer__icon button"><img src="../assets/img/github-white-icon.png"/></a>
            <a target="_blank" href="https://instagram.com/groetjesvanannelies" class="footer__icon button"><img src="../assets/img/instagram-white-icon.png"/></a>
            <a target="_blank" href="mailto:annelies.vaandrager@outlook.com" class="footer__icon button"><img src="../assets/img/email-white-icon.png"/></a>
          </div>
      </div>
    </div>
    <div tabindex="0" class="footer__image-wrapper" @keydown.right.prevent="nextImage" @keydown.left.prevent="previousImage">
      <img class="footer__image" :src="images[imageIndex].src" loading="lazy"/>
      <p class="text-xs">{{ images[imageIndex].alt }}</p>
      <button class="footer__image__button button" @click="previousImage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Tailless-Triangle-Arrow-Left-1--Streamline-Core" height="16" width="16">
          <g id="tailless-triangle-arrow-left-1--arrow-keyboard-left">
            <path id="Union" fill="currentColor" fill-rule="evenodd" d="M10.049017142857142 0.334768c0.3268571428571428 -0.32685435428571424 0.8184228571428571 -0.4246323428571428 1.2454742857142858 -0.24773977142857143C11.721599999999999 0.26392114285714285 12 0.6806479999999999 12 1.1428914285714284V14.857142857142856c0 0.4622857142857143 -0.2784 0.8789714285714285 -0.7055085714285714 1.0558857142857143 -0.4270514285714285 0.1769142857142857 -0.9186171428571428 0.07908571428571427 -1.2454742857142858 -0.24777142857142856L3.595942857142857 9.212217142857142c-0.6694742857142857 -0.6694742857142857 -0.6694742857142857 -1.7548914285714285 0 -2.424365714285714L10.049017142857142 0.334768Z" clip-rule="evenodd" stroke-width="1.1429"></path>
          </g>
        </svg>
      </button>
      <button class="footer__image__button button" @click="nextImage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Tailless-Triangle-Arrow-Right-1--Streamline-Core" height="16" width="16">
          <g id="tailless-triangle-arrow-right-1--arrow-right-keyboard">
            <path id="Union" fill="currentColor" fill-rule="evenodd" d="M5.950982857142857 0.334768c-0.3268571428571428 -0.32685435428571424 -0.8184228571428571 -0.4246323428571428 -1.2454742857142858 -0.24773977142857143C4.278445714285714 0.26392114285714285 4 0.6806479999999999 4 1.1428914285714284V14.857142857142856c0 0.4622857142857143 0.27844571428571424 0.8789714285714285 0.7055085714285714 1.0558857142857143 0.4270514285714285 0.1769142857142857 0.9186171428571428 0.07908571428571427 1.2454742857142858 -0.24777142857142856l6.453131428571428 -6.45304c0.6693714285714285 -0.6694742857142857 0.6693714285714285 -1.7548914285714285 0 -2.424365714285714L5.950982857142857 0.334768Z" clip-rule="evenodd" stroke-width="1.1429"></path>
          </g>
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import cernImage from '../assets/img/cern.jpg'
import mediaTechImage from '../assets/img/media-tech.jpg'
import moonshotsImage from '../assets/img/moonshots.jpg'
import arsElectronicaImage from '../assets/img/ars_electronica.png'

const imageIndex = ref(0)
const images = ref([
  {
    src: cernImage,
    alt: 'The ATLAS control room at CERN, Geneva'
  },
  {
    src: mediaTechImage,
    alt: 'Media Technology classroom, Leiden University'
  },
  {
    src: moonshotsImage,
    alt: 'NL Moonshots \'24, Leiden Instrument Makers School (LiS)'
  },
  {
    src: arsElectronicaImage,
    alt: 'Ars Electronica, Festival for art, science and technology, Linz'
  }
])

const previousImage = () => {
  if(imageIndex.value > 0) {
    imageIndex.value--
  } else {
    imageIndex.value = images.value.length - 1
  }
}

const nextImage = () => {
  if(imageIndex.value < images.value.length - 1) {
    imageIndex.value++
  } else {
    imageIndex.value = 0
  }
}
</script>

