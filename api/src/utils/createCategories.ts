import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const categorys = [
    { "name": "poesía" },
    { "name": "cuentos" },
    { "name": "teatro" },
    { "name": "Danza" },
    { "name": "Escultura" },
    { "name": "Música" },
    { "name": "Pintura" },
    { "name": "Fotografía" },
    { "name": "baile " },
    { "name": "canto" },
    { "name": "stand-up" },
    { "name": "mimo" },
    { "name": "diversion infantil" }
]

export const createCategories = async () => {
    const categorysDb = await prisma.categorias.findMany()
    try {
        if (!categorysDb.length) {
            categorys.map(async (ele: { name: string; }) => {
                await prisma.categorias.create({
                    data: {
                        name: ele.name,
                        
                    }
                })
            })
        }
    } catch (error) {
        return error
    }
}