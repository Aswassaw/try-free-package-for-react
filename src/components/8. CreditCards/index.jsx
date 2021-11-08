import React, { useState } from "react";
import RCreditCards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCards = () => {
  const [creditCard, setCreditCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [focus, setFocus] = useState("");

  const onChangehandler = (e) => {
    setCreditCard({
      ...creditCard,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ margin: "50px" }}>
      <RCreditCards {...creditCard} focused={focus} />
      <br />
      <form>
        <input
          type='tel'
          name='number'
          placeholder='Card Number'
          value={creditCard.number}
          onChange={onChangehandler}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={creditCard.name}
          onChange={onChangehandler}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type='text'
          name='expiry'
          placeholder='MM/YY Expiry'
          value={creditCard.expiry}
          onChange={onChangehandler}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={creditCard.cvc}
          onChange={onChangehandler}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
};

export default CreditCards;
