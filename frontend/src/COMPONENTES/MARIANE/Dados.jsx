import ResponsavelService from "../../SERVICES/responsavelService";

import "./Dados.css";

import React, { useState, useEffect } from "react";

const responsavelService = new ResponsavelService();

function Dados({ handleEdit }) {
  const [responsavel, setResponsavel] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  const carregaResponsavel = async () => {
    try {
      const dados = await responsavelService.getAllResponsavel();
      setResponsavel(dados);
    } catch (error) {
      console.error("Erro ao carregar Responsável", error);
    }
  };

  useEffect(() => {
    carregaResponsavel();
  }, []);

  const handleDelete = async (cpf) => {
    await responsavelService.deleteResponsavel(cpf);
    await carregaResponsavel();
  };

  const handleFiltrar = async () => {
    try {
      console.log("Entrada de Pesquisa:", searchInput);

      if (!searchInput) {
        console.log(
          "Nenhuma entrada de pesquisa. Carregando todos os responsáveis."
        );
        await carregaResponsavel();
        return;
      }

      const responsavelFiltrados = await responsavelService.filtrar({
        nome: searchInput,
      });

      if (responsavelFiltrados.length === 0) {
        setError(
          "Responsável não encontrado. Verifique o nome e tente novamente."
        );
        setTimeout(() => setError(null), 5000);
      } else {
        setResponsavel(responsavelFiltrados);
        setError(null);
      }
    } catch (error) {
      console.error("Erro ao filtrar responsável:", error);
      setError("Erro ao filtrar responsável. Tente novamente mais tarde.");
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleRestaurarTabela = () => {
    carregaResponsavel();
  };

  return (
    <div>
      <div className="row mt-5 row-aligned">
        <div className="col-md-6">
          <div className="form-group borda-form">
            <label htmlFor="pesquisar"><i className="bi bi-search"></i> Pesquisar:</label>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Informe o nome do Responsável"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="nome"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 button-container">
          <button
            className="btn btn-primary btn-gradient mr-2"
            type="button"
            onClick={handleFiltrar}
          >
            Pesquisar
          </button>
          <button
            className="btn btn-primary btn-gradient"
            type="button"
            onClick={handleRestaurarTabela}
          >
            Restaurar Tabela
          </button>
        </div>
      </div>

      <div>
        {error && (
        <div className="alert alert-danger ml-4" role="alert">
          {error}
        </div>
      )}
      </div>

      <table className="table table-hover">
        <thead className="azul">
          <tr>
            <th scope="col">CPF</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">RG</th>
            <th scope="col">Telefone</th>
            <th scope="col">Email</th>
            <th scope="col">Editar</th>
            <th scope="col">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {responsavel.map((resp) => (
            <tr key={resp.cpf}>
              <th scope="row">{resp.cpf}</th>
              <td className="texto">{resp.nome}</td>
              <td className="texto">{resp.sobrenome}</td>
              <td className="texto">{resp.rg}</td>
              <td className="texto">{resp.telefone}</td>
              <td className="texto">{resp.email}</td>
              <td>
                <div className="centraliza">
                  <button
                    className="btn btn-primary m-2"
                    type="button"
                    onClick={() => handleEdit(resp)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
              <td>
                <div className="centraliza">
                  <button
                    type="button"
                    onClick={() => handleDelete(resp.cpf)}
                    className="btn btn-danger m-2"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dados;
