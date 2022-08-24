// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

type Data = {
    category: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const createdCategory = await prisma.category.create({
        data: {
            name: "My new category coco",
        },
    })

    console.log(createdCategory)

    res.status(200).json(createdCategory)
}
