import cors from 'cors'
import express from 'express'
const app = express();

  app.use(
   cors(
    {
        origin: '*', // Allow requests from this origin
        methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed HTTP methods
        allowedHeaders: 'Content-Type,Authorization' // Allowed request headers
      }
   )
  );
