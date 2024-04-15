import React from 'react';

const Footer = () => {
  return (
    <footer  style={{ backgroundColor: '#061522', color: '#fff', padding: '20px', textAlign: 'center', display:"flex", alignItems:"center", justifyContent:"space-around"}}>
      <div>
        <p>&copy; 2024 WageIn. All rights reserved.</p>
        <p>Contact us: info@wagein.com</p>
      </div>
      <div>
        <p>Address: 123 Street, City, Country</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div>
        <p>Follow us:</p>
        <div style={{display:"flex", justifyContent:"space-around"}}>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
