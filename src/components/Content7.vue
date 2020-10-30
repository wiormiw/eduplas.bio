<template>
  <div class="content7">
      <CardComponent 
        nama="Wijoyo Raharjo Murti Indra Wahyono"
        deskripsi="Seorang lelaki yang memiliki hobi menonton anime dan bermain game dan bercita-cita menjadi pengusaha di bidang teknologi."
        img="wijoyo.jpg"                
      />
      <CardComponent
        nama="Miftahul Akbar Ramadhan"
        deskripsi="Seorang manusia yang ingin menjadi manusia sesungguhnya bersama  matematika dan fisika."
        img="akbar.jpg"        
      />
      <CardComponent
        nama="Raihan Taufiqurrahman"
        deskripsi="Seorang manusia biasa. Hobi gaming, menggambar, dan nonton youtube."
        img="raihan.jpg"
      />
      <CardComponent
        nama="Amelia Kania Putri Sugara"
        deskripsi="Wanita yang biasa saja. Menikmati belajar bahasa dan manusia. Cita-cita ingin menjadi orang yang berbahagia."
        img="amelia.jpeg"
      />
      <CardComponent
        nama="Nevi Pramuditha Putri"
        deskripsi="Cita-citanya mau jadi dokter! Dokter Moral dan Intelegensi suatu bangsa  a.k.a seorang pendidik. Senang berkomunikasi dengan orang lain membuat pribadinya jadi penyayang dan rendah hati."
        img="nevi.jpeg"
      />
      <CardComponent
        nama="Adeliya A. Usman"
        deskripsi="Lahir di Gorontalo pada tanggal 1 September 2000. Anak ketiga dari empat bersaudara. Saat ini, sedang menempuh studi di Universitas Negeri Gorontalo sebagai mahasiswa jurusan Matematika semester 5."
        img="adeliya.jpg"
      />
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue"

export default {
    name: "Content7",
    components : {
      CardComponent
    },
    mounted () {
      window.scrollTo(0, 0)
    }
}
</script>

<style>

</style>