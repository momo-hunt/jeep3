<script>
  export let type = "submit";
</script>

<button {type} title={type}><slot /></button>

<style>
  button {
    margin-top: 1rem;
    background: none;
    outline: none;
    border: none;
    background: var(--blue);
    color: var(--color);
    font-size: inherit;
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
  }
</style>
