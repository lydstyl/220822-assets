import { Category } from "@prisma/client"
import makeApiHandler from "../../helpers/makeApiHandler"

export default makeApiHandler<Category>({
    modelName: "category",
    modelDatas: ["name"],
})
