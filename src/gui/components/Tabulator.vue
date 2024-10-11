<template>
  <div class="tabulator">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === currentTabIndex }"
        @click="selectTab(index)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="content">
      <slot :name="tabs[currentTabIndex].name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      initialTabIndex: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        currentTabIndex: this.initialTabIndex,
      };
    },
    methods: {
      selectTab(index) {
        this.currentTabIndex = index;
        this.$emit("update:currentTab", this.currentTabIndex); // Отправляем событие при смене вкладки
      },
    },
  };
</script>

<style scoped>
  .tabulator {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tabs {
    display: flex;
    gap: 96px;

    width: min-content;
    
    border: 2px solid var(--color-main);
    border-radius: 18px;
  }

  button {
    justify-content: center;
    transition: background-color 0.3s;
    
    padding: 10px;

    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
  }

  button:hover {
    /* background-color: #2980b9; */
  }

  button.active {
    background-color: var(--color-main);
    color: white;
    font-weight: bold;
  }

  .content {
    margin-top: 20px;
  }
</style>
