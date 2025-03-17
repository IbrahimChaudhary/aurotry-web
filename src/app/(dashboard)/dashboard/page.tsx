"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { signupUser } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { sign } from "crypto";

export default function Dashboard() {
  //STATES
  const [loading, setLoading] = useState(true);

  //HOOKS
  useEffect(() => {
    const checkUserAndRegister = async () => {
      const { data: userData, error } = await supabase.auth.getUser();
      registerMutation.mutate(userData.user);
      setLoading(false);
    };

    checkUserAndRegister();
  }, []);

  //MUTATIONS
  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: signupUser,
  });


  if (loading) return <div>Loading...</div>;

  return <div>Hiiiiiiiiiii</div>;
}
