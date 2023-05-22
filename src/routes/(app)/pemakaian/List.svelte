<script>
  import { list } from "$lib/stores";
  import Button from "$lib/elements/Button.svelte";
  export let name;
</script>

{#if $list?.[name]?.data}
  <ul>
    {#each $list?.[name]?.data as d}
      <li>
        <article class="left">
          <div>Des</div>
          <h2>19</h2>
        </article>
        <hr />
        <article class="right">
          <small>Santoso : {d.created_at}</small>
          <a href={`/pemakaian/${d.id}`}><h3>{d.keperluan} ({d.tujuan})</h3></a>
          <p>Km Akhir : {d.km_akhir}</p>
        </article>
      </li>
    {/each}
  </ul>
{/if}

{#if !$list?.[name]?.loading && $list?.[name]?.more}
  <Button on:click={() => list.getMore($list, name)}>Tampilkan lebih</Button>
{/if}

<style>
  ul {
    margin: 0.5rem 0;
  }
  ul li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid slategray;
    display: flex;
    gap: 1rem;
  }

  ul li hr {
    border-color: var(--bg-2);
  }

  ul li > *:first-child {
    text-align: right;
  }

  ul li h3 {
    color: var(--blue);
    margin-bottom: 0.5rem;
  }

  ul li small {
    opacity: 0.6;
  }
</style>
