<template>
  <div class="content8">
      <v-container>
          <v-row>
            <v-col
                cols="12"
                md="6"
            >
                <p class="text-h3 text-md-h2 text-lg-h1 text-sm-h3 text-center text-lg-left black--text">Survey BIOPLASTIK</p>
            </v-col>
            <v-col
                cols="12"
                md="6"
            >
                <p class="text-justify">Melalui survey kami tentang BIOPLASTIK dengan 235 responden, 57.4% diantaranya sudah mengetahui tentang BIOPLASTIK. Dan 142 orang diantaranya pernah menggunakkan BIOPLASTIK.<br><br> Selain itu, dari 128 responden yang menjawab pertanyaan "Apakah masih menggunakkan BIOPLASTIK ?", datanya dapat dilihat melalui grafik di bawah ini</p>
                <pie-chart :chart-data="datacollection"></pie-chart>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="textContent">
              <v-col>
                  <p class="text-h3 text-center black--text font-weight-light">
                     Terlihat dari grafik di atas, banyak dari responden yang meninggalkan produk <b>BIO</b>PLASTIK.
                  </p>
                  <p class="text-h4 text-center black--text font-weight-light">
                      Oleh karena itu, produk <b>BIO</b>PLASTIK harus terus disosialisasikan manfaat dan pengaruhnya.
                  </p>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import PieChart from "../components/PieChart"

export default {
    name: "Content8",
    components: {
        PieChart,
    },
    data () {
      return {
        datacollection: {
            labels: ['Masih Memakai', 'Sudah Tidak Memakai'],
            datasets: [
                {
                backgroundColor: ['#C16E76', '#D9DCE1'],
                data: [46, 82]
                }
            ]
        },
        options: {
        responsive: true,
        maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.labels],
          datasets: [this.datasets]
        }
      },
    }

}
</script>

<style>
    .content8 {
        margin-top: 5rem;
        background-color: #fff;
    }
    .textContent {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
</style>