<script>
  import { enhance } from "$app/forms";

  export let action;
  export let name;
  export let loading;
  export let success;
  export let error;
</script>

<form
  {action}
  title={name}
  method="post"
  use:enhance={() => {
    loading = true;
    return async ({ result }) => {
      loading = false;
      console.log("res", name, result);
      if (result.status == 200) return (success = result.data);
      return (error = result.data);
    };
  }}
>
  <slot />
</form>
