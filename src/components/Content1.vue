<template>
  <div class="content">
    <v-parallax
      height="800"
      dark
      src="../assets/gambar2.jpg"
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
            Sampah Plastik
          </h1>
          <h4 class="subheading black--text">
            Telah berhasil membunuh 1 juta burung laut, 100 ribu mamalia laut, kura-kura laut, dan ikan-ikan yang tak terhitung jumlahnya, tiap tahun.
          </h4>
          <p class="subheading black--text">
            Beberapa tahun ini, Indonesia digemparkan oleh banyak permasalahan. Salah satunya adalah Dalam sebuah cuitan, lembaga WWF Indonesia merinci apa saja yang ditemukan di dalam perut bangkai hewan tersebut, "5,9 kg sampah plastik ditemukan di dlm perut paus malang ini! Sampah plastik yaitu: plastik keras (19 pcs, 140 gr), botol plastik (4 pcs, 150 gr), kantong plastik (25 pcs, 260 gr), sandal jepit (2 pcs, 270 gr), didominasi o/ tali rafia (3,26 kg) & gelas plastik (115 pcs, 750 gr)."
          </p>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Content1"
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