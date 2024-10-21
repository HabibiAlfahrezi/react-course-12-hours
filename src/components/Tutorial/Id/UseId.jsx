import { useId } from "react"

const UseId = () => {
    const id = useId()
  return (
    <div>
        <input type="text" id={id} />
        <input type="text" id={id} />
        <input type="text" id={id} />
    </div>
  )
}

export default UseId