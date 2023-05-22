export const actions = {
  add: async ({ url, request, locals }) => {
    const data = Object.fromEntries(await request.formData());
    const { collection } = Object.fromEntries(url.searchParams);

    // console.log("---", collection, data);
    const result = await locals.db.collection(collection).create(data);
    return result;
  },
};
