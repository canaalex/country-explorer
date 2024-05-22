<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { onMounted, computed, ref } from 'vue'
import CountryCard from './CountryCard.vue'
import CountryModal from './CountryModal.vue'
import { defineProps, watch } from 'vue'

const props = defineProps({
  searchType: String,
  searchValue: String
})

const countryStore = useCountryStore()

onMounted(() => {
  countryStore.fetchCountries()
})
watch([() => props.searchType, () => props.searchValue], () => {
  console.log('watch', props.searchType)
  if (props.searchType === 'region') {
    countryStore.fetchCountriesByRegion(props.searchValue)
  } else if (props.searchType === 'country') {
    console.log('hii')
    countryStore.fetchCountryByName(props.searchValue)
  }
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
const isLoading = computed(() => countryStore.isLoading)
const noData = computed(() => countryStore.noData)
</script>

<template>
  <CountryModal v-if="isOpen" :currentCountry="currentCountry" :closeModal="closeModal" />
  <div class="grid grid-cols-4 gap-4 max-w-full mt-10 mx-10">
    <div v-if="isLoading" class="flex items-center justify-center h-20">Loading...</div>

    <div v-else-if="noData" class="flex items-center justify-center h-20">No data available</div>

    <div v-else v-for="country in countries">
      <CountryCard :country="country" :setCurrentCountry="setCurrentCountry" />
    </div>
  </div>
</template>
<style scoped></style>
