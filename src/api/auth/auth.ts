import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  });

  if (error) throw error;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const signupUser = async (userData: any) => {
  console.log("✅ Calling registerUser with:", userData);
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, userData);
  console.log("✅ Registration response:", data);
  return data;
};
export const loginUser = async (credentials: any) => {
  console.log("✅ Calling loginUser with:", credentials);
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, credentials);
  console.log("✅ Login response:", data);
  return data;
};
