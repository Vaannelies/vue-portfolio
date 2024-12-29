<template>
    <div @keydown.left="selectedIndex == null ? switchGridCard($event, false) : decreaseSelection()" @keydown.right="selectedIndex == null ? switchGridCard($event, true) : increaseSelection()" tabindex="0" class="grid__card" @focusin="toggleGridCard($event, true)" @blur="toggleGridCard($event, false)" :style="'background-image: url(\''+backgroundImage+'\')'">
        <div class="grid__card-content__wrapper">
            <h2 class="grid__card-title text-l">{{ title }}</h2>
            <p class="grid__card-subtitle text-xs">{{ description }}</p>
            <div v-if="disableUnfold" class="grid__card-hover-text text-xs">
              <slot></slot>
            </div>
        </div>
        <div class="grid__card__list">
          <div class="grid__card__list-item">
              <video v-if="heroVideo" muted autoplay loop class="grid__card__list-item__picture" :src="heroVideo" type="video/mp4" />
              <img v-else class="grid__card__list-item__picture" :src="heroImage" />
              <div class="grid__card__list-item__content-wrapper">
                <ul class="grid__card__media-list" v-if="media !== null">
                    <li class="grid__card__media-item" v-for="(item, index) in media" v-bind:key="index" @click="selectedIndex = index">
                      <video v-if="item.type == 'video'" muted :src="item.path" type="video/mp4" />
                      <img v-else-if="item.type == 'image'" :src="item.path" />
                      <iframe v-else @click="selectedIndex = index" width="80" height="80" :src="item.path" title="YouTube video player" frameborder="0" disabled referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </li>
                </ul>
                <div class="grid__card__text text-xs">
                    <p v-if="text">{{ text }}</p>
                    <slot v-else></slot>
                    <div v-if="selectedIndex !== null" class="grid__card__list-item__pop-up" @click.self="selectedIndex = null">
                        <video v-if="media[selectedIndex].type == 'video'" muted controls autoplay loop :src="media[selectedIndex].path" type="video/mp4" />
                        <img v-else-if="media[selectedIndex].type == 'image'" :src="media[selectedIndex].path" />
                        <iframe v-else width="560" height="315" :src="media[selectedIndex].path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div v-if="media.length > 1" class="pop-up__arrows">
                          <button class="pop-up__arrow pop-up__arrow--left" :class="{'enabled':selectedIndex > 0}" @click.prevent="decreaseSelection"><</button>
                          <button class="pop-up__arrow pop-up__arrow--right" :class="{'enabled': selectedIndex < media.length - 1}" @click.prevent="increaseSelection">></button>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>


<script>
import SectionComponent from "./SectionComponent.vue";

export default {
  components: {
    SectionComponent,
  },
  emits: ['toggleGridCard'],
  props: ['title', 'description', 'text', 'heroImage', 'backgroundImage', 'heroVideo', 'media', 'disableUnfold'],
    data() {
    return {
        title: this.title,
        description: this.description,
        text: this.text,
        heroImage: this.heroImage,
        backgroundImage: this.backgroundImage,
        heroVideo: this.heroVideo,
        media: this.media || null,
        disableUnfold: this.disableUnfold,
        selectedIndex: null,
        hasFocus: false
    }
  },
  methods: {
    toggleGridCard(event, newState, isOverlay) {
      this.$emit('toggleGridCard', {'event': event, 'newState': newState, 'isOverlay': isOverlay, 'element': this.$el, 'disableUnfold': this.disableUnfold} )
    },
    preventClose(event) {
      event.preventDefault()
    },
    increaseSelection() {
      this.selectedIndex < this.media.length - 1 ? this.selectedIndex++ : false
    },
    decreaseSelection() {
      this.selectedIndex > 0 ? this.selectedIndex-- : false
    },
    switchGridCard(event, next) {
      if(next) {
        if(event.target.nextSibling) {
          event.target.nextSibling.focus()
        } else {
          if(event.target.parentElement.nextSibling) {
            event.target.parentElement.nextSibling.children[0].focus()
          }
        }
      } else {
        if(event.target.previousSibling) {
          event.target.previousSibling.focus()
        } else {
          if(event.target.parentElement.previousSibling) {
            event.target.parentElement.previousSibling.lastChild?.focus()
          }
        }
      }
    }
  }
}

</script>