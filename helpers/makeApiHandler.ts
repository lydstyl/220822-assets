import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

export interface ApiHandlerOptions {
    modelName: string
    modelDatas: string[]
}

export default function makeApiHandler<ModelType>(options: ApiHandlerOptions) {
    const prisma = new PrismaClient()
    const { modelName, modelDatas } = options

    const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<ModelType>
    ) => {
        console.log(`/api/${modelName} handler`, req.method, req.body)
        const model = prisma[modelName]

        if (req.method === "GET") {
            const readedRecords = await model.findMany()

            res.status(200).json(readedRecords)
        }
        if (req.method === "POST") {
            const data = {}
            modelDatas.forEach((modelData: string) => {
                data[modelData] = req.body[modelData]
            })

            const createdRecord: ModelType = await model.create({
                data,
            })
            res.status(200).json(createdRecord)
        }

        if (req.method === "DELETE") {
            const deletedRecord = await model.delete({
                where: {
                    id: req.body.id,
                },
            })

            res.status(200).json(deletedRecord)
        }
    }

    return handler
}
