import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan("common"));
    this.server.use(helmet());

    this.server.use((req, res, next) => {
      const error = new Error(`Route Not Found - ${req.originalUrl}`);
      res.status(404);
      next(error);
    });

    this.server.use((error, req, res, next) => {
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      res.status(statusCode);
      res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? "Yeah" : error.stack
      });
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
