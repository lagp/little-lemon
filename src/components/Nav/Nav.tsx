function NavComponent() {
  return (
    <nav>
      <img src={require('../../img/Logo.svg').default} alt="Logo" />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  );
}

export const Nav = NavComponent