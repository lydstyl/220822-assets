import type { NextPage } from "next"
import Head from "next/head"

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getServerSideProps = async ({ req }) => {
    const categories = await prisma.category.findMany()
    return { props: { categories } }
}

function create() {
    console.log("POST REQUEST TO /api/category")

    const newCategory = { name: "coco" }

    fetch("/api/category", {
        method: "POST",
        body: newCategory,
    })
}
const Categories: NextPage = ({ categories }) => {
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
                    {categories.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>

                <pre>{JSON.stringify(categories)}</pre>
            </main>
        </div>
    )
}

export default Categories
