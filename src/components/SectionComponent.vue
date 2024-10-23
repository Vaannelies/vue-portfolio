<template>
    <div class="section">
        <h2 class="section__title">{{ title }}</h2>
        <div class="section__content"><slot></slot></div>
    </div>
</template>

<script>
import { Vue, } from "vue-class-component";


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