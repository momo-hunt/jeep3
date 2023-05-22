<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button type="button" on:click={() => dispatch("click")}><slot /></button>

<style>
  button {
    background: none;
    outline: none;
    border: none;
    height: 3rem;
    padding: 0 2rem;
    border: 2px solid gray;
    color: inherit;
  }
</style>
