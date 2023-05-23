<script>
  import { dayAgo } from "$lib/helper/datetime";
  import { list } from "$lib/stores";
  import { rupiah } from "$lib/helper/stringnumber";
  import { dateHalf } from "$lib/helper/datetime";

  import Button from "$lib/elements/Button.svelte";
  export let name;
</script>

{#if $list?.[name]?.data}
  <ul>
    {#each $list?.[name]?.data as d}
      <li>
        <article class="left">
          <div>{dateHalf("bulan", d.tanggal_kembali)}</div>
          <h2>
            {dateHalf("tanggal", d.tanggal_kembali)}
          </h2>
        </article>
        <article class="right">
          <a href={`/pemakaian/${d.id}`}><h3>{d.keperluan} ({d.tujuan})</h3></a>
          <p>Km Akhir : {rupiah(d.km_akhir)}</p>
          <small>{d.created_by?.name ?? "-"} : {dayAgo(d.created_at)}</small>
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

  ul li > *:first-child {
    text-align: right;
    filter: brightness(0.9);
  }

  ul li h3 {
    color: var(--blue);
    margin-bottom: 0.5rem;
  }

  ul li small {
    opacity: 0.6;
  }
</style>
