<script setup>
import { ref, defineEmits } from 'vue'

const searchValue = ref('')
const searchType = ref('country')
const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', { searchType: searchType.value, searchValue: searchValue.value })
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <div
      class="flex flex-col gap-4 p-4 bg-gray-100 backdrop-blur-sm bg-opacity-40 rounded-lg shadow-md w-full mx-5 md:mx-0 md:w-1/2 justify-center"
    >
      <div class="flex gap-2 items-center">
        <input
          class="h-10 px-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          type="text"
          v-model="searchValue"
          placeholder="Search..."
        />
        <button
          class="h-10 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          @click="handleSearch"
        >
          Search
        </button>
      </div>
      <div class="flex gap-4">
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="searchType"
            value="country"
            class="form-radio h-5 w-5 text-blue-600"
          />
          <span class="text-gray-700">Search by country</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="searchType"
            value="region"
            class="form-radio h-5 w-5 text-blue-600"
          />
          <span class="text-gray-700">Search by region</span>
        </label>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
