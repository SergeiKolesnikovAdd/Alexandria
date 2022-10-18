import {
  FormModalInner,
  ContentSection,
  ClsButton,
  ContentWrapper,
  Title,
} from "./form-modal.style";
import { H2, Modal } from "components";
import { Form } from "./form";
import { colors } from "styles";

export const FormModal = ({
  modalTitle,
  tariff,
  formName,
  isOpen,
  setOpen,
  setColored,
  ...props
}) => {
  const handleClose = () => {
    setOpen(false);
    setColored(false);
  };
  return (
    <Modal setOpen={setOpen} isOpen={isOpen} setColored={setColored}>
      <FormModalInner>
        <ContentSection>
          <ClsButton mt="mdlg" mr="mdlg" onClick={() => handleClose()} />
          <ContentWrapper>
            <Title mb="xsm">
              <H2 style={{ color: colors.black }} mb="mdlg" mt="xlg" mr="mdsm">
                {modalTitle}
              </H2>
            </Title>
            <Form tariff={tariff} formName={formName} />
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
    </Modal>
  );
};
