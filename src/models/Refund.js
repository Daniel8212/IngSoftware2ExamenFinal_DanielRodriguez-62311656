// src/models/Refund.js
export class Refund {
  constructor(data = {}) {
    // copiar propiedades desde data (id, title, amount, etc.)
    Object.assign(this, data);
    this.type = this.type || "refund";
  }

  // método que usan tus componentes (en MovementList usas getNetAmount)
  getNetAmount() {
    // ejemplo: refund suma (positivo)
    const amt = Number(this.amount) || 0;
    return Math.abs(amt);
  }

  // ayudas para la UI si las usan tus cards
  getColor() {
    return "#f59e0b";
  }

  getIcon() {
    return "↺";
  }
}

