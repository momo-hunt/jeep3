<script>
  export let name;
  export let label;
  export let option = [];
  export let value = null;
  export let disabled = null;
</script>

{#if label}
  <label for={name} title={label}>{label}</label>
{/if}

<select {name} id={name} {value} {disabled}>
  {#each option as { label, value }}
    <option {value}>{label}</option>
  {/each}
</select>

<style>
  select {
    background: none;
    outline: none;
    border: none;
    background: var(--bg-2);
    color: var(--color);
    font-size: inherit;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  select:focus {
    outline: 1px solid var(--blue);
    outline-offset: 2px;
  }

  label {
    display: inline-block;
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }
</style>
