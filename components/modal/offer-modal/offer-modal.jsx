import {Caption, H2, Modal, CloseButton, Text} from "components";

import {
  ProductImage,
  OfferModalInner,
  Description,
  ContentWrapper,
  StyledButtonLG,
  Title,
  ContentSection,
} from "./offer-modal.style";

export const OfferModal = ({ img, iconImg, text, caption, title, isOpen, setOpen, ...props }) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <OfferModalInner>
        <ContentSection>
          <ProductImage src={img} />
          <CloseButton mt="md" ml="md" onClick={() => setOpen(false)} />
          <ContentWrapper>
            <Title>
              <H2 mr="mdsm">{title}</H2>
              <img src={iconImg}  alt="sdf"/>
            </Title>
            <Description mt="mdsm">
              <Text style={{ width: "64vw" }}>{text}</Text>
              <Caption style={{ width: "25vw", opacity: "0.4" }}>
                {caption}
              </Caption>
            </Description>
          </ContentWrapper>
          <StyledButtonLG>Начать работу</StyledButtonLG>
        </ContentSection>
      </OfferModalInner>
    </Modal>
  );
};
