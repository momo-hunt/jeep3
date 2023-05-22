<script>
  import { dateForm, timeForm } from "$lib/helper/datetime";
  import { goto } from "$app/navigation";
  import Form from "$lib/components/Form.svelte";
  import Input from "$lib/elements/Input.svelte";
  import ButtonForm from "$lib/elements/ButtonForm.svelte";
  import Select from "$lib/elements/Select.svelte";

  export let data;
  let formData = { km_awal: 0 };
  let success;
  let error;
  let loading = false;

  $: if (success) goto(`/pemakaian/${success.id}`);
</script>

<section>
  <Form
    action="/?collection=pemakaian&/add"
    name="form-tambah-pemakaian"
    bind:success
    bind:error
    bind:loading
  >
    <Input {...data?.fields?.["no_spj"]} />
    <Select {...data?.fields?.["sopir"]} value={1} />

    <Input {...data?.fields?.["tujuan"]} />
    <Input {...data?.fields?.["keperluan"]} />

    <div>Berangkat :</div>
    <div class="row">
      <Input {...data?.fields?.["tanggal_berangkat"]} value={dateForm()} />
      <Input {...data?.fields?.["jam_berangkat"]} value={timeForm()} />
    </div>

    <div>Kembali :</div>
    <div class="row">
      <Input {...data?.fields?.["tanggal_kembali"]} value={dateForm()} />
      <Input {...data?.fields?.["jam_kembali"]} value={timeForm()} />
    </div>

    <div class="row">
      <Input {...data?.fields?.["km_awal"]} bind:value={formData["km_awal"]} />
      <Input
        {...data?.fields?.["km_akhir"]}
        bind:value={formData["km_akhir"]}
      />
    </div>
    <Input
      {...data?.fields?.["km_pemakaian"]}
      value={formData["km_akhir"] - formData["km_awal"] || 0}
    />

    <ButtonForm {loading}>Simpan</ButtonForm>
  </Form>
</section>

<style>
  section {
    margin: 0.5rem 1rem;
    padding: 1rem;
    background: var(--bg-1);
  }

  section .row {
    display: flex;
    gap: 1rem;
  }
</style>
