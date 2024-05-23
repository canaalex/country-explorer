<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { onMounted, computed, ref, defineProps, watch } from 'vue'
import CountryCard from '../components/CountryCard.vue'
import CountryModal from '../components/CountryModal.vue'
import Loader from '../assets/loader.vue'
import Nodata from '../assets/nodata.vue'

const props = defineProps({
  searchType: String,
  searchValue: String
})

const countryStore = useCountryStore()
const currentCountry = ref(null)
const isOpen = ref(false)

const countries = computed(() => {
  return countryStore.countries
})
const isLoading = computed(() => countryStore.isLoading)
const noData = computed(() => countryStore.noData)

onMounted(() => {
  countryStore.fetchCountries()
})

watch([() => props.searchType, () => props.searchValue], () => {
  if (props.searchValue === 'all') {
    countryStore.fetchCountries()
    return
  }
  if (props.searchType === 'region') {
    countryStore.fetchCountriesByRegion(props.searchValue)
  } else if (props.searchType === 'country') {
    countryStore.fetchCountryByName(props.searchValue)
  }
})

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const setCurrentCountry = (country) => {
  currentCountry.value = country
  openModal()
}
</script>

<template>
  <CountryModal v-if="isOpen" :currentCountry="currentCountry" :closeModal="closeModal" />
  <div class="mt-14">
    <div v-if="isLoading" class="flex items-center justify-center"><Loader /></div>
    <div v-else-if="noData" class="flex items-center justify-center">
      <Nodata />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-10 pb-14">
      <div v-for="country in countries">
        <CountryCard :country="country" :setCurrentCountry="setCurrentCountry" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
