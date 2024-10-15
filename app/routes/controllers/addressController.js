import * as addressService from "../../services/addressService.js";


// Function to handle adding a new address
const addAddress = async ({ request, response }) => {
  // Extracting form data.
  const body = request.body();
  const params = await body.value;

  // Retrieving name and address from the form data.
  const name = params.get("name");
  const address = params.get("address");

  console.log(`Name: ${name}\nAddress ${address}`);

  // Creating a new address using the addressService.
  await addressService.create(name, address);
  // Redirecting to the root page.
  return response.redirect("/");
};
  
// Function to list all addresses.
const listAddresses = async ({ render }) => {
  const data = {
    addresses: await addressService.findAll(),
  };
  // Rendering the 'index.eta' template with address data.
  render("index.eta", data);
};
  
// Function to delete an address.
const deleteAddress = async ({ params, response }) => {
  // Parsing the URL to extract the address ID
  const id = params.id;

  // Deleting the address using the addressService.
  await addressService.deleteById(id);

  // Redirecting to the root page.
  return response.redirect("/");
};


export {
  addAddress,
  deleteAddress,
  listAddresses,
};