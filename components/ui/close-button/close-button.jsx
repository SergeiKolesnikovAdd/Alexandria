import { Close } from 'components';
import React from 'react';
import { ButtonWrapper } from "./close-button.style";

export const CloseButton = ({...props}) => {
    return (
        <ButtonWrapper {...props}>
            <Close/>
        </ButtonWrapper>
    );
};
