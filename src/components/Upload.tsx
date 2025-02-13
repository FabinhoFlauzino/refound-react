import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
  filename?: string | null
}

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-xxs text-gray-200 mb-2">Comprovante</legend>

      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none d-flex justify-between">
        <input type="file" id="upload" {...rest} className="hidden" />
        <span className="text-sx text-gray-100 felx-1 pl-4">{filename ?? "Selecione o arquivo"}</span>
        <label htmlFor="upload" className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 hover:bg-green-200 transition ease-linear">
          <img src={uploadSvg} alt="" className="w-6 h-6" />
        </label>
      </div>
    </div>
  )
}
