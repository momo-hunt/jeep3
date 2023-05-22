import { json } from "@sveltejs/kit";

export const GET = async ({ url, locals }) => {
  let obj = Object.fromEntries(url.searchParams);
  if (obj) obj = JSON.parse(obj.req);

  // console.log("obj", obj);
  const { collection, ...rest } = obj;

  const data = await locals.db.collection(collection).readAll(rest);
  // console.log(data);

  return json(data);
};
