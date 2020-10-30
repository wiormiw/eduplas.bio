<template>
  <div class="home">
    <Content />
    <Content1 />
    <Content2 />
    <Content3 />
    <Content4 />
    <v-divider></v-divider>
    <Content5 />
    <Content8 />
    <v-divider></v-divider>
    <Content9 />
    <Content6 />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "../components/Content.vue"
import Content2 from "../components/Content2.vue"
import Content1 from "../components/Content1.vue"
import Content3 from "../components/Content3.vue"
import Content4 from "../components/Content4.vue"
import Content5 from "../components/Content5.vue"
import Content6 from "../components/Content6.vue"
import Content8 from "../components/Content8.vue"
import Content9 from "../components/Content9.vue"

export default {
  name: "Home",
  components: {
    Content,
    Content2,
    Content1,
    Content3,
    Content4,
    Content5,
    Content6,
    Content8,
    Content9,
  },
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>
