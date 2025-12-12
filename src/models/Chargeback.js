// src/models/Chargeback.js
export class Chargeback {
  constructor(data = {}) {
    Object.assign(this, data);
    this.type = this.type || "chargeback";
  }

  getNetAmount() {
    
    const amt = Number(this.amount) || 0;
    return -Math.abs(amt);
  }

  getColor() {
    return "#8b5cf6";
  }

  getIcon() {
    return "⛔";
  }
}
