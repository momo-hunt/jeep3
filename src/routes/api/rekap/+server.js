import { json } from "@sveltejs/kit";

export const GET = async ({ locals }) => {
  const data = await locals.db.collection("rekap").rekap();

  return json(data);
};
