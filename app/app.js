// Importing the required modules from external sources.
import { Application } from "./deps.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { staticMiddleware } from "./middlewares/staticMiddleware.js";
import { router } from "./routes/routes.js";

const app = new Application();

app.use(renderMiddleware); // rendering pages if it need.
app.use(staticMiddleware); // sending static data if it need.

app.use(router.routes());

app.listen({ port: 7777 });
