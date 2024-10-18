import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

const sql = postgres({});

export const create = async (username, password) => {
  const user = await findByUsername(username);
  if (user) {
    return;
  }
  // TODO: add password hashing
  await sql`INSERT INTO users (username, password)
    VALUES (${username}, ${password})`;
};

export const findByUsername = async (username) => {
  return await sql`SELECT * FROM users WHERE username = ${username}`;
};
