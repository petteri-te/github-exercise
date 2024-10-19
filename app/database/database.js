import { Pool } from "../deps.js";

const DATABASE_URL = Deno.env.get("DATABASE_URL");
const FLYWAY_URL = Deno.env.get("FLYWAY_URL");
const CONCURRENT_CONNECTIONS = 10;
let connectionPool;

if (DATABASE_URL) {
  console.log(`Online Database options: ${DATABASE_URL}`);

  connectionPool = new Pool(DATABASE_URL,CONCURRENT_CONNECTIONS, true);
} else if (FLYWAY_URL) {
  console.log(`Flyway options: ${FLYWAY_URL}`);

  connectionPool = new Pool(FLYWAY_URL, CONCURRENT_CONNECTIONS, true);
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