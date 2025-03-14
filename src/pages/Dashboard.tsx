import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import searchSvg from "../assets/search.svg"
import { RefundItem, RefundItemProps } from "../components/RefundItem";
import { Pagination } from "../components/Pagination";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { formatCurrency } from "../utils/formatCurrency";
import { CATEGORIES } from "../utils/categories";

const PER_PAGE = 5

export function Dashboard() {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [totalOfPage, setTotalOfPage] = useState(0)
  const [refunds, setRefunds] = useState<RefundItemProps[]>([])

  async function fetchRefounds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(`/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`)

      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category as keyof typeof CATEGORIES].icon,
        }))
      )

      setTotalOfPage(response.data.pagination.totalPages)
    } catch (error) {
      if(error instanceof AxiosError) {
        console.log(error);
        
        return alert(error.response?.data.message)
      }
      alert("Não foi possível carregar dados")
    }
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage
    })

  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    fetchRefounds()
  }

  useEffect(() => {
    fetchRefounds()
  }, [page])

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form onSubmit={onSubmit} className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input
          placeholder="Pesquise pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button variant="icon" type="submit">
          <img src={searchSvg} alt="Pesquisar" className="w-5" />
        </Button>

      </form>

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-auto">
        {
          refunds.map((item) => (
            <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
          ))
        }
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevius={() => handlePagination("previous")}
      />
    </div>
  )
}