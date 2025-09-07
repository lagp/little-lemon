function FooterComponent() {
  return (
    <footer className="container">
      <img src={require('../../img/Logo.svg').default} alt="Logo" className="logo" />
      <div>
        <h2>Doormat<br />Navigation</h2>
        <ul className="footer-menu">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Address</p>
        <p>Phone number</p>
        <p>email</p>
      </div>
      <div>
        <h2>Social Media Links</h2>
        <p>Address</p>
        <p>Phone number</p>
        <p>email</p>
      </div>
    </footer>
  );
}

export const Footer = FooterComponent;