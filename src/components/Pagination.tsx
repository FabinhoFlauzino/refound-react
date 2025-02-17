import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"
import Button from "./Button"

type Props = {
  current: number
  total: number
  onNext: () => void
  onPrevius: () => void
}

export function Pagination({ current, total, onNext, onPrevius }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="iconSmall" onClick={onPrevius} disabled={current === 1}>
        <img src={leftSvg} alt="Voltar" />
      </Button>

      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>
      
      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="Avançar" />
      </Button>
    </div>
  )
}