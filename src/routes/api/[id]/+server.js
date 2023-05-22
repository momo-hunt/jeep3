import { json } from "@sveltejs/kit";

export const GET = async ({ params, url, locals }) => {
  let { collection } = Object.fromEntries(url.searchParams);

  const data = await locals.db.collection(collection).read(params.id);
  //   console.log(data);

  return json(data);
};
