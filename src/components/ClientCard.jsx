import React from "react";
import "../styles/ClientCard.css";

function ClientCard() {
  return (
    <div className="client-card">
      <p>Worked with more than 100 people</p>
      <div className="clients">
        <img src="/assets/images/client1.jpg" alt="Client 1" />
        <img src="/assets/images/client2.jpg" alt="Client 2" />
        <img src="/assets/images/client3.jpg" alt="Client 3" />
        <span>+100 Clients</span>
      </div>
    </div>
  );
}

export default ClientCard;