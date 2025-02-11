type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export default function Button({ children, isLoading, type = "button", ...rest }: Props) {
  return (
    <button type={type} {...rest} disabled={isLoading}
      className="h-12 flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
    >{children}</button>
  )
}
