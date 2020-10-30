<template>
  <div class="content">
    <v-parallax
      height="800"
      dark
      src="../assets/gambar.jpg"
      class="opacity"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-4 black--text">
            Plastik
          </h1>
          <h4 class="subheading black--text">
            Dilihat sekilas, plastik memang sangat berguna di kehidupan sehari-hari, namun di sisi lain, plastik juga meminta tumbal nyawa-nyawa makhluk laut.
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Content",
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .content {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .opacity > img {
    opacity: 0.75;
  }
</style>