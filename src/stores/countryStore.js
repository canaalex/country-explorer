import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountryStore = defineStore('countries', () => {
  const countries = ref([])

  const fetchCountries = async () => {
    try {
      const getcountries = await axios.get('https://restcountries.com/v3.1/all')
      countries.value = getcountries.data.slice(0, 20)
    } catch (error) {
      console.error('Error fetching countries:', error)
    }
  }
  return { countries, fetchCountries }
})
