<script>
  import LoadingData from "../../lib/components/LoadingData.svelte";
  import CardSession from "./CardSession.svelte";

  async function getData() {
    const res = await fetch("/api/rekap");
    const respon = res.ok ? await res.json() : null;
    return respon;
  }

  let promise = getData();
</script>

<h1>Welcome to Jeep Kaba</h1>

{#await promise}
  <LoadingData loading={true}>memuat</LoadingData>
{:then data}
  <CardSession {data} />
{/await}

<style>
  h1 {
    margin: 2rem 1rem;
  }
</style>
