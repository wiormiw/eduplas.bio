<template>
  <div class="content5">
      <v-container>
            <v-card>
                <v-card-text class="text-center black--text font-weight-light text-h3 text-md-h4 text-sm-h5">
                    BIO<b>PLASTIK</b> VS PLASTIK
                    <v-divider></v-divider>
                </v-card-text>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-row>
                            <v-col>
                                <v-subheader>
                                    <p class="text-h6">BIO<b>PLASTIK</b></p>
                                </v-subheader>
                                <v-list-item
                                    v-for="(item, i) in poin"
                                    :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-row>
                            <v-col>
                                <v-subheader>
                                    <p class="text-h6">PLASTIK</p>
                                </v-subheader>
                                <v-list-item
                                    v-for="(item, i) in poin2"
                                    :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
    name: "Content5",
    data: function() {
        return {
        item: 1,
        poin: [
            { text: 'Terurai dalam waktu 2-6 bulan', icon: 'mdi-arrow-right-bold-circle-outline'},
            { text: 'Bahannya organik', icon: 'mdi-arrow-right-bold-circle-outline'},
            { text: 'Walau tidak sengaja tercerna tidak akan menimbulkan racun', icon: 'mdi-arrow-right-bold-circle-outline'},
            { text: 'Tidak membahayakan biota laut', icon: 'mdi-arrow-right-bold-circle-outline'},
        ],
        poin2: [
            { text: 'Terurai dalam waktu 20-1000 tahun', icon: 'mdi-arrow-right-bold-circle'},
            { text: 'Bahannya masih menggunakkan minyak bumi', icon: 'mdi-arrow-right-bold-circle'},
            { text: 'Jika dikonsumsi akan menimbulkan racun', icon: 'mdi-arrow-right-bold-circle'},
            { text: 'Membahayakan biota laut', icon: 'mdi-arrow-right-bold-circle'},
        ],
        }
    }
}
</script>

<style>

</style>