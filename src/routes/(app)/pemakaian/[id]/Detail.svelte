<script>
  import { tanggalIndo, jamIndo, tanggalIndoFull } from "$lib/helper/datetime";
  export let data;
</script>

{#if !data?.loading}
  <section>
    <header>
      <h3>{data?.keperluan}</h3>
      <p>{data?.tujuan} - {data?.no_spj}</p>
    </header>

    <article class="row">
      <div>
        Berangkat :<br />
        <span>
          {tanggalIndo(data?.tanggal_berangkat)}
          <br />
          {jamIndo(data?.jam_berangkat)}
        </span>
      </div>
      <div>
        Kembali :<br />
        <span>
          {tanggalIndo(data?.tanggal_kembali)}
          <br />
          {jamIndo(data?.jam_kembali)}
        </span>
      </div>
    </article>

    <article class="row">
      <div>Awal :<br /><span>{data?.km_awal}</span></div>
      <div>Akhir :<br /><span>{data?.km_akhir}</span></div>
      <div>Pakai :<br /><span>{data?.km_pemakaian}</span></div>
    </article>

    <small>
      <div>
        Dibuat : {data?.created_by?.name ?? "-"}, {tanggalIndoFull(
          data?.created_at
        )}
      </div>
      <div>
        Diubah : {data?.updated_by?.name ?? "-"}, {tanggalIndoFull(
          data?.updated_at
        )}
      </div>
    </small>
  </section>
{/if}

<style>
  section {
    margin: 0.5rem 1rem;
    padding: 1rem;
    background: var(--bg-1);
  }

  section header {
    margin-bottom: 1rem;
  }

  section article {
    /* border-left: 2px solid slategray; */
    margin: 1rem 0;
  }

  .row {
    display: flex;
    text-align: center;
    gap: 1rem;
  }

  .row > * {
    background: var(--bg-2);
    padding: 0.5rem;
    width: 100%;
    filter: brightness(0.9);
  }

  .row span {
    font-size: 1.2em;
    filter: brightness(1.2);
  }

  small {
    opacity: 0.8;
  }
</style>
