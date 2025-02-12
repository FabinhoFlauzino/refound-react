import { useState } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log(name, email, password, passwordConfirm)
  }

  return (
    <form onSubmit={onSubmit} className="
      flex flex-col gap-4 w-full
    ">
      <Input
        required
        legend="Name"
        placeholder="Seu Nome"
        value={email}
        onChange={(e) => setName(e.target.value)}
      />

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

      <Input
        required
        legend="Confirmação da Senha"
        type="password"
        placeholder="123456"
        value={password}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

      <a href="/" className="text-sm font-semibold text-gray-100 mb-4 mt-10 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form>
  )
}