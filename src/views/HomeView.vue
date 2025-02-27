<template>
  <div>
    <section class="navigation">
      <NavBar />
      <MenuDropdown />
    </section>
    <HeroBanner />

    <section class="section">
      <ProjectMarqueeBottom class="Marquee0" />
      <ProjectMarqueeTop class="Marquee1" />
      <ProjectMarqueeBottom class="Marquee2" />
      <ProjectMarqueeTop class="Marquee3" />
      <ProjectMarqueeBottom class="Marquee4" />
      <div class="project-list">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from '@/components/header/NavBar.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue'
import Education from '@/components/education/Education.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
import SoftSkills from '@/components/skills/SoftSkills.vue'
import TechnicalSkills from '@/components/skills/TechnicalSkills.vue'
import MenuDropdown from '@/components/header/MenuDropdown.vue'
import ProjectMarqueeTop from '@/components/projects/ProjectMarqueeTop.vue'
import ProjectMarqueeBottom from '@/components/projects/ProjectMarqueeBottom.vue'

const projects = [
  { id: 1, title: 'TaskMangement Website', description: 'A tool for analyzing UX data.' },
  { id: 2, title: 'MajorMatch Web Application', description: 'A platform for online courses.' },
  { id: 3, title: 'Tax Calculator Web Application', description: 'A platform for online courses.' },
  { id: 4, title: 'Bill Hub Website', description: 'A platform for online courses.' },
  { id: 4, title: 'Parcel Management', description: 'A platform for online courses.' },
]
</script>

<style scoped>
div {
  position: relative;
}
.section {
  padding: 2rem;
  position: relative;
}
.project-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 20px;
  row-gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;
}
.skills-container {
  display: flex;
  gap: 2rem;
}
.navigation {
  display: flex;
  gap: 8px;
  position: absolute;
  right: 0;
}
.section h2 {
  color: black;
}
.Marquee0 {
  top: -80px;
}
.Marquee1 {
  top: 80px;
}
.Marquee2 {
  top: 240px;
}
.Marquee3 {
  top: 420px;
}
.Marquee4 {
  top: 600px;
}
.Marquee5 {
  top: 700px;
}
</style>
