<template>
  <div class="content3">
      <v-container>
          <v-row>
            <v-col
                cols="12"
                md="6"
            >
                <p class="text-h3 text-md-h2 text-lg-h1 text-sm-h3 text-center text-lg-left black--text">Apa Solusinya ?</p>
            </v-col>
            <v-col
                cols="12"
                md="6"
                class="parralax"
            >
                <v-parallax
                    width="auto"
                    :src="image"
                ></v-parallax>
            </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import image from "../assets/undraw_thoughts.svg"

export default {
    name: "Content3",
    data: function () {
        return {
            image: image,
        }
    },
    mounted () {
        window.scrollTo(0, 0)
    }
}
</script>

<style>
    .content3 {
        background-color: #E1F5FE;
    }
    .parallax {
        height: 400px;
        width: auto;
    }
    @media only screen and (max-width: 959px) {
        .parallax {
            height: 250px;
            width: 250px;
        }
    }
</style>