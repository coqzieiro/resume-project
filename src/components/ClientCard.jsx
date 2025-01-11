import React from "react";
import "../styles/ClientCard.css";

// Importando as imagens dos clientes
import client1Image from "../images/cliente1.jpeg";
import client2Image from "../images/cliente2.jpeg";
import client3Image from "../images/cliente3.jpeg";

function ClientCard() {
  return (
    <div className="client-card">
      <p>Worked with more than 100 people</p>
      <div className="clients">
        <img src={client1Image} alt="Client 1" />
        <img src={client2Image} alt="Client 2" />
        <img src={client3Image} alt="Client 3" />
        <span>+100 Clients</span>
      </div>
    </div>
  );
}

export default ClientCard;