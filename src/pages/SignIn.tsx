import { useActionState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";

const signInScheme = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().trim().min(6, "Informe a senha com no mínimo 6 caractéres")
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null)

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInScheme.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      const response = await api.post("/sessions", data)

      console.log(response.data)

    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message }
      }

      return { message: "Não foi possível entrar." }

    }

  }

  return (
    <form action={formAction} className="
      flex flex-col gap-4 w-full
    ">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <p className="text-sm text-red-500 text-center my-4 font-medium">{state?.message}</p>

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mb-4 mt-10 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
  )
}