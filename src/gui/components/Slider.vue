

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0, 
    };
  },
  computed: {
    imageElements() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.content, 'text/html');
      return Array.from(doc.querySelectorAll('img'));
    },
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      const images = document.querySelectorAll('.slider-content img');
      images.forEach((img, index) => {
        const isCurrent = index ===  newIndex;
        img.style.display = isCurrent ? 'block' : 'none'; 
        img.style.opacity = isCurrent ? '1.0' : '0.0'; 
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      const images = document.querySelectorAll('.slider-content img');
      images.forEach((img, index) => {
        const isCurrent = index ===  this.currentIndex;
        img.style.display = isCurrent ? 'block' : 'none'; 
        img.style.opacity = isCurrent ? '1.0' : '0.0'; 
      });
    });
  },
};
</script>

<template>
  <div class="slider">
    <!-- HTML, который передается через пропсы, выводится через v-html -->
    <div v-html="content" class="slider-content"></div>

    <div class="slider-controls">
      <label v-for="(image, index) in imageElements" :key="index" class="radio-label">
        <input
          type="radio"
          :value="index"
          v-model="currentIndex"
          class="slider-radio"
        />
      </label>
    </div>
  </div>
</template>

<style scoped>
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slider-content {
    overflow: hidden;
    position: relative;
    border-radius: 70px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }

  .slider-controls {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .radio-label {
    margin: 0 5px;
  }

  .slider-radio {
    margin-right: 5px;
  }
</style>
