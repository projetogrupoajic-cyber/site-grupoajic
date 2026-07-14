"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      return;
    }
    if (data?.session) {
      router.push("/admin");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-10">
          <h1 className="text-3xl font-bold text-white">Login Administrativo</h1>
          <p className="mt-3 text-slate-400">Acesse o painel com seu e-mail e senha.</p>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Email</label>
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">Senha</label>
              <input type="password" className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="text-sm text-rose-400">{error}</p>}
            <button className="w-full rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
