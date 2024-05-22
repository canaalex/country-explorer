<script setup>
import { defineProps } from 'vue'

defineProps({
  country: {
    type: Object,
    required: true
  },
  setCurrentCountry: Function
})
const truncate = (str, length) => {
  if (!str) return ''
  return str.length > length ? str.substring(0, length) + '...' : str
}
const formatItems = (items) => {
  return Object.entries(items)
    .map(([code, item]) => {
      const name = item.name || item
      return `${name ? name : ''} (${code ? code : ''})`
    })
    .join(', ')
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden" @click="setCurrentCountry(country)">
    <img :src="country.flags.png" alt="Flag" class="h-44 w-full object-cover" />
    <div class="p-4 text-gray-800">
      <h2 class="text-xl font-semibold mb-2">
        {{ country.name.common ? truncate(country.name.common, 25) : '' }}
      </h2>
      <div class="mb-1">
        <strong>Capital:</strong> {{ country.capital[0] ? truncate(country.capital[0], 25) : '' }}
      </div>
      <div class="mb-1">
        <strong>Region:</strong> {{ country.region ? truncate(country.region, 25) : '' }}
      </div>
      <div class="mb-1">
        <strong>Latlng:</strong> {{ country.latlng ? truncate(country.latlng, 25) : '' }}
      </div>
      <div class="mb-1">
        <strong>Population:</strong>
        {{ country.population ? truncate(country.population.toLocaleString(), 25) : '' }}
      </div>
      <div class="mb-1">
        <strong>Currency: </strong>
        {{ truncate(formatItems(country.currencies), 25) }}
      </div>
      <div class="mb-1">
        <strong>Languages:</strong>
        {{ truncate(formatItems(country.languages), 25) }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
