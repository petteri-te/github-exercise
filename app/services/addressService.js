// Importing the PostgreSQL client module
import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

// Creating a PostgreSQL client instance
const sql = postgres({});

// Function to create a new address
const create = async (name, address) => {
    console.log("in create");
    // Inserting the provided name and address into the 'addresses' table
  await sql`INSERT INTO addresses (name, address)
    VALUES (${ name }, ${ address })`;
    console.log("Address added to the database");

};

const findAll = async () => {
  let result = await executeQuery("SELECT * FROM addresses;");
  return result.rows;
};

const findByNameOrAddressLike = async (nameOrAddress) => {
  const likePart = `%${nameOrAddress}%`;

  let result = await executeQuery("SELECT * FROM addresses WHERE name ILIKE $namePart OR address ILIKE $likePart;",
    { name: likePart, address: likePart }
  );
  return result.rows;
};

const deleteById = async (id) => {
  let result = await executeQuery("DELETE FROM addresses WHERE id = $id;",
    { id: id }
  );
  return result.rows;
};

export { deleteById, create, findAll, findByNameOrAddressLike };
