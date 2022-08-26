// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Category } from "@prisma/client"
const prisma = new PrismaClient()

type Data = {
    category: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category>
) {
    console.log("/api/category handler", req.method, req.body)

    if (req.method === "POST") {
        const createdCategory: Category = await prisma.category.create({
            data: {
                name: req.body.name,
            },
        })

        console.log(createdCategory)
        res.status(200).json(createdCategory)
    }

    if (req.method === "DELETE") {
        const deletedCategory = await prisma.category.delete({
            where: {
                id: req.body.id,
            },
        })

        console.log(deletedCategory)
        res.status(200).json(deletedCategory)
    }
}
