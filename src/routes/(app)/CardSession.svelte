<script>
  import Card from "./Card.svelte";
  import { numberKoma, rupiah } from "$lib/helper/stringnumber";
  export let data;

  // $: console.log(data);
</script>

<section>
  <Card name="KM Akhir" value={rupiah(data["km_akhir"])} />
  <hr />
  <h3>Bulan ini</h3>
  <div class="row">
    <Card name="KM" value={data["km_jumlah_bulan"]} />
    <Card name="BBM" value={numberKoma(data["bbm_liter_bulan"])} />
    <Card
      name="Liter / KM"
      value={numberKoma(data["bbm_liter_bulan"] / data["km_jumlah_bulan"])}
    />
  </div>
  <div class="row">
    <Card name="Biaya BBM" value={rupiah(data["bbm_biaya_bulan"])} />
    <Card
      name="Biaya / KM"
      value={numberKoma(data["bbm_biaya_bulan"] / data["km_jumlah_bulan"])}
    />
  </div>
  <hr />
  <h3>Tahun ini</h3>
  <div class="row">
    <Card name="KM" value={data["km_jumlah_tahun"]} />
    <Card name="BBM" value={numberKoma(data["bbm_liter_tahun"])} />
    <Card
      name="Liter / KM"
      value={numberKoma(data["bbm_liter_tahun"] / data["km_jumlah_tahun"])}
    />
  </div>
  <div class="row">
    <Card name="Biaya BBM" value={rupiah(data["bbm_biaya_tahun"])} />
    <Card
      name="Biaya / KM"
      value={numberKoma(data["bbm_biaya_tahun"] / data["km_jumlah_tahun"])}
    />
  </div>
</section>

<style>
  section {
    margin: 1rem;
  }

  .row {
    display: flex;
    gap: 0.5rem;
  }

  hr {
    margin: 1rem 0;
    border: 1px solid var(--bg-2);
  }
</style>
