const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.testDB = async (req, res) => {
    res.status(200).json({usuario: "hola makito"});
    const osoNuevo = await prisma.oso.create({
      data: {
        tipo: "pardo"
      }
    })
    const allPandas = await prisma.oso.findMany()
    console.log(allPandas)  
};
  