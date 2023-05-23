<script>
  export let name;
  export let value;
</script>

<article>
  <div>{name}</div>
  <h2>{value}</h2>
</article>

<style>
  article {
    flex: 1;
    margin: 0.5rem 0;
    padding: 1rem;
    background: var(--bg-2);
    border: 1px solid rgba(112, 128, 144, 0.5);
  }

  article h2 {
    color: var(--blue);
  }

  article > div {
    filter: brightness(0.8);
    font-size: 0.9em;
  }
</style>
