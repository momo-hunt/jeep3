<script>
  export let title;
</script>

<header>
  <h2>{title}</h2>
  <p><slot /></p>
</header>

<style>
  header {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: var(--bg-2);
  }

  h2 {
    color: var(--blue);
  }
</style>
