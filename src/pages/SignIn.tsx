import { useState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <form onSubmit={onSubmit} className="
      flex flex-col gap-4 w-full
    ">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm font-semibold text-gray-100 mb-4 mt-10 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
  )
}