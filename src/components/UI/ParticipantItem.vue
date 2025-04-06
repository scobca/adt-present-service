<script lang="ts">
import {useDevice} from "../../utils/modile-detector.util.ts";

export default {
  name: "ParticipantItem",
  emits: ['checkboxChange', 'countChange'],
  props: {
    isHere: {
      type: Boolean,
      required: true,
      default: null
    },
    count: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    const isMobile = useDevice().isMobile;

    return {
      isMobile,
      isHereLocal: this.isHere,
      localCount: this.count
    }
  },
  methods: {
    change() {
      this.isHereLocal = !this.isHereLocal;
      this.$emit('checkboxChange', this.isHereLocal)
    },
    changeCount() {
      this.$emit('countChange', this.localCount);
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
    <input class="checkbox-input" type="number" v-model.number="localCount" :min="0"/>
    <div class="block">
      <p @click="changeCount" class="ok-button">OK</p>
    </div>
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
    <div class="input-wrapper-grid no-margin">
      <p><strong> Кол-во гостей </strong></p>
      <input class="checkbox-input" type="number" v-model.number="localCount" :min="0"/>
      <div class="block">
        <p @click="changeCount" class="ok-button">OK</p>
      </div>
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
  grid-template-columns: 5fr 5fr 3fr 2fr 2fr 1fr;
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
  gap: 1rem;

  .checkbox-input {
    margin-right: 35%;
    width: 1.25rem;
  }
}

.ok-button {
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.1rem;
  text-align: center;
}

.ok-button:hover {
  cursor: pointer;
}

.input-wrapper-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.no-margin {
  margin: 0;
}
</style>