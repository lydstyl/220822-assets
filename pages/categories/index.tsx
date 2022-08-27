import type { NextPage } from "next"
import Head from "next/head"
import { PrismaClient, Category } from "@prisma/client"
import { FormEventHandler, useState } from "react"
import { createService, deleteService } from "../../services"
import ItemListWithDelete from "../../components/itemListWithDelete"

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
    const categories: Category[] = await prisma.category.findMany()

    return { props: { categories } }
}

interface Props {
    categories: Category[]
}
const Categories: NextPage<Props> = ({ categories }) => {
    const [cats, setCats] = useState(categories)
    const [name, setName] = useState("")

    const create: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        interface JSBody {
            name: string
        }
        const json = await createService<JSBody>("/api/category", { name })

        setName("")
        setCats([...cats, json])
    }

    const deleteItem = async (event: { currentTarget: { id: string } }) => {
        const json = await deleteService(
            "/api/category",
            event.currentTarget.id
        )

        setCats(cats.filter(cat => cat.id !== json.id))
    }

    return (
        <div>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Categories CRUD</h1>

                <form onSubmit={create}>
                    <label>
                        name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input type="submit" />
                    </label>
                </form>

                <ul>
                    {cats.map((category, index) => (
                        <li key={category.id}>
                            <button id={category.id} onClick={deleteItem}>
                                X {index}
                            </button>
                            {category.name}
                        </li>
                    ))}
                </ul>

                <ItemListWithDelete list={cats} setList={setCats} />
            </main>
        </div>
    )
}

export default Categories
