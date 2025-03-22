---
layout: page
title: Toledo Codes Presentations
---

<script setup>
import { data as events } from './events.data.ts'
</script>

<div class="page-header">
  <h1>Past Event Presentations</h1>
  <p class="intro-text">Browse presentations from our past events. Click on an event to see details and access slide decks.</p>
</div>

<div class="events-container">
  <div v-for="event in events" :key="event.url" class="event-item">
    <h2>
      <a :href="event.url">{{ event.title }}</a>
    </h2>
    <div class="event-meta">
      {{ new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) }}
    </div>
    <div class="event-description">
      {{ event.description }}
    </div>
    <div class="slides-preview" v-if="event.slides && event.slides.length > 0">
      <strong>Presentations:</strong>
      <ul>
        <li v-for="slide in event.slides.slice(0, 2)" :key="slide.title">
          {{ slide.title }} by {{ slide.author }}
        </li>
      </ul>
      <span v-if="event.slides.length > 2">+ {{ event.slides.length - 2 }} more</span>
    </div>
    <a :href="event.url" class="view-details">View Details →</a>
  </div>
  <div v-if="events.length === 0" class="no-events">
    <p>No past event presentations available yet. Check back soon!</p>
  </div>
</div>

<style>
.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-top: 3rem;
}

.page-header h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: var(--vp-c-brand);
}

.intro-text {
  max-width: 640px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  line-height: 1.6;
}

.events-container {
  max-width: 800px;
  margin: 20px auto 0 auto;
}

.event-item {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.event-item:last-child {
  border-bottom: none;
}

.event-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.5rem 0;
}

.event-description {
  margin: 1rem 0;
}

.slides-preview {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.slides-preview ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.view-details {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.view-details:hover {
  text-decoration: underline;
}

.no-events {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}
</style> 