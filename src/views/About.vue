<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col>
          <Content7 />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Content7 from "../components/Content7.vue"

export default {
  components: {
    Content7,
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .about {
    margin-top: 8%;
  }
</style>