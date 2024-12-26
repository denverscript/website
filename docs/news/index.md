---
layout: page
title: Toledo Codes News
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

<div class="news-container">
  <div v-for="post in posts" :key="post.url" class="news-item">
    <h2>
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="post-meta">
      {{ new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) }}
    </div>
    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>
    <a :href="post.url" class="read-more">Read more →</a>
  </div>
</div>

<style>
.news-container {
  max-width: 800px;
  margin: 20px auto 0 auto;
}

.news-item {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-item:last-child {
  border-bottom: none;
}

.post-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.5rem 0;
}

.post-excerpt {
  margin: 1rem 0;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
