<script>
  export let loading = false;
</script>

{#if loading}
  <section>
    <div id="circle" />
    <span><slot /></span>
  </section>
{/if}

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background: var(--bg-1);
    min-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section span {
    position: absolute;
    animation: blink 3s linear infinite;
    filter: contrast(0.5);
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #circle {
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #circle::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid red;
    border-color: blue transparent blue transparent;
    animation: spin 1s linear infinite;
  }

  #circle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid red;
    border-color: rgba(0, 0, 255, 0.5) transparent rgba(0, 0, 255, 0.5)
      transparent;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
