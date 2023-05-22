<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { obj } from "$lib/stores";
  import LoadingData from "$lib/components/LoadingData.svelte";
  import Detail from "./Detail.svelte";

  const { id } = $page.params;

  onMount(() => {
    obj.get("pemakaian", id);
  });

  $: console.log($obj);
</script>

<h2>Detail Pemakaian</h2>

<LoadingData loading={$obj?.loading}>Memuat data...</LoadingData>

<Detail data={$obj} />
