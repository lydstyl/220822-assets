import { Account } from "@prisma/client"
import makeApiHandler from "../../helpers/makeApiHandler"

export default makeApiHandler<Account>({
    modelName: "category",
    modelDatas: ["name"],
})
