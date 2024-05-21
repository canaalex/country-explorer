<script setup>
import { defineProps } from 'vue'

defineProps({
  country: {
    type: Object,
    required: true
  },
  setCurrentCountry: Function
})
</script>

<!-- <template>
  <div class="bg-white backdrop-blur-sm bg-opacity-40 text-white p-2">
    <img :src="country.flags.png" class="h-44 w-full" />
    <div class="px-2 text-white text-base font-medium">
      {{ country.name.common }}
      <div>Capital:{{ country.capital[0] }}</div>
      <div>Capital:{{ country.capital[0] }}</div>
      <div>Capital:{{ country.capital[0] }}</div>
      <div>Capital:{{ country.capital[0] }}</div>
      <div>Capital:{{ country.capital[0] }}</div>
      <div>Capital:{{ country.capital[0] }}</div>
    </div>
  </div>
</template> -->
<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden" @click="setCurrentCountry(country)">
    <img :src="country.flags.png" alt="Flag" class="h-44 w-full object-cover" />
    <div class="p-4 text-gray-800">
      <h2 class="text-xl font-semibold mb-2">{{ country.name.common }}</h2>
      <div class="mb-1"><strong>Capital:</strong> {{ country.capital[0] }}</div>
      <div class="mb-1"><strong>Region:</strong> {{ country.region }}</div>
      <div class="mb-1"><strong>Latlng:</strong> {{ country.latlng }}</div>
      <div class="mb-1"><strong>Population:</strong> {{ country.population.toLocaleString() }}</div>
      <div class="mb-1">
        <strong>Currency: </strong>
        <span v-for="(currency, code) in country.currencies" :key="code">
          {{ currency.name }} ({{ code }})
        </span>
      </div>
      <div class="mb-1">
        <strong>Languages:</strong>
        <span v-for="(language, code) in country.languages" :key="code">
          {{ language }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
