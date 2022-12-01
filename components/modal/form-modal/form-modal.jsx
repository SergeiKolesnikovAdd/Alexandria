import {
  FormModalInner,
  ContentSection,
  ClsButton,
  ContentWrapper,
  Title,
  CloseSection,
} from "./form-modal.style";
import { H2, Modal } from "components";
import { Form } from "./form";
import { colors } from "styles";
import { GratitudeModal } from "components";
import { useState } from "react";

export const FormModal = ({
  modalTitle,
  tariff,
  formName,
  isOpen,
  setOpen,
  setOpenInter,
  ...props
}) => {
  const [isGratitude, setIsGratitude] = useState(false);

  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <FormModalInner
        onClick={() => {
          setOpen(false);
        }}
      >
        <ContentSection
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ClsButton
            mt="mdlg"
            mr="mdlg"
            onClick={() => {
              setOpen(false);
            }}
          />
          <ContentWrapper>
            <Title mb="xsm">
              <H2 style={{ color: colors.black }} mb="mdlg" mt="xlg" mr="mdsm">
                {modalTitle}
              </H2>
            </Title>
            <Form
              tariff={tariff}
              formName={formName}
              setIsGratitude={setIsGratitude}
              setOpen={setOpen}
            />
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
      <GratitudeModal
        isGratitude={isGratitude}
        setIsGratitude={setIsGratitude}
      />
    </Modal>
  );
};
