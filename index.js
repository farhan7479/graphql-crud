import express from 'express';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from 'cors';
import typeDefs from './typeDefs.js';
import resolvers from './resolver.js';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start(); 
    
    app.use(express.json());
    app.use(cors());

    const PORT = process.env.PORT || 8080;

    
    app.use("/graphql", expressMiddleware(server));
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer().catch(err => console.error(err));


