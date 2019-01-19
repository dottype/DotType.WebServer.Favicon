import { WebServer } from "dottype.webserver/WebServer";
import { FaviconMiddleware } from "./FaviconMiddleware";

new WebServer()
    .UseMiddleware(new FaviconMiddleware())
    .RunAsync();