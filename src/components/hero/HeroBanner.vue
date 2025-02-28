<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1121"
    height="735"
    viewBox="0 0 1121 735"
    fill="none"
  >
    <path
      d="M1102.06 732.643H18.0607C9.22412 732.643 2.06067 725.48 2.06067 716.643V18.0044C2.06067 9.15919 9.17314 2.0044 18.0011 2.0044L414.076 2.00443C422.94 2.00443 430.26 9.18802 430.26 17.9972V59.5032C430.26 70.5498 439.215 79.4972 450.26 79.4972H1102.06C1110.9 79.4972 1118.06 86.6607 1118.06 95.4972V716.643C1118.06 725.48 1110.9 732.643 1102.06 732.643Z"
      fill="#C46961"
      stroke="#AB4B43"
      stroke-width="4"
    />
  </svg>
  <section class="frame">
    <div class="info">
      <h1>Banyaphon Kongtham</h1>
      <div class="Tag">
        <Tag class="Tag" label="UX/UI" />
        <Tag class="Tag" label="Front end" />
        <Tag class="Tag" label="Web Devloper" />
      </div>
    </div>
    <section class="education">
      <Education />
    </section>
  </section>
</template>

<script setup>
import Tag from '../global/Tag.vue'
import Education from '../education/Education.vue'
</script>
<style scoped>
svg {
  z-index: -10;
  position: absolute;
}

.frame {
  display: flex;
  flex-direction: column;
  height: 735px;
  border-radius: 10px;
  position: relative;
  z-index: 5;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 80px;
}

h1 {
  color: var(--white, #fff);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: -0.576px;
}
.Tag {
  display: flex;
  gap: 4px;
}
.education {
  z-index: 50;
  position: absolute;
  right: -100px;
  top: 200px;
}
</style>
