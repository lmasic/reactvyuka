import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink end to="/">Homepage</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Počitadlo</NavLink>
      </li>
      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
      <li>
        <NavLink to="/words">Words</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
