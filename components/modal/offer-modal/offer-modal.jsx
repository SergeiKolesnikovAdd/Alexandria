import { FormModal } from "components";
import { Caption, H3, Modal, Text } from "components";
import { useEffect, useState } from "react";
import { useNoScroll } from "utils";
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
  id,
  formName,
  modalTitle,
  setVisible,
  setOpenInter,
  ...props
}) => {
  const [isOpenForm, setOpenForm] = useState(false);


  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <OfferModalInner
        onClick={() => {
          setOpen(false);
          setOpenInter(false)
        }}
        isOpenForm={isOpenForm}
      >
        <ContentSection
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ProductImage src={img} />
          <ClsButton
            mt="mdlg"
            mr="mdlg"
            onClick={() => {
              setOpen(false)
              setOpenInter(false);
            }}
          />
          <ContentWrapper>
            <Title mb="xsm">
              <H3 mr="mdsm">{title}</H3>
              <Icon src={icon} />
            </Title>
            <Caption>{subtitle}</Caption>
            <Description mt="lg">
              {/* <Heading>{headingMaintance}</Heading>
              <Text>{textMaintance}</Text> */}
              <Heading>{headingService}</Heading>
              <Text>{textService}</Text>
              <Heading>{headingMarketing}</Heading>
              <Text>{textMarketing}</Text>
            </Description>
            <StyledButtonLG
              onClick={() => {
                setOpenForm(true);
                setOpen(false);
                setOpenInter(false);
              }}
            >
              Начать работу
            </StyledButtonLG>
          </ContentWrapper>
        </ContentSection>
      </OfferModalInner>
      <FormModal
        formName={formName}
        tariff={id}
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </Modal>
  );
};
