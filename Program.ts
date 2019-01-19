import { WebServer } from "dottype.webserver/WebServer";
import { FaviconMiddleware } from "./FaviconMiddleware";

console.log("HERE");
new WebServer()
    .UseMiddleware(new FaviconMiddleware())
    .RunAsync();