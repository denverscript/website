<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="custom-home-wrapper">
    <div class="container">
      <div class="main">
        <div v-if="frontmatter.survey" class="survey-callout">
          <h2 class="survey-title">{{ frontmatter.survey.title }}</h2>
          <p class="survey-tagline">{{ frontmatter.survey.tagline }}</p>
          <a 
            class="survey-button" 
            :href="frontmatter.survey.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ frontmatter.survey.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-home-wrapper {
  padding: 0 24px;
  margin: 24px 0;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.main {
  margin: 0 auto;
  max-width: 688px;
}

.survey-callout {
  margin: 0 auto;
  padding: 24px;
  background-color: var(--vp-c-brand-1);
  color: var(--white);
  border-radius: 12px;
  text-align: center;
}

.survey-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--white);
}

.survey-tagline {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--white);
}

.survey-button {
  display: inline-block;
  padding: 10px 24px;
  background-color: var(--white);
  color: var(--vp-c-brand-1);
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.survey-button:hover {
  opacity: 0.9;
}

@media (max-width: 639px) {
  .custom-home-wrapper {
    padding: 0 16px;
  }
}
</style> 