<template>
  <div class="content2">
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="kiriPlastik"
              >
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="plastikText"
              >
                <v-list rounded>
                  <v-subheader>
                    <p class="text-h4 md-h5 sm-h6">Bahaya Sampah Plastik</p>
                  </v-subheader>
                  <v-list-item
                    v-for="(item, i) in bahayaPlastik"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                      <v-divider></v-divider>
                      <p>{{ item.subtitle }}</p>
                      <br>
                      <p>{{item.subtitle2}}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Content2",
  data: function() {
    return {
      item: 1,
      bahayaPlastik: [
        { text: 'Tercemarnya tanah dan air', icon: 'mdi-checkbox-multiple-blank-circle', subtitle: "Racun-racun dari partikel plastik akan membunuh pengurai tanah seperti cacing."},
        { text: 'Membahayakan biota laut', icon: 'mdi-checkbox-multiple-blank-circle', subtitle: "Hewan-hewan laut seperti lumba-lumba, penyu laut, dan anjing laut menganggap kantong-kantong plastik tersebut makanan dan akhirnya mati karena tidak dapat mencernanya." },
        { text: 'Salah satu penyebab banjir', icon: 'mdi-checkbox-multiple-blank-circle', subtitle: "Pembuangan sampah plastik sembarangan di sungai-sungai akan mengakibatkan pendangkalan sungai dan penyumbatan aliran sungai yang menyebabkan banjir." },
      ],
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .content2 {
    background-image: url('../assets/3974.jpg');
    background-size: 1500px;
  }

  @media only screen and (min-width: 960px) {
    .kiriPlastik {
      background-image: url('../assets/undraw_warning_cyit.svg');
      background-size: 800px;
    }
  }

  .plastikText {
    padding: 5%;
  }
</style>