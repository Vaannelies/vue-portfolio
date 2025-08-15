<template>
    <div class="section spacing-gap-l">
        <h2 v-if="title" class="section__title title-l" :id="title">{{ title }}</h2>
        <div class="section__content"><slot></slot></div>
        <img v-if="imageName == 'glitter'" class="section__bg-image" :class="{ 'section__bg-image--right': imageRight }" src="../assets/img/glitter.svg" loading="lazy"/>
        <img v-else-if="imageName == 'study'" class="section__bg-image" :class="{ 'section__bg-image--right': imageRight }" src="../assets/img/graduation-cap.svg" loading="lazy"/>
    </div>
</template>

<script>

export default {
    props: ["title", "imageRight", "imageName"],
    data() {
        return {
            title: this.title
        }
    }
}

</script>

<style>

</style>