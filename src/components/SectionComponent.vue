<template>
    <div class="section spacing-gap-l">
        <h2 v-if="title" class="section__title title-l" :id="title">{{ title }}</h2>
        <div class="section__content"><slot></slot></div>
    </div>
</template>

<script>

export default {
    props: ["title"],
    data() {
        return {
            title: this.title
        }
    }
}

</script>

<style>

</style>