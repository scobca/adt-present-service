<script lang="ts">
import {defineComponent} from 'vue'
import {useDevice} from "../../utils/modile-detector.util.ts";

export default defineComponent({
  name: "EventItem",
  data() {
    const isMobile = useDevice().isMobile;
    return {isMobile};
  },
})
</script>

<template>
  <div class="wrapper-desktop wrapper" v-if="!isMobile">
    <div class="block">
      <slot name="name">Название мероприятия</slot>
    </div>
    <div class="block">
      <slot name="time">Время проведения</slot>
    </div>
    <div class="block">
      <slot name="classroom">Кабинет</slot>
    </div>
  </div>

  <div class="wrapper-mobile wrapper" v-else>
    <div class="block">
      <strong>Название: </strong>
      <slot name="name">Имя мероприятия</slot>
    </div>
    <div class="block">
      <strong>Время: </strong>
      <slot name="time">Время</slot>
    </div>
    <div class="block">
      <strong>Кабинет: </strong>
      <slot name="classroom">000</slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  color: black;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.wrapper-desktop {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 1rem;
  width: 95%;
  height: 2rem;
}

.wrapper-desktop:hover {
  cursor: pointer;
}

.wrapper-desktop > div {
  border-right: 1px solid black;
}

.wrapper-desktop > div:last-child {
  border: 0;
}

.wrapper-mobile {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
}

.block {
  width: 100%;
  text-align: left;
}
</style>