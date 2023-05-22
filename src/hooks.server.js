import DB from "$lib/server/db";

export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("sessionId");
  if (session) {
    const { id, nickname, username, token, role } = JSON.parse(session);
    event.locals.user = {
      id,
      token,
      role,
      name: nickname || username,
    };
  }
  //   event.locals.db = new DB(event.locals?.user?.token || token);
  let token = "abce";
  event.locals.db = new DB(token);
  const respon = await resolve(event);
  return respon;
};
