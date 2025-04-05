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
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0px;

}


</style>
