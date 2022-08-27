import { Dispatch, SetStateAction } from "react"
import { deleteService } from "../services"

interface ModelWithNameAndId {
    id: string
    name: string
}
interface Model extends ModelWithNameAndId {}
interface Props {
    list: Model[]
    setList: Dispatch<SetStateAction<Model[]>>
}

export default function ItemListWithDelete({ list, setList }: Props) {
    const deleteItem = async (event: { currentTarget: { id: string } }) => {
        const json = await deleteService(
            "/api/category",
            event.currentTarget.id
        )

        setList(list.filter(item => item.id !== json.id))
    }

    return (
        <div>
            <h2>ItemListWithDelete</h2>

            <ul>
                {list.map((item, index) => (
                    <li key={item.id}>
                        <button id={item.id} onClick={deleteItem}>
                            X {index}
                        </button>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
