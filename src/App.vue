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
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 2rem;
  border: 1px solid red;
}

.logo {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  img {
    width: 100px;
    height: auto;
  }
}

.logo:hover {
  cursor: pointer;
}
</style>
