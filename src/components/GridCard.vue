<template>
    <div @keydown.left="selectedIndex == null ? switchGridCard($event, false) : decreaseSelection()" @keydown.right="selectedIndex == null ? switchGridCard($event, true) : increaseSelection()" tabindex="0" class="grid__card" @keyup.esc="toggleGridCard($event, false)" @focusin="toggleGridCard($event, true)" @blur="toggleGridCard($event, false)">
        <div class="grid__card-content__wrapper">
            <h2 class="grid__card-title text-l text-l">{{ title }}</h2>
            <p class="grid__card-subtitle text-xs">{{ description }}</p>
        </div>
        <div class="grid__card__list" @click="preventClose($event)">
          <div class="grid__card__list-item">
              <video v-if="heroVideo" muted autoplay loop class="grid__card__list-item__picture" :src="heroVideo" type="video/mp4" />
              <img v-else class="grid__card__list-item__picture" :src="heroImage" />
              <div class="grid__card__text">
                  <p v-if="text">{{ text }}</p>
                  <slot v-else></slot>
                  <ul class="grid__card__media-list" v-if="media !== null">
                      <li class="grid__card__media-item" v-for="(item, index) in media" v-bind:key="index" @click="selectedIndex = index">
                          <video v-if="item.type == 'video'" muted :src="item.path" type="video/mp4" />
                          <img v-else  :src="item.path" />
                      </li>
                  </ul>
                  <div v-if="selectedIndex !== null" class="grid__card__list-item__pop-up" @click.self="selectedIndex = null">
                      <video v-if="media[selectedIndex].type == 'video'" muted controls autoplay loop :src="media[selectedIndex].path" type="video/mp4" />
                      <img v-else :src="media[selectedIndex].path" />
                      <div class="pop-up__arrows">
                        <button class="pop-up__arrow pop-up__arrow--left" :class="{'visible':selectedIndex > 0}" @click.prevent="decreaseSelection"><</button>
                        <button class="pop-up__arrow pop-up__arrow--right" :class="{'visible': selectedIndex < media.length - 1}" @click.prevent="increaseSelection">></button>
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
  props: ['title', 'description', 'text', 'heroImage', 'backgroundImage', 'heroVideo', 'media', 'disableUnfold'],
    data() {
    // console.log(props)
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
    }
  },
  methods: {
    toggleGridCard(event, newState) {
      if(this.disableUnfold) {
        return
      }
      let height = 0
      const gridCardEl = event.target
      const gridListEl = gridCardEl.querySelector(".grid__card__list")
      if(gridListEl) {
        if(newState) {
          const gridListItems = gridListEl.querySelectorAll(".grid__card__list-item")
          gridListItems.forEach(el => {
            height += parseInt(getComputedStyle(el).height)
          });
        } else {
          event.target.blur()
        }
        console.log(newState)
        if(newState || !event.relatedTarget || (event.relatedTarget && event.relatedTarget.className == "grid__card")) {
          gridListEl.setAttribute('style', 'height: ' + height + 'px')
        }
      }
    },
    preventClose(event) {
      event.preventDefault()
    },
    increaseSelection() {
      console.log("+")
      this.selectedIndex < this.media.length - 1 ? this.selectedIndex++ : false
    },
    decreaseSelection() {
      console.log("-")
      this.selectedIndex > 0 ? this.selectedIndex-- : false
    },
    switchGridCard(event, next) {
      console.log(event.target)
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
            event.target.parentElement.previousSibling.lastChild.focus()
          }
        }
      }
    }
  }
}

</script>