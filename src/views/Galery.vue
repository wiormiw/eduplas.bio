<template>
  <div class="galery" id="galery">
    <v-container>
        <GaleryComponent />
    </v-container>
  </div>
</template>

<script>
import GaleryComponent from "../components/GaleryComponent"

export default {
  components: {
      GaleryComponent
  },
  methods: {
    top(){
      window.scrollTo(0,0)
    }
  },
  mounted() {
    top()
  },
}
</script>

<style>
  .galery {
    margin-top: 8%;
  }
</style>