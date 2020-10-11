<template>
  <v-card class="profile">
      <v-row>
          <v-col
            cols="12"
            md="10"
            class="text-sm-center text-md-left"
          >
            <v-card-title>{{ nama }}</v-card-title>
            <v-card-subtitle>{{ deskripsi }}</v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            md="2"
            class="text-sm-center"
          >
            <v-img
                tile
                max-height="80"
                max-width="80"
                :src="require(`../assets/${img}`)"
                class="rounded-circle gambarProfile"
            ></v-img>
          </v-col>
      </v-row>
      <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
    name: "CardComponent",
    props: [
        'nama',
        'deskripsi',
        'img',
    ],
}
</script>

<style>
    .profile {
        margin : 25px;
    }
    .gambarProfile{
        align-content: center;
        justify-content: center;
        margin: auto;
    }
</style>