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
                name: "My new category coco",
            },
        })

        console.log(createdCategory.name)

        res.status(200).json(createdCategory)
    }

    if (req.method === "DELETE") {
        const deleteCategory = await prisma.category.delete({
            where: {
                id: req.body.id,
            },
        })

        console.log(deleteCategory)

        res.status(200).json(deleteCategory)
    }
}
