import type { NextPage } from "next"
import Head from "next/head"
import { PrismaClient, Category } from "@prisma/client"
import { MouseEvent } from "react"
const prisma = new PrismaClient()

export const getServerSideProps = async () => {
    const categories: Category[] = await prisma.category.findMany()

    return { props: { categories } }
}

function create() {
    console.log("POST REQUEST TO /api/category")

    const newCategory = { name: "coco" }

    fetch("/api/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
    })
}
const deleteItem = (event: { currentTarget: { id: string } }) => {
    const { id } = event.currentTarget
    console.log("handleDelete", id)

    fetch("/api/category", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    })
}

interface Props {
    categories: Category[]
}

const Categories: NextPage<Props> = ({ categories }) => {
    return (
        <div>
            <Head>
                <title>Categories</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Categories CRUD</h1>

                <button onClick={create}>Create</button>

                <ul>
                    {categories.map((category, index) => (
                        <li key={category.id}>
                            <button id={category.id} onClick={deleteItem}>
                                X {index}
                            </button>
                            {category.name}
                        </li>
                    ))}
                </ul>

                <pre>{JSON.stringify(categories)}</pre>
            </main>
        </div>
    )
}

export default Categories
