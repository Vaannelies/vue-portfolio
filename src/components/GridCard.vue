<template>
    <!-- <div tabindex="0" class="grid__card" @focus="toggleGridCard($event, true)" @blur="toggleGridCard($event, false)" :style="'background-image: url(\''+backgroundImage+'\')'"> -->
    <div tabindex="0" class="grid__card" @keyup.esc="toggleGridCard($event, false)" @focusin="toggleGridCard($event, true)" @blur="toggleGridCard($event, false)" :style="'background-image: url(\''+backgroundImage+'\')'">
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
                        <li class="grid__card__media-item" v-for="(item, index) in media" v-bind:key="index" @click="selectedItem = item">
                            <video v-if="item.type == 'video'" muted :src="item.path" type="video/mp4" />
                            <img v-else  :src="item.path" />
                        </li>
                    </ul>
                    <div v-if="selectedItem !== null" class="grid__card__list-item__pop-up" @click="selectedItem = null">
                        <video v-if="selectedItem.type == 'video'" muted controls autoplay loop :src="selectedItem.path" type="video/mp4" />
                        <img v-else  :src="selectedItem.path" />
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
  props: ['title', 'description', 'text', 'heroImage', 'backgroundImage', 'heroVideo', 'media'],
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
        selectedItem: null,
    }
  },
  methods: {
    toggleGridCard(event, newState) {
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

        if(newState || !event.relatedTarget || (event.relatedTarget && event.relatedTarget.className == "grid__card")) {
          gridListEl.setAttribute('style', 'height: ' + height + 'px')
        }
      }
    },
    preventClose(event) {
      event.preventDefault()
    }
  }
}

</script>