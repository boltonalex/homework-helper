const fs = require('fs');
const { Client, Databases } = require('appwrite');

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

// Initialize the Appwrite client
const client = new Client();
const database = new Databases(client);

client
    .setEndpoint(ENDPOINT) // Replace with your Appwrite endpoint
    .setProject(PROJECT_ID); // Replace with your Appwrite project ID

// Function to upload JSON data to an Appwrite collection
async function uploadJsonToAppwriteCollection(jsonData, collectionId) {
    try {
        for (const entry of jsonData) {
            const response = await database.createDocument(collectionId, 'unique()', entry);
            console.log("Document created with ID:", response.$id);
        }
        console.log("All data has been successfully uploaded!");
    } catch (error) {
        console.error("Error uploading data:", error);
    }
}

// Function to read and parse JSON file
async function parseAndUploadJsonFile(filePath, collectionId) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8'); // Read file content
        const jsonData = JSON.parse(fileContent); // Parse JSON content

        if (!Array.isArray(jsonData)) {
            console.error("JSON data should be an array of objects.");
            return;
        }

        await uploadJsonToAppwriteCollection(jsonData, collectionId);
    } catch (error) {
        console.error("Error reading or parsing JSON file:", error);
    }
}

// Replace with the path to your JSON file and your collection ID
const filePath = './data.json';
const collectionId = '6722a953002f0ce46326';

parseAndUploadJsonFile(filePath, collectionId);
