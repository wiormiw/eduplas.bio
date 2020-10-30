<template>
  <v-app>
    <v-toolbar absolute text color="transparent">
      <v-toolbar-title class="text-uppercase"> 
        <router-link to="/">
        <v-btn x-large text>
        <span class="font-weight-light black--text">edu</span>
        <span class="black--text">plas.bio</span>
        </v-btn>
        </router-link>
      </v-toolbar-title>
      <router-link to="/galery">
      <v-btn text>
        <span>galery</span>
        <v-icon right>mdi-earth-box</v-icon>
      </v-btn>
      </router-link>
      <router-link to="/about">
      <v-btn text>
        <span>about</span>
        <v-icon right>mdi-information</v-icon>
      </v-btn>
      </router-link>
    </v-toolbar>  
    
    <v-main>
      <router-view></router-view>
      <v-footer
        color="#EEEEEE"
        padless
      >
        <v-card
          tile
          color="#EEEEEE"
          class="black--text text-center"
        >
          <v-card-text>
            <v-btn
              class="mx-4 black--text"
              color="#EEEEEE"
              href="https://www.instagram.com/eduplas.bio/"
            >
              <v-icon size="24px">
                mdi-instagram
              </v-icon>
              @eduplas.bio
            </v-btn>
          </v-card-text>

          <v-card-text class="black--text pt-0">
            Web sosialiasi bioplastik yang telah dibuat oleh Kelompok 1 dari pelajaran MSTR MKKF 10.<br> Dalam rangka memenuhi dan menyelesaikan tugas LKM Makanan pada semester ganjil 2020/2021. <br> Segala konten diatas bersifat free to use dan boleh disebarluaskan di kalangan masyarakat, Saran dan komentar dapat kalian kirim ke instagram kami. Untuk segala bentuk kesalahan dan kekurangan kami ucapkan mohon maaf yang sebesar-besarnya. Terima Kasih :)
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="black--text">
            {{ new Date().getFullYear() }} — <strong>Kelompok 1 — MKKF 10</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
</style>
