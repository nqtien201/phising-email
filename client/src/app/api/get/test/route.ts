import { connectDB } from "@/app/config/mongoose";

export async function GET(){
    await connectDB();
    return new Response("Hello, Next.js!")
}