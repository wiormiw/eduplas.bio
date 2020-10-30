<template>
  <div class="content9">
      <v-container>
            <v-card
                color="white"
            >
                <v-card-text class="text-center black--text font-weight-light text-h3 text-md-h4 text-sm-h5">
                    Dapatkan BIO<b>PLASTIK</b> Di:
                    <v-divider></v-divider>
                </v-card-text>
                <v-row>
                    <v-col
                        cols="12"
                    >
                       
                        <v-list color="white">
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            :href="`${item.url}`"
                            >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        </v-list>
                        
                    </v-col>
                </v-row>
            </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
    name: "Content9",
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'GreenHope - Tanggerang', icon: 'mdi-diamond-stone', url: 'https://www.greenhope.co/faq-ecoplas-indonesia' },
        { text: 'TeloBag', icon: 'mdi-cards-heart', url: 'http://telobag.com/' },
        { text: 'Ramai.plastik - Surakarta, Jawa Tengah', icon: 'mdi-diamond-stone', url: 'https://shopee.co.id/product/122544731/2728383671?smtt=0.211176912-1603676221.9' },
        { text: 'Koohiisen - Jakarta Barat', icon: 'mdi-cards-heart', url: 'https://shopee.co.id/product/96554689/2608927822?smtt=0.211176912-1603676771.9' },
        { text: 'Yoursneedshop - Jakarta Utara', icon: 'mdi-diamond-stone', url: 'https://shopee.co.id/product/56831246/1020115514?smtt=0.211176912-1603677546.9' },
        { text: 'Iniloplastik - Bekasi', icon: 'mdi-cards-heart', url: 'https://shopee.co.id/product/140121212/7423342046?smtt=0.211176912-1603677747.9 ' },
        { text: 'Bataviaart - Kabupaten Bandung', icon: 'mdi-diamond-stone', url: 'https://shopee.co.id/product/141687960/6037389565?smtt=0.211176912-1603678187.9' },
        { text: 'Garudabali.id - Denpasar, Bali', icon: 'mdi-cards-heart', url: 'https://shopee.co.id/product/110178065/1945171288?smtt=0.211176912-1603678365.9' },
        { text: 'Shiryoku Mart - Jakarta Utara', icon: 'mdi-diamond-stone', url: 'https://tokopedia.link/u1VBprb2Sab' },
        { text: 'Bukan Plastik - Semarang', icon: 'mdi-cards-heart', url: 'https://tokopedia.link/0JWo6Qr2Sab' },
        { text: 'Usaha Plastik', icon: 'mdi-diamond-stone', url: 'https://tokopedia.link/xubRWjX2Sab' },
      ],
    }),
}
</script>

<style>
    .content9 {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: white;
    }
</style>