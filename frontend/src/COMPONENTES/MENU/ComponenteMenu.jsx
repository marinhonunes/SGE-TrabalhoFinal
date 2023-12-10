import './ComponenteMenu.css';
import sgeImage from './sge.png';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

function ComponenteMenu({ isMenuExpanded, setMenuExpanded }) {
    
    const [itemSelecionado, setItemSelecionado] = useState("/cadastro");

    const menuItems = [
        { name: "Cadastros", path: "/cadastro", iconClass: "bi bi-card-list" },
        { name: "Funcionários", path: "/cadastroFuncionarios", iconClass: "bi bi-person-badge-fill" },
        { name: "Responsáveis", path: "/cadastroResponsavel", iconClass: "bi bi-person-fill-add" },
        { name: "Alunos", path: "/cadastroAlunos", iconClass: "bi bi-backpack-fill" },
        { name: "Turmas", path: "/Criarturma", iconClass: "bi bi-people-fill" },
        { name: "Voltar", path: "/voltar", iconClass: "fas fa-arrow-left" }
    ];

    return (
        <div>
            <nav className={`sidebar ${isMenuExpanded ? 'expanded' : ''}`} 
                 onMouseEnter={() => setMenuExpanded(true)} 
                 onMouseLeave={() => setMenuExpanded(false)}>
                
                <div className="logo"></div>
                
                <ul className="menu">
                    {menuItems.map(item => (
                        <li key={item.path} 
                            className={itemSelecionado === item.path ? 'highlighted' : ''}
                            onClick={() => item.name !== "Voltar" && setItemSelecionado(item.path)}>
                            <NavLink to={item.path}>
                                <i className={item.iconClass}></i>
                                <span>{item.name}</span>
                            </NavLink>   
                        </li>
                    ))}
                </ul>
            </nav>

            <div id='teste' className={isMenuExpanded ? 'expanded' : ''}>
                <div className="main--content">
                    <div className="header--wrapper">
                        <div className="header--title">
                            <img id="sgeImage" src={sgeImage} alt="Livro" className="header-icon" />
                            <h3> Sistema de Gerenciamento Escolar - SGE </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponenteMenu;
