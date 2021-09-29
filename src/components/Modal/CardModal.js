import React, { useState } from "react";
import { CardModalContainer } from "../../styles/Modal/SyledModal.styled";
import { StyledPara } from "../../styles/utils/Paragraph.styled";

const CardModal = ({ name, title, span, price, text }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);
  return (
    <CardModalContainer>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={name}>
        {title} {span}
      </label>
      {price !== undefined && (
        <span>
          <strong>{price}</strong> left
        </span>
      )}
      <StyledPara>{text}</StyledPara>
    </CardModalContainer>
  );
};

export default CardModal;
