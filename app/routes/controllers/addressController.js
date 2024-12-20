import * as addressService from "../../services/addressService.js";

// Function to handle adding a new address
const addAddress = async ({ request, response }) => {
  // Extracting form data.
  const body = request.body();
  const params = await body.value;

  // Retrieving name and address from the form data.
  const lastName = params.get("lastName");
  const firstName = params.get("firstName");
  const streetAddress = params.get("streetAddress");
  const postCodeCity = params.get("postCodeAndCity");
  console.log(`Name: ${lastName} ${firstName}\nAddress: ${streetAddress}, ${postCodeCity}`);
  // Combine fields to match service requirements
  const name = `${firstName} ${lastName}`; // Full name
  const address = `${streetAddress}, ${postCodeCity}`; // Full address
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

const searchAddresses = async ({ request, response }) => {
  const param = request.url.searchParams;
  if (param.has("q")) {
    const query = param.get("q");
    console.log("query:", query);
    const addresses = await addressService.findByNameOrAddressLike(query);
    console.log("addresses:", addresses);
    // response.redirect(`/`);
    response.body = addresses;
  } else {
    return (response.body = { error: "Invalid query" });
  }
};

export { addAddress, deleteAddress, listAddresses, searchAddresses };
