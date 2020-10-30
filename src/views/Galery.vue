<template>
  <div class="galery">
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
  }
}
</script>

<style>
  .galery {
    margin-top: 8%;
  }
</style>