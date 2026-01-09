import { supabaseRoute } from "@/lib/supabase-route";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { supabase, response } = supabaseRoute(request);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return response;
}

