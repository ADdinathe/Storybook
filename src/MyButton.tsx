import React, {HTMLAttributes} from 'react';
import styled, {css} from "styled-components";

export interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** текст для кнопки */
    children?: React.ReactNode;
    /** 2 возможных варианта отображения */
    variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`

  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 16px;

  ${({variant = 'primary'}) => variant == 'primary' ? css`
    background: gray;
  border: solid 2px black;`
          : css`
    background: aqua;
    border: solid 2px white;
  `}

`;

/** Тут можно добалять комменты */
export const MyButton: React.FC<MyButtonProps> = ({children, variant= 'primary', ...props}: MyButtonProps) => {
    return (
        <StyledButton variant={variant} {...props}>
            {children || `default text`}
        </StyledButton>
    )
}