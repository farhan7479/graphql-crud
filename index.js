import express from 'express';
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from 'cors';

import typeDefs from './typeDefs.js';
import resolvers from './resolver.js';
import connectDB from "./config/conn.js";
const app = express();
dotenv.config();
connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start(); 
    
    app.use(express.json());
    app.use(cors())

    const PORT = process.env.PORT || 8000;

    
    app.use("/graphql", expressMiddleware(server));
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer().catch(err => console.error(err));


