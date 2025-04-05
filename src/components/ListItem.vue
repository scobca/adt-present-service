<template>
  <li class="list-item">
    <div class="content">
      <span>{{ item.fullName }}</span>
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="item.checked"
            @change="handleCheckboxChange"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    item: {
      type: Object as () => { id: number; fullName: string; checked: boolean },
      required: true,
    },
  },
  emits: ['update:checked'],
  methods: {
    handleCheckboxChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit('update:checked', { id: this.item.id, checked: target.checked });
    },
  },
});
</script>

<style scoped>
.list-item {
  background-color: #f8edeb;
  padding: 15px;
  border-radius: 8px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
}

.checkbox-label input[type='checkbox'] {
  display:none ;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: #f9dcc4;
  border-radius: 4px;
}

.checkbox-label input[type='checkbox']:checked + .checkmark {
  background-color: #ffb5a7;
}
</style>