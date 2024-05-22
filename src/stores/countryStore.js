import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountryStore = defineStore('countries', () => {
  const countries = ref([])
  const isLoading = ref(false)
  const noData = ref(false)

  const fetchCountries = async () => {
    try {
      isLoading.value = true
      const getcountries = await axios.get('https://restcountries.com/v3.1/all')
      countries.value = getcountries.data.slice(0, 20)
      noData.value = countries.value.length === 0
    } catch (error) {
      console.error('Error fetching countries:', error)
    } finally {
      isLoading.value = false
    }
  }

  const fetchCountriesByRegion = async (region) => {
    try {
      isLoading.value = true
      const getcountries = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
      countries.value = getcountries.data.slice(0, 20)
      noData.value = countries.value.length === 0
    } catch (error) {
      console.error('Error fetching countries by region:', error)
    } finally {
      isLoading.value = false
    }
  }
  const fetchCountryByName = async (country) => {
    try {
      console.log('chhhhhh')
      isLoading.value = true
      const getcountries = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
      countries.value = getcountries.data.slice(0, 20)
      noData.value = countries.value.length === 0
    } catch (error) {
      console.error('Error fetching countries by name:', error)
      countries.value = []
      noData.value = true
    } finally {
      isLoading.value = false
    }
  }
  return {
    countries,
    fetchCountries,
    fetchCountriesByRegion,
    fetchCountryByName,
    isLoading,
    noData
  }
})
