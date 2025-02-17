import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Upload } from "../components/Upload";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router";

export default function Refund() {
  const [name, setName] = useState("Fabio Teste")
  const [amount, setAmount] = useState("34,50")
  const [category, setCategory] = useState("transport")
  const [isLoading, setIsLoading] = useState(false)
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }

    console.log(name, amount, category, isLoading, filename)

    navigate("/confirm", {
      state: {
        fromSubmit: true
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
      <header>
        <h1 className="text-xl font-bold text-gray-100">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reembolso.</p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {
            CATEGORIES_KEYS.map((category, index) => (
              <option value={category} key={index}>
                {CATEGORIES[category].name}
              </option>
            ))
          }
        </Select>

        <Input
          required
          legend="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>

    </form>
  )
}
