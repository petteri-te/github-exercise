import * as userService from "../../services/userService.js";

export const createUser = async ({ request, response }) => {
  const body = request.body();
  const params = await body.value;

  const username = params.get("username");
  const password = params.get("password");

  await userService.create(username, password);

  return response.redirect("/");
};
