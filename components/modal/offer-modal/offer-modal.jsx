import { FormModal } from "components";
import { Caption, H3, Modal, Text } from "components";
import { useState } from "react";
import { Standart } from "../../common";

import {
  ProductImage,
  OfferModalInner,
  Description,
  ContentWrapper,
  StyledButtonLG,
  Title,
  ContentSection,
  Heading,
  Icon,
  ClsButton,
} from "./offer-modal.style";

export const OfferModal = ({
  img,
  icon,
  headingMaintance,
  textMaintance,
  headingService,
  textService,
  headingMarketing,
  textMarketing,
  caption,
  title,
  subtitle,
  isOpen,
  setOpen,
  ...props
}) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <OfferModalInner isOpenForm={isOpenForm}>
        <ContentSection>
          <ProductImage src={img} />
          <ClsButton mt="mdlg" mr="mdlg" onClick={() => setOpen(false)} />
          <ContentWrapper>
            <Title mb="xsm">
              <H3 mr="mdsm">{title}</H3>
              <Icon src={icon} />
            </Title>
            <Caption>{subtitle}</Caption>
            <Description mt="lg">
              <Heading>{headingMaintance}</Heading>
              <Text>{textMaintance}</Text>
              <Heading>{headingService}</Heading>
              <Text>{textService}</Text>
              <Heading>{headingMarketing}</Heading>
              <Text>{textMarketing}</Text>
            </Description>
            <StyledButtonLG
              onClick={(e) => {
                setTitle(e.target.textContent);
                setOpenForm(true);
              }}>
              Начать работу
            </StyledButtonLG>
          </ContentWrapper>
        </ContentSection>
      </OfferModalInner>
      <FormModal title={modalTitle} setOpen={setOpenForm} isOpen={isOpenForm} />
    </Modal>
  );
};
