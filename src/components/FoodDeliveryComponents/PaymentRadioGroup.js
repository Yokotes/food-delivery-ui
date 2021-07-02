import RadioItem from "../RadioGroup/RadioItem";
import RadioGroup from "../RadioGroup/RadioGroup";
import styles from "./PaymentRadioGroup.module.css";
import bankImg from "./bank-img.svg";
import cardImg from "./card-img.svg";
import paypalImg from "./paypal-img.svg";

const PaymentRadioGroup = () => {
  return (
    <RadioGroup>
      <RadioItem
        content={
          <div className={styles.container}>
            <img
              src={cardImg}
              alt="Card"
            />
            <span>Card</span>
          </div>
        }
      />
      <RadioItem
        content={
          <div className={styles.container}>
            <img
              src={bankImg}
              alt="Bank"
            />
            <span>Bank account</span>
          </div>
        }
      />
      <RadioItem
        content={
          <div className={styles.container}>
            <img
              src={paypalImg}
              alt="Paypal"
            />
            <span>Paypal</span>
          </div>
        }
      />
    </RadioGroup>
  )
}

export default PaymentRadioGroup;