<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import CountryView from './pages/CountryPage.vue'
import CountrySearchBar from './components/CountrySearchBar.vue'

const searchTypeQuery = ref('')
const searchValueQuery = ref('')

const handleSearchQuery = ({ searchType, searchValue }) => {
  searchTypeQuery.value = searchType
  searchValueQuery.value = searchValue || 'all'
}
</script>

<template>
  <div class="bg-gradient-to-r from-blue-600 to-violet-600 min-h-screen">
    <Header />
    <CountrySearchBar @search="handleSearchQuery" />
    <CountryView :searchType="searchTypeQuery" :searchValue="searchValueQuery" />
  </div>
</template>
