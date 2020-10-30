<template>
  <div class="content4">
      <v-container>
          <v-row>
              <v-col>
                  <p class="text-center black--text text-h3 text-md-h4 text-sm-h5">Mari kita berkenalan dengan</p>
                  <p class="text-center black--text font-weight-light text-h3 text-md-h4 text-sm-h5">BIO<b>PLASTIK</b></p>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                  <v-card color="#FFFFFF">
                    <v-row>
                        <v-col
                            cols="12"
                        >
                            <v-img
                                max-height="200"
                                max-width="200"
                                class="rounded-circle gambar1"
                                :src="bioplastic"
                            ></v-img>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-card-text class="black--text text-center">
                                BIO<b>PLASTIK</b> adalah plastik berbahan organik yang saat ini belum banyak diketahui oleh masyarakat.<br>
                                Dengan bahan seperti singkong, kulit pisang, dan bahan organik lainnya, BIO<b>PLASTIK</b> dapat menjadi alternatif untuk plastik konvensional.
                                <br>
                            </v-card-text>
                            <v-divider></v-divider>
                            <router-link to="/galery" @click.native="$router.go()">
                                <v-btn text class="lengkap">
                                    <span>Lihat selengkapnya di galery</span>
                                    <v-icon right>mdi-arrow-right</v-icon>
                                </v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import bioplastic from "../assets/bioplastic.jpg"

export default {
    name: "Content4",
    data: function() {
        return {
            bioplastic: bioplastic
        }
    },
    mounted () {
        window.scrollTo(0, 0)
    },
}
</script>

<style>
    .content4 {
        background-color: #FFFFFF;
    }
    .gambar1{
        align-content: center;
        justify-content: center;
        margin: auto;
    }
    .lengkap {
        margin-top: 1rem;
    }
</style>