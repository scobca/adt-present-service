<template>
  <div class="container">
    <main-component></main-component>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MainComponent from "./components/MainComp.vue";


export default defineComponent({
  name: 'App',
  components: {
    MainComponent,
  },
})

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
}
</style>
