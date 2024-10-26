

// const { Configuration, OpenAIApi } = require('openai');
// const ChromaClient = require('chromadb');

import { ChromaClient } from "chromadb";

const client = new ChromaClient({
    port: "http://localhost:8000"
});

async function main() {
    const response = await client.createCollection({
        name: "test-dataset1",
    });

    console.log(response)
}

main();


/*
const init = () => {
    const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
    const chromaClient = new ChromaClient();
    return { openai, chromaClient };
};

const generateEmbedding = async (text, openai) => {
    try {
        const response = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: text,
        });
        return response.data.data[0].embedding;
    } catch (error) {
        console.error("Error generating embedding:", error);
    }
};

const storeEmbedding = async (embedding, metadata, chromaClient) => {
    try {
        const result = await chromaClient.store({
            collection: 'my_embeddings',
            data: { embedding, metadata }
        });
        console.log("Embedding stored successfully:", result);
    } catch (error) {
        console.error("Error storing embedding in ChromaDB:", error);
    }
};

const main = async (text, metadata = {}) => {
    const { openai, chromaClient } = init();
    const embedding = await generateEmbedding(text, openai);
    if (embedding) {
        await storeEmbedding(embedding, metadata, chromaClient);
    }
};

// Example usage
main("Sample text to embed", { category: "example" });

*/