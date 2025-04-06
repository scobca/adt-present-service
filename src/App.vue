<template>
  <div class="app-container">
    <div class="logo" @click="$router.push('/')">
      <img src="./assets/logo.png" alt="Логотип"/>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
})

</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0;
}

.logo, .logo > img {
  height: 7rem;
  margin-bottom: 2rem;
}

.logo:hover {
  cursor: pointer;
}
</style>
