<script lang="ts">
import {useDevice} from "../../utils/modile-detector.util.ts";

export default {
  name: "ParticipantItem",
  emits: ['checkboxChange'],
  props: {
    isHere: {
      type: Boolean,
      required: true,
      default: null
    },
  },
  data() {
    const isMobile = useDevice().isMobile;

    return {
      isMobile,
      isHereLocal: this.isHere,
    }
  },
  methods: {
    change() {
      this.isHereLocal = !this.isHereLocal;
      this.$emit('checkboxChange', this.isHereLocal)
    }
  }
}
</script>

<template>
  <div class="wrapper-desktop wrapper" v-if="!isMobile">
    <div class="block">
      <slot name="name">Имя</slot>
    </div>
    <div class="block">
      <slot name="competence">Компетенция</slot>
    </div>
    <div class="block">
      <slot name="age">Возраст</slot>
    </div>
    <input class="checkbox-input" type="checkbox" v-model="isHereLocal" @click="change">
  </div>

  <div class="wrapper-mobile wrapper" v-else>
    <div class="block">
      <strong> Имя посетителя: </strong>
      <slot name="name">Имя</slot>
    </div>
    <div class="block">
      <strong> Компетенция: </strong>
      <slot name="competence">Компетенция</slot>
    </div>
    <div class="block">
      <strong> Возрастная категория: </strong>
      <slot name="age">Возраст</slot>
    </div>
    <div class="input-wrapper">
      <p><strong> Отметить посещение </strong></p>
      <input class="checkbox-input" type="checkbox" v-model="isHereLocal"
             @click="change"/>
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
  grid-template-columns: 5fr 5fr 3fr 2fr;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 1rem;
  width: 95%;
  height: 2rem;
}

.wrapper-desktop > div {
  border-right: 1px solid black;
  overflow-x: scroll;
  white-space: nowrap;
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
  overflow: scroll;
}

.checkbox-input {
  height: 1.25rem;
}

.checkbox-input:hover {
  cursor: pointer;
}

.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .checkbox-input {
    margin-right: 35%;
    width: 1.25rem;
  }
}
</style>