<template>
    <v-card
    max-width="344"
    class="pa-2 cardgalery"
    >
        <v-img
        :src="require(`../assets/${image}`)"
        height="200px"
        ></v-img>
    </v-card>
</template>

<script>
export default {
    name: "CardGalery",
    props: [
        'image'
    ],
}
</script>

<style>
    .cardgalery{
        align-content: center;
        justify-content: center;
        margin: auto;
    }
</style>