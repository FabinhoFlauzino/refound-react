import { useState } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import searchSvg from "../assets/search.svg"
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
const REFUND_EXEMPLE = {
  id: "123",
  name: "Fabio",
  category: "Transporte",
  amount: "34,50",
  categoryImg: CATEGORIES["transport"].icon
}

export function Dashboard() {
  const [name, setName] = useState("")

  function fetchRefounds(e: React.FormEvent) {
    e.preventDefault()
    console.log(name)
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form onSubmit={fetchRefounds} className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input
          placeholder="Pesquise pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button variant="icon" type="submit">
          <img src={searchSvg} alt="Pesquisar" className="w-5"/>
        </Button>
        
      </form>

      <div>
        <RefundItem data={REFUND_EXEMPLE}/>
      </div>
    </div>
  )
}