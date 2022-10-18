import {
  FormModalInner,
  ContentSection,
  ClsButton,
  ContentWrapper,
  Title,
} from "./questions-modal.style";
import { H2, Modal } from "components";
import { Form } from "./questions-modal-form";
import { colors } from "styles";

export const QuestionsFormModal = ({
  title,
  isOpen,
  setOpen,
  setColored,
  ...props
}) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen} setColored={setColored}>
      <FormModalInner>
        <ContentSection>
          <ClsButton
            mt="mdlg"
            mr="mdlg"
            onClick={() => {
              setOpen(false);
              setColored(false);
            }}
          />
          <ContentWrapper>
            <Title mb="xsm">
              <H2 style={{ color: colors.black }} mb="mdlg" mt="xlg" mr="mdsm">
                {title}
              </H2>
            </Title>
            <Form />
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
    </Modal>
  );
};
