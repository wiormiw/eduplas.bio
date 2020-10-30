<template>
    <v-card
    max-width="344"
    class="pa-2"
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
    .galery-item{
        padding: 0;
    }
</style>