import { useActionState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, {
    email: "",
    password: ""
  })

  async function signIn(prevState: any, formData: FormData) {

    const email = formData.get("email")
    const password = formData.get("password")

    console.log(email, password)

    return {email, password}

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
        defaultValue={String(state?.email)}
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        defaultValue={String(state.password)}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mb-4 mt-10 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
  )
}