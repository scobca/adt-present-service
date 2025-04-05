<template>
  <div class="container">
    <!-- Логотип -->
    <div class="logo fixed-logo">
      <img src="../src/assets/logo.png" alt="Логотип"/>
    </div>

    <!-- Форма ввода -->
    <div class="input-group">
      <input
          v-model="newItemText"
          type="text"
          placeholder="Введите ФИО"
          class="text-input"
      />
      <button @click="addItem" class="add-button">Найти</button>
    </div>

    <!-- Список элементов -->
    <ul class="list-container">
      <ListItem
          v-for="item in items"
<!--          :key="item.id"-->
          :item="item"
          @update:checked="handleCheckboxChange"
      />
    </ul>

    <!-- Кнопка внизу экрана -->
    <div class="fixed-button">
      <button @click="addItem" class="add-button-fixed">Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ListItem from "./components/ListItem.vue";

export default defineComponent({
  name: 'App',
  components: {
    ListItem,
  },
  data() {
    return {
      newItemText: '',
      items: [],
    };
  },
  methods: {
    addItem() {
      console.log(456)
    }
  },
  handleCheckboxChange(payload: { id: number; checked: boolean }) {
    console.log(123)
  },
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.fixed-logo {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.fixed-logo img {
  width: 100px;
  height: auto;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 60px; /* Отступ для логотипа */
}

.text-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #b8d8d8;
  border-radius: 8px;
  font-size: 16px;
  background: #f8f9fa;
  color: black;
}

.add-button {
  padding: 12px 24px;
  background: #ffb5a7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #2d3142;
  font-weight: bold;
}

.add-button:hover {
  background-color: #fcd5ce;
}

.list-container {
  list-style-type: none;
  padding-left: 0;
}

.fixed-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.add-button-fixed {
  padding: 12px 24px;
  background: #ffb5a7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #2d3142;
  font-weight: bold;
}

.add-button-fixed:hover {
  background-color: #fcd5ce;
}

@media (max-width: 480px) {
  .input-group {
    flex-direction: column;
    gap: 10px;
  }

  .text-input,
  .add-button {
    width: 100%;
    box-sizing: border-box;
    color: black;
  }
}
</style>
