import { send } from "../deps.js";


// Middleware for sending static files. 
// You can change static directors in "root" variable. 
const staticMiddleware = async (context, next) => {
    const css = context.request.url.pathname.startsWith("/css");
    const js = context.request.url.pathname.startsWith("/js");
  
    if (css || js) {
      await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/assets`,
      });
    } else {
      await next();
    }
};


export {
    staticMiddleware
};