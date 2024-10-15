import { renderFile } from "../deps.js";
import * as addressService from "../services/addressService.js";


// Function to perform a redirect.
const redirectTo = (path) => {
    return new Response(`Redirecting to ${path}.`, {
      status: 303,
      headers: {
        Location: path,
      },
    });
  };

// Details for the HTTP response.
const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  };

// Function to handle adding a new address
const addAddress = async (request) => {
    // Extracting form data.
    const formData = await request.formData();
  
  // Retrieving name and address from the form data.
    const name = formData.get("name");
    console.log(name);
  
    const address = formData.get("address");
    console.log(address);
  
    // Creating a new address using the addressService.
    await addressService.create(name, address);
    // Redirecting to the root page.
    return redirectTo("/");
  };
  
  // Function to list all addresses.
  const listAddresses = async (request) => {
    const data = {
      addresses: await addressService.findAll(),
    };
    // Rendering the 'index.eta' template with address data.
    return new Response(await renderFile("index.eta", data), responseDetails);
  };
  
  // Function to delete an address.
  const deleteAddress = async (request) => {
    // Parsing the URL to extract the address ID
    const url = new URL(request.url);
    const parts = url.pathname.split("/");
    const id = parts[2];
    // Deleting the address using the addressService.
    await addressService.deleteById(id);
  
    // Redirecting to the root page.
    return redirectTo("/");
  };


  export {
    addAddress,
    deleteAddress,
    listAddresses,
  };