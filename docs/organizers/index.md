
Meet the organizers! If you see us at the meetup or anywhere else around Denver, be sure to say hello / introduce yourself.

<div class="organizers">
  <div class="organizer">
    <img alt="cj" src="/images/cj.jpg">
    <p>
      <span class="organizer-name">CJ</span> - <span class="pronouns">he/him</span> - Senior Creator @ Syntax / Sentry and Live Coding Educator @ Coding Garden, Former co-organizer of the Denver Vue.js Meetup, Spends his time writing TypeScript + React + Svelte and Node.js
    </p>
  </div>

  <div class="organizer">
    <img alt="Cassandra" src="/images/cass.png">
    <p>
      <span class="organizer-name">Cassandra aka Cass</span> - <span class="pronouns">she/her</span> - Cass is a developer with experience across the stack and a knack for weaving education and code together. She believes that code is a craft and aims to deliver thoughtful, empathetic, and elegant work. She is still waiting for her pull request to Reality™️ to be approved.
    </p>
  </div>

  <div class="organizer">
    <img alt="marlena baker" src="/images/marlena.jpg">
    <p>
      <span class="organizer-name">Marlena Baker</span> - she/her - Full Stack Developer seeking her next Adventure, Former co-organizer of the Denver Vue.js Meetup, Recently fell in love with TypeScript, Lately has been playing around with Vue 3 and Svelte
    </p>
  </div>

  <div class="organizer">
    <img alt="Chad" src="/images/chad.png">
    <p>
      <span class="organizer-name">Chad</span> - <span class="pronouns">he/him</span> - Full-snack Developer based in Denver, CO. He codes with javascript, typescript, nodejs, redwoodjs, directus, reactjs and sveltejs 
    </p>
  </div>
</div>

<style>
  .organizers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .organizer img {
    border-radius: 25px;
    width: 100%;
  }

  .organizer-name {
    font-weight: bold;
  }

  .pronouns {
    font-style: italic;
  }

  @media (max-width: 600px) {
    .organizers {
      grid-template-columns: 1fr;
    }

    html .organizer {
      border-bottom: 2px solid black;
    }

    html.dark .organizer {
      border-bottom: 2px solid #DFDFD7;
    }
  }
</style>