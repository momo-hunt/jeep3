<script>
  import LoadingButton from "../components/LoadingButton.svelte";

  export let type = "submit";
  export let loading = false;
</script>

<button {type} title={type} disabled={loading}>
  {#if loading}
    <LoadingButton {loading}>proses</LoadingButton>
  {:else}
    <span><slot /></span>
  {/if}
</button>

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

  button:focus {
    outline: 1px solid var(--blue);
    outline-offset: 2px;
  }

  button:disabled {
    cursor: auto;
    opacity: 0.8;
    filter: brightness(0.6);
  }
</style>
