<script>
  import TitleHeader from "$lib/components/TitleHeader.svelte";
  import FormTambah from "./FormTambah.svelte";

  export let data;
</script>

<TitleHeader title="Tambah Pemakaian" />

<FormTambah {data} />
