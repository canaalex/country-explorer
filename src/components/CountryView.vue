<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { onMounted, computed, ref } from 'vue'
import CountryCard from './CountryCard.vue'
import CountryModal from './CountryModal.vue'

const countryStore = useCountryStore()

onMounted(() => {
  countryStore.fetchCountries()
})
const currentCountry = ref(null)
const isOpen = ref(false)
const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const setCurrentCountry = (country) => {
  currentCountry.value = country
  openModal()
  console.log('countrycurrent', country)
}
const countries = computed(() => {
  return countryStore.countries
  console.log('check', countryStore.countries)
})
</script>

<template>
  <CountryModal v-if="isOpen" :currentCountry="currentCountry" :closeModal="closeModal" />
  <div class="grid grid-cols-4 gap-4 max-w-full mt-20 mx-10">
    <div v-for="country in countries">
      <CountryCard :country="country" :setCurrentCountry="setCurrentCountry" />
    </div>
  </div>
</template>
<style scoped></style>
