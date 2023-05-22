<script>
  export let label;
  export let type;
  export let name;
  export let placeholder = null;
  export let value = null;
  export let readonly = null;
  export let required = null;
  export let disabled = null;
</script>

<article>
  {#if label}
    <label for={name} title={label}>{label}</label>
  {/if}
  <input
    {type}
    {name}
    id={name}
    {placeholder}
    {value}
    {readonly}
    {required}
    {disabled}
    title={label}
    on:keyup={(e) => (value = e.target.value)}
  />
</article>

<style>
  input {
    background: none;
    outline: none;
    border: none;
    background: var(--bg-2);
    color: var(--color);
    font-size: inherit;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
  }

  input::placeholder {
    color: inherit;
    opacity: 0.6;
  }

  article {
    margin: 1rem 0;
  }

  label {
    display: inline-block;
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }
</style>
