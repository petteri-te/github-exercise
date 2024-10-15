// Importing the required modules from external sources.
import { serve, configure, serveFile } from "./deps.js";
import * as addressController from "./controllers/addressController.js";

// Configuring the views directory for rendering templates.
configure({
  views: `${Deno.cwd()}/views/`,
});

// Main request handler function.
const handleRequest = async (request) => {
  // Parsing the URL.
  const url = new URL(request.url);
  const filePath = `.${url.pathname}`;

  if (url.pathname.startsWith("/assets")) {
    return await serveFile(request, filePath);
  } else if (request.method === "POST" && url.pathname.startsWith("/delete/")) {
    // If it's a POST request to delete an address.
    return await addressController.deleteAddress(request);
  } else if (request.method === "POST") {
    // If it's a regular POST request to add a new address.
    return await addressController.addAddress(request);
  } else {
    // If it's a GET request to list all addresses.
    return await addressController.listAddresses(request);
  }
};

// Starting the server and specifying the port.
serve(handleRequest, { port: 7777 });
