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

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden" @click="setCurrentCountry(country)">
    <img :src="country.flags.png" alt="Flag" class="h-44 w-full object-cover" />
    <div class="p-4 text-gray-800">
      <h2 class="text-xl font-semibold mb-2">
        {{ country.name.common ? country.name.common : '' }}
      </h2>
      <div class="mb-1">
        <strong>Capital:</strong> {{ country.capital[0] ? country.capital[0] : '' }}
      </div>
      <div class="mb-1"><strong>Region:</strong> {{ country.region ? country.region : '' }}</div>
      <div class="mb-1"><strong>Latlng:</strong> {{ country.latlng ? country.latlng : '' }}</div>
      <div class="mb-1">
        <strong>Population:</strong>
        {{ country.population ? country.population.toLocaleString() : '' }}
      </div>
      <div class="mb-1">
        <strong>Currency: </strong>
        <span v-for="(currency, code) in country.currencies" :key="code">
          {{ currency.name ? currency.name : '' }} ({{ code ? code : '' }})
        </span>
      </div>
      <div class="mb-1">
        <strong>Languages:</strong>
        <span v-for="(language, code) in country.languages" :key="code">
          {{ language ? language : '' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
