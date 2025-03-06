import { useState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)


  function onAction(formData: FormData) {

    console.log(formData.get("email"))

  }

  return (
    <form action={onAction} className="
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

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mb-4 mt-10 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
  )
}