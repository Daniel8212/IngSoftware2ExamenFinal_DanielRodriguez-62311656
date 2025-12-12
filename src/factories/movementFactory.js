import Deposit from "../models/Deposit";
import Withdrawal from "../models/Withdrawal";
import Transfer from "../models/Transfer";
import Payment from "../models/Payment";
import Refund from "../models/Refund";
import Chargeback from "../models/Chargeback";

export function createMovement(raw) {
  switch (raw.type) {
    case "DEPOSIT":
      return new Deposit(raw.id, raw.title, raw.amount);

    case "WITHDRAWAL":
      return new Withdrawal(raw.id, raw.title, raw.amount);

    case "TRANSFER":
      return new Transfer(raw.id, raw.title, raw.amount);

    case "PAYMENT":
      return new Payment(raw.id, raw.title, raw.amount);

    case "REFUND":
      return new Refund(raw.id, raw.title, raw.amount);

    case "CHARGEBACK":
      return new Chargeback(raw.id, raw.title, raw.amount);

    default:
      return new Withdrawal(raw.id, raw.title, raw.amount);
  }
}
