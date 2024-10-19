import { executeQuery } from "../database/database.js";

export const create = async (username, password) => {
  const user = await findByUsername(username);
  if (user) {
    return;
  }
  // TODO: add password hashing
  await executeQuery(`INSERT INTO users (username, password)
    VALUES ($username, $password);`, 
    {username: username, password: password});
};

export const findByUsername = async (username) => {
  return (await executeQuery(`SELECT * FROM users WHERE username = $username;`, 
    {username: username})).rows;
};
