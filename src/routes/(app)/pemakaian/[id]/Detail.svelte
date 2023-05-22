<script>
  export let data;
</script>

<section>
  <h3>{data?.keperluan} <br /> ({data?.tujuan} - {data?.no_spj})</h3>
  <article>
    <div>Km Awal : {data?.km_awal}</div>
    <div>Km Akhir : {data?.km_akhir}</div>
    <div>Km Pemakaian : {data?.km_pemakaian}</div>
  </article>

  <small>
    <div>Dibuat : {data?.created_by?.name ?? "-"}, {data?.created_at}</div>
    <div>Diubah : {data?.updated_by?.name ?? "-"}, {data?.updated_at}</div>
  </small>
</section>

<style>
  section {
    margin: 0.5rem 1rem;
    padding: 1rem;
    background: var(--bg-1);
  }

  section > h3 {
    margin-bottom: 1rem;
  }

  section article {
    border-left: 2px solid slategray;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }
</style>
