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

// Function to find all addresses
const findAll = async () => {
  return await sql`SELECT * FROM addresses`;
};

// Function to find addresses by name or address (partial match)
const findByNameOrAddressLike = async (nameOrAddress) => {
  const likePart = `%${nameOrAddress}%`;

  return await sql`SELECT * FROM addresses
    WHERE name ILIKE ${ namePart } OR address ILIKE ${ namePart }`;
};

// Function to delete an address by ID
const deleteById = async (id) => {
    await sql`DELETE FROM addresses WHERE id = ${ id }`;
  };

  // Exporting the functions to be used in other modules
export { deleteById, create, findAll, findByNameOrAddressLike };
