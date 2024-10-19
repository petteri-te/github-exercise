import { executeQuery } from "../database/database.js";

// Function to create a new address
const create = async (name, address) => {
  // Inserting the provided name and address into the 'addresses' table
  await executeQuery(`INSERT INTO addresses (name, address)
    VALUES ($name, $address);`, 
    {name: name, address: address});
  console.log("Address added to the database");
};

// Function to find all addresses
const findAll = async () => {
  return (await executeQuery(`SELECT * FROM addresses;`)).rows;
};

// Function to find addresses by name or address (partial match)
const findByNameOrAddressLike = async (nameOrAddress) => {
  const partOfWord = `%${nameOrAddress}%`;
  return (await executeQuery(`SELECT * FROM addresses
    WHERE name ILIKE $namePart OR address ILIKE $addressPart;`, 
    {namePart: partOfWord, addressPart: partOfWord})).rows;
};

const deleteById = async (id) => {
  await executeQuery(`DELETE FROM addresses WHERE id = $id;`, 
    {id: id});
};

// Exporting the functions to be used in other modules
export { deleteById, create, findAll, findByNameOrAddressLike };