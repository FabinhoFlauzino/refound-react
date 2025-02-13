export function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-400">
      <div className="flex flex-col bg-green-100 p-10 rounded-md">
        <h1 className="text-gray-400 font-semibold text-2xl mb-4">Opss! Essa página não existe.</h1>
        <a href="/" className="font-semibold text-center text-white hover:text-zinc-200">Voltar para o ínicio.</a>
      </div>
    </div>
  )
}