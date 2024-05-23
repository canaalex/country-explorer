<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <circle fill="#7C3AED" stroke="#7C3AED" stroke-width="10" r="10" cx="40" cy="65">
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="2"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.4"
      ></animate>
    </circle>
    <circle fill="#7C3AED" stroke="#7C3AED" stroke-width="10" r="10" cx="100" cy="65">
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="2"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.2"
      ></animate>
    </circle>
    <circle fill="#7C3AED" stroke="#7C3AED" stroke-width="10" r="10" cx="160" cy="65">
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="2"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="0"
      ></animate>
    </circle>
  </svg>
</template>
