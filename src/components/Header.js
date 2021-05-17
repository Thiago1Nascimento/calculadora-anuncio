import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Calculadora Anúncio</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Anúncios Ativos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Criar Anúncio
        </NavLink>
      </div>
    </header>
  );
};

export default Header;