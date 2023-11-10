import { connectToDB } from "@/utils/db";

export const POST = async (request) => {
    const { name, email, password } = await request.json();
    try {
        const client = await connectToDB();
        const db = client.db(process.env.MONGODB_DB);
        const usersCollection = db.collection("users");
        const newUser = { name, email, password };
        const result = await usersCollection.insertOne(newUser);
        client.close();
        return new Response(JSON.stringify(result), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new user", { status: 500 });
    }
}

export const GET = async (request) => {
    try {
        const client = await connectToDB();
        const db = client.db(process.env.MONGODB_DB);
        const usersCollection = db.collection("users");
        const users = await usersCollection.find().toArray();
        client.close();
        return new Response(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch users", { status: 500 })
    }
} 