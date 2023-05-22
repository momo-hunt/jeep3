<script>
  import { onMount } from "svelte";
  import { list } from "$lib/stores";
  import List from "./List.svelte";
  import LoadingData from "$lib/components/LoadingData.svelte";

  let name = "pemakaian";

  onMount(() => {
    list.get($list, name, { limit: 10, page: 1 });
  });

  // $: console.log($list);
</script>

<h2>Pemakaian</h2>

<List {name} />

<LoadingData loading={$list?.[name]?.loading}>Memuat data...</LoadingData>
