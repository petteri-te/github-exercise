import { Pool } from "../deps.js";

const CONCURRENT_CONNECTIONS = 2;
let connectionPool;
if (Deno.env.get("DATABASE_URL")) {
  console.log(`Online Database options: ${Deno.env.get("DATABASE_URL")}`);
  connectionPool = new Pool(Deno.env.get("DATABASE_URL"),
    CONCURRENT_CONNECTIONS, true);
} else if (Deno.env.get("FLYWAY_URL")) {
  console.log(`Flyway options: ${Deno.env.get("FLYWAY_URL")}`);
  connectionPool = new Pool(Deno.env.get("FLYWAY_URL"),
    CONCURRENT_CONNECTIONS, true);
} else {
  console.log(`couldn't find a db/URL for the Pool`);
  connectionPool = new Pool({}, CONCURRENT_CONNECTIONS, true);
}
const executeQuery = async (query, params) => {
  const response = {};
  let client;
  try {
    client = await connectionPool.connect();
    const result = await client.queryObject(query, params);
    if (result.rows) {
      response.rows = result.rows;
    }
  } catch (e) {
    response.error = e;
  } finally {
    try {
      await client.release();
    } catch (e) {
      console.log(e);
    }
  }

  return response;
};
export { executeQuery };
