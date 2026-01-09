import { supabaseRoute } from "@/lib/supabase-route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, preferredDate, preferredTime } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "El mensaje no puede exceder 2000 caracteres" },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    const { supabase, response } = supabaseRoute(request);

    // Insertar en la base de datos
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        preferred_date: preferredDate || null,
        preferred_time: preferredTime || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting contact message:", error);
      return NextResponse.json(
        { error: "Error al guardar el mensaje. Por favor intenta de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}

