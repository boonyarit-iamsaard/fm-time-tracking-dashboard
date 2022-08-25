<slot />

<style lang="scss">
  :global {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
      font: inherit;
    }

    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      display: grid;
      grid-template-rows: auto 3rem;
      min-height: 100vh;
      font-family: 'Rubik', sans-serif;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    img,
    picture,
    svg {
      max-width: 100%;
      display: block;
    }

    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  }
</style>
