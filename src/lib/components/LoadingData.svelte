<script>
  export let loading = false;
</script>

{#if loading}
  <section>
    <span><slot /></span>
  </section>
{/if}

<style>
  section {
    padding: 1rem;
    background: var(--bg-1);
    min-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
