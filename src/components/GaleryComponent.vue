<template>
  <div class="galery__component">
    <v-row>
      <v-col
        cols="12"
        sm="4"
        class="text-center"
      >
        <CardGalery image="bioplastik1.jpeg" />
      </v-col>  
      <v-col
        cols="12"
        sm="4"
      >  
        <CardGalery image="bioplastik2.jpg" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >  
        <CardGalery image="bioplastik3.jpeg" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >  
        <CardGalery image="bioplastik4.png" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <CardGalery image="bioplastik5.png" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >  
        <CardGalery image="bioplastik6.jpeg" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <CardGalery image="bioplastik7.jpeg" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <CardGalery image="bioplastik8.jpeg" />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <CardGalery image="bioplastik9.jpeg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardGalery from "../components/CardGalery"

export default {
  components: {
      CardGalery
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .galery__components {
    margin: 0;
  }
</style>