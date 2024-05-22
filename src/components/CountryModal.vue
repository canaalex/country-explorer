<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-black"
  >
    <div
      class="bg-white p-5 md:p-10 rounded-lg shadow-md relative max-w-80 min-w-80 md:min-w-400 md:max-w-400"
    >
      <div class="flex justify-between items-center mb-5">
        <div class="text-2xl font-bold">Country Description</div>
        <div
          class="absolute top-1 right-4 cursor-pointer text-2xl text-gray-700"
          @click="closeModal"
        >
          &times;
        </div>
      </div>

      <div>
        <img :src="currentCountry.flags.png" alt="Flag" class="country-flag" />
        <div class="text-xl font-bold my-2">
          {{ currentCountry.name.common ? currentCountry.name.common : '' }}
        </div>
        <div>
          <strong>Official Name: </strong>
          {{ currentCountry.name.official ? currentCountry.name.official : '' }}
        </div>
        <div>
          <strong>Capital: </strong>
          {{ currentCountry.capital[0] ? currentCountry.capital[0] : '' }}
        </div>
        <div>
          <strong>Region: </strong> {{ currentCountry.region ? currentCountry.region : '' }}
        </div>
        <div>
          <strong>Subregion: </strong>
          {{ currentCountry.subregion ? currentCountry.subregion : '' }}
        </div>
        <div>
          <strong>Population: </strong>
          {{
            currentCountry.population.toLocaleString()
              ? currentCountry.population.toLocaleString()
              : ''
          }}
        </div>
        <div>
          <strong>Latitude & Longitude: </strong>
          {{ currentCountry.latlng ? currentCountry.latlng.join(', ') : '' }}
        </div>
        <div>
          <strong>Currency: </strong>
          <span v-for="(currency, code) in currentCountry.currencies" :key="code">
            {{ currency.name ? currency.name : '' }} ({{ code ? code : '' }})
          </span>
        </div>
        <div>
          <strong>Languages: </strong>
          <span v-for="(language, code) in currentCountry.languages" :key="code">
            {{ language ? language : '' }}
            <span
              v-if="
                Object.keys(currentCountry.languages).indexOf(code) <
                Object.keys(currentCountry.languages).length - 1
              "
              >,
            </span>
          </span>
        </div>
        <div><strong>UN Membership: </strong> {{ currentCountry.unMember ? 'Yes' : 'No' }}</div>
        <div>
          <strong>Border Countries: </strong>
          {{ currentCountry.borders ? currentCountry.borders.join(', ') : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentCountry: Object,
  closeModal: Function
})
</script>

<style scoped></style>
