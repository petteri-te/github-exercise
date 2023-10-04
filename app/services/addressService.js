import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

const sql = postgres({});

const create = async (name, address) => {
    console.log("in create");
  await sql`INSERT INTO addresses (name, address)
    VALUES (${ name }, ${ address })`;
    console.log("done the db addition  insert into");

};

const findAll = async () => {
  return await sql`SELECT * FROM addresses`;
};

const findByNameOrAddressLike = async (nameOrAddress) => {
  const likePart = `%${nameOrAddress}%`;

  return await sql`SELECT * FROM addresses
    WHERE name ILIKE ${ namePart } OR address ILIKE ${ namePart }`;
};

const deleteById = async (id) => {
    await sql`DELETE FROM addresses WHERE id = ${ id }`;
  };

export { deleteById, create, findAll, findByNameOrAddressLike };