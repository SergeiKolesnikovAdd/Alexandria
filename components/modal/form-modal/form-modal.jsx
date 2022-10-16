import { FormModalInner, ContentSection, ClsButton, ContentWrapper, Title } from "./form-modal.style";
import { H2, Modal } from "components";
import { Form } from "./form"
import { colors } from "styles";

export const FormModal = ({ modalTitle, tariff, formName, isOpen, setOpen, ...props }) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <FormModalInner>
        <ContentSection>
          <ClsButton mt="mdlg" mr="mdlg" onClick={() => setOpen(false)} />
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
