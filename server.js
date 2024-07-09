import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

app.get('/clientes/:id', async(req, res) => {
    const clientes = await prisma.clientes.findUnique({
        where: {
          id: req.params.id,
        },
        select: {
            nome:true,
            cpf: true,
            email:true,
            telefone: true
        },
      })

    res.status(200).json(clientes)
})
  
app.post('/clientes', async(req, res) => {
    console.log(req.body)
    await prisma.clientes.create({
        data: {
            nome:req.body.nome,
            cpf:req.body.cpf,
            email:req.body.email,  
            telefone:req.body.telefone
        }
    })
    res.status(201).json(req.body)
})

app.get('/clientes', async(req, res) => {
    const clientes = await prisma.clientes.findMany()

    res.status(200).json(clientes)
})

app.put('/clientes/:id', async(req, res) => {
    const { id } = req.params
    
    await prisma.clientes.update({
        where: {
            id:(id)
        },
        data: {
            nome:req.body.nome,
            cpf:req.body.cpf,
            email:req.body.email,  
            telefone:req.body.telefone
        }
    })
    res.status(201).json(req.body)
   
})

app.post('/empresas', async(req, res) => {
    console.log(req.body)
    await prisma.empresas.create({
        data: {
            nome:req.body.nome,
            endereco:req.body.endereco,  
            telefone:req.body.telefone
        }
    })
    res.status(201).json(req.body)
})

app.get('/empresas', async(req, res) => {
    const empresas = await prisma.empresas.findMany()

    res.status(200).json(empresas)
})
app.get('/empresas/:id', async(req, res) => {
    const empresas = await prisma.empresas.findUnique({
        where: {
          id: req.params.id,
        },
        select: {
            nome:true,
            endereco: true,
            telefone: true
        },
      })

    res.status(200).json(empresas)
})
app.put('/empresas/:id', async(req, res) => {
    
    await prisma.empresas.update({
        where: {
            id:req.params.id
        },
        data: {
            nome:req.body.nome,
            endereco:req.body.endereco,  
            telefone:req.body.telefone
        }
    })
    res.status(201).json(req.body)
})

app.post('/funcionarios', async(req, res) => {
    console.log(req.body)
    await prisma.funcionarios.create({
        data: {
            nome:req.body.nome,
            cpf:req.body.cpf,  
        
        }
    })
    res.status(201).json(req.body)
})

app.get('/funcionarios', async(req, res) => {
    const funcionarios = await prisma.funcionarios.findMany()

    res.status(200).json(funcionarios)
})
app.get('/funcionarios/:id', async(req, res) => {
    const funcionario = await prisma.funcionarios.findUnique({
        where: {
          id: req.params.id,
        },
        select: {
            nome:true,
            cpf: true
        },
      })

    res.status(200).json(funcionario)
})
app.put('/funcionarios/:id', async(req, res) => {
    
    await prisma.funcionarios.update({
        where: {
            id:req.params.id
        },
        data: {
            nome:req.body.nome,
            cpf:req.body.cpf,  
        }
    })
    res.status(201).json(req.body)
})
app.listen(3000)