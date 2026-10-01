import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, budget, message, consent } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject: subject || "Web Application",
      budget: budget || "3 K – 5 K",
      message,
      consent: consent ?? true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received and saved.",
        id: newMessage._id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error saving contact message to MongoDB:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to process inquiry.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const count = await ContactMessage.countDocuments();
    return NextResponse.json({
      status: "connected",
      message: "MongoDB connected successfully",
      totalInquiries: count,
    });
  } catch (error: unknown) {
    console.error("MongoDB connection health error:", error);
    const errorMessage = error instanceof Error ? error.message : "Database connection failed.";
    return NextResponse.json(
      { status: "error", error: errorMessage },
      { status: 500 }
    );
  }
}
