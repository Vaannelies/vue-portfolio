<template>
    <div class="section">
        <h2 class="section__title">{{ title }}</h2>
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