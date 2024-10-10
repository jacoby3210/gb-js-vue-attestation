<template>
  <div class="paginator">
    <button
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      >
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    modelValue: { // Используем стандарт v-model
      type: Number,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.modelValue;
    },
  },
  methods: {
    changePage(page) {
      if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
        this.$emit("update:modelValue", page); // Обновляем значение
      }
    },
  },
};
</script>

<style scoped>
.paginator {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

button {
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.3s;

  padding: 0px;
  height: 52px;
  width: 52px;
  
  background-color: transparent;
  border: 2px solid var(--color-main);
  border-radius: 100%;
  color: black;
  cursor: pointer;
}

button:hover {background-color: #2980b9;}

button:disabled {visibility: hidden;}

button.active {
  background-color: var(--color-second-2);
  border: none;
  font-weight: bold;
}
</style>
