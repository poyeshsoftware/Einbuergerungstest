<template>
  <div class="answers">
    <ul>
      <!-- Dynamically render options as list items -->
      <li v-for="(option, index) in options" :key="index">
        <!-- Using button to handle option click -->
        <button @click="selectOption(option)">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectOption(option) {
      // Emit the selected option to the parent component
      this.$emit('answer', option);
    }
  }
}
</script>

<style scoped>
.answers ul {
  list-style: none;
  padding: 0;
}

.answers li {
  margin: 0.5em 0;
}

.answers button {
  width: 100%;
  padding: 10px;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answers button:hover {
  background-color: #e2e2e2;
}
</style>
