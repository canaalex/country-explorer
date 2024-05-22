<template>
  <div class="modal-overlay text-black">
    <div class="modal">
      <div class="modal-header">
        <div class="text-2xl">Country Description</div>
        <div class="close" @click="closeModal">&times;</div>
      </div>

      <div class="modal-content">
        <img :src="currentCountry.flags.png" alt="Flag" class="country-flag" />
        <h2>{{ currentCountry.name.common ? currentCountry.name.common : '' }}</h2>
        <div>
          <strong>Official Name:</strong>
          {{ currentCountry.name.official ? currentCountry.name.official : '' }}
        </div>
        <div>
          <strong>Capital:</strong> {{ currentCountry.capital[0] ? currentCountry.capital[0] : '' }}
        </div>
        <div><strong>Region:</strong> {{ currentCountry.region ? currentCountry.region : '' }}</div>
        <div>
          <strong>Subregion:</strong> {{ currentCountry.subregion ? currentCountry.subregion : '' }}
        </div>
        <div>
          <strong>Population:</strong>
          {{
            currentCountry.population.toLocaleString()
              ? currentCountry.population.toLocaleString()
              : ''
          }}
        </div>
        <div>
          <strong>Latitude & Longitude:</strong>
          {{ currentCountry.latlng ? currentCountry.latlng.join(', ') : '' }}
        </div>
        <div>
          <strong>Currency:</strong>
          <span v-for="(currency, code) in currentCountry.currencies" :key="code">
            {{ currency.name ? currency.name : '' }} ({{ code ? code : '' }})
          </span>
        </div>
        <div>
          <strong>Languages:</strong>
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
        <div><strong>UN Membership:</strong> {{ currentCountry.unMember ? 'Yes' : 'No' }}</div>
        <div>
          <strong>Border Countries:</strong>
          {{ currentCountry.borders ? currentCountry.borders.join(', ') : '' }}
        </div>
        <!-- Add more country information here -->
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

<style scoped>
/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 40px; /* Increase padding for a larger modal */
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Optional: add box shadow for depth */
  position: relative; /* Ensure close button positioning is relative to modal */
}

.modal-content {
  /* Add your modal content styles */
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Space between header and content */
}

.close {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 28px; /* Adjust close button size */
  color: #555; /* Close button color */
}
</style>
