// Importing the required modules from external sources.
import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";
import { serveFile } from "./deps.js";
import * as addressService from "./services/addressService.js";

// Configuring the views directory for rendering templates.
configure({
  views: `${Deno.cwd()}/views/`,
});

// Details for the HTTP response.
const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

// Function to perform a redirect.
const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      Location: path,
    },
  });
};

// Function to handle adding a new address.
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

// Main request handler function.
const handleRequest = async (request) => {
  // Parsing the URL.
  const url = new URL(request.url);
  if (url.pathname.startsWith("/assets")) {
    const filePath = `.${url.pathname}`;
    return await serveFile(request, filePath);
  } else if (request.method === "POST" && url.pathname.startsWith("/delete/")) {
    // If it's a POST request to delete an address.
    return await deleteAddress(request);
  } else if (request.method === "POST") {
    // If it's a regular POST request to add a new address.
    return await addAddress(request);
  } else {
    // If it's a GET request to list all addresses.
    return await listAddresses(request);
  }
};

// Starting the server and specifying the port.
serve(handleRequest, { port: 7777 });
