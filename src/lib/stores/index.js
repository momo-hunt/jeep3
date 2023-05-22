import { writable } from "svelte/store";

const listStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    get: async (old, name, opt) => {
      set({ ...old, [name]: { loading: true } });

      // await new Promise((res) => setTimeout(() => res(), 2000));

      const req = {
        collection: name,
        ...opt,
      };

      const res = await fetch("/api?req=" + JSON.stringify(req));
      const respon = res.ok ? await res.json() : null;

      const more = respon.total - respon.limit * respon.page > 0;
      set({ ...old, [name]: { loading: false, ...respon, more } });
    },

    getMore: async (old, name) => {
      set({ ...old, [name]: { ...old[name], loading: true } });

      const req = {
        collection: name,
        limit: old[name].limit,
        sort: old[name].sort,
        page: old[name].page + 1,
      };

      const res = await fetch("/api?req=" + JSON.stringify(req));
      const respon = res.ok ? await res.json() : null;

      const more = respon.total - respon.limit * respon.page > 0;
      set({
        ...old,
        [name]: {
          loading: false,
          ...respon,
          data: [...old[name].data, ...respon.data],
          more,
        },
      });
    },
  };
};
export const list = listStore();

const objStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    get: async (collection, id) => {
      set({ loading: true });

      const res = await fetch("/api/" + id + "?collection=" + collection);
      const respon = res.ok ? await res.json() : null;
      set(respon);
    },
  };
};
export const obj = objStore();
