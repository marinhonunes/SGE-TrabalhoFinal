const express = require('express')
const cors = require('cors')
const app = express()
const porta = 3001;
app.use(express.json());

app.use(cors({origin:'http://localhost:3000',credentials:true}))
const funcionarioRoutes = require("./routes/FuncionarioRoutes.js");
app.use("/funcionarios", funcionarioRoutes);
const responsavelRoutes = require('./Routes/responsavelRoutes')
app.use('/responsavel',responsavelRoutes)
const alunoRoutes = require('./routes/alunoRoutes')
app.use('/aluno',alunoRoutes);



app.listen(porta,()=>{
    console.log("Servidor escutando na porta:",porta)
})