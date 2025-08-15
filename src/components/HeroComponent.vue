<template>
  <div class="hero__wrapper">
    <div class="hero">
      <div class="blink-toggle">
        <label class="switch">
          <input type="checkbox" v-model="blinkEnabled" @change="toggleBlink" id="blinkEnabled">
          <span for="blinkEnabled" class="slider round"></span>
        </label>
        <label for="blinkEnabled" class="blink-toggle-text">⚡flashing content</label>
      </div>
      <div class="title-creative"></div>
      <div class="personal__container" ref="personalContainer" tabindex="0">
        <div class="personal__title text-xs">Annelies Vaandrager</div>
        <!-- <img class="personal__picture" src="./../assets/img/me.png" /> -->
        <img class="personal__picture" src="./../assets/img/me_compressed.png" />
      </div>
    </div>
    <div class="title-creative-developer">
      <span>creative</span>
      <span>developer</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const blinkEnabled = ref(true);
const personalContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  blinkEnabled.value = window.localStorage.getItem('blinkEnabled') !== 'false';
  window.localStorage.setItem('blinkEnabled', blinkEnabled.value.toString());

  // Only add this class on mount, so the animation is not triggered immediately when you click the toggle
  if (!blinkEnabled.value) {
    personalContainer.value?.classList.add('personal__container--no-blink');
  }
});

const toggleBlink = () => {
  window.localStorage.setItem('blinkEnabled', blinkEnabled.value.toString());
};
</script>