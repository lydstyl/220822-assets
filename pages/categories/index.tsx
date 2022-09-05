import type { NextPage } from "next"
import Head from "next/head"
import { PrismaClient, Category } from "@prisma/client"
import { FormEventHandler, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { readService, createService } from "../../services"
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
    const { isLoading, error, data, isFetching } = useQuery(
        ["categories"],
        () => readService("/api/category")
    )

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

    if (error) return "An error has occurred: " + error.message

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

                <ItemListWithDelete list={cats} setList={setCats} />

                <h2>react query useQuery</h2>
                {isLoading && <p>Loading...</p>}

                <div>{isFetching ? "Updating..." : ""}</div>
                <ReactQueryDevtools initialIsOpen />

                <ul>
                    {data.map((item, index) => (
                        <li key={item.id}>
                            <button id={item.id}>X {index}</button>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Categories
