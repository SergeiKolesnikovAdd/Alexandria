import { FormModalInner, ContentSection, ClsButton, ContentWrapper, Title } from "./questions-modal.style";
import { H2, Modal } from "components";
import { Form } from "./questions-modal-form"
import { colors } from "styles";

export const QuestionsFormModal = ({
  img,
  color,
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
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <FormModalInner>
        <ContentSection>
          <ClsButton mt="mdlg" mr="mdlg" onClick={() => setOpen(false)} />
          <ContentWrapper>
            <Title mb="xsm">
              <H2 style={{color: colors.black}} mb="mdlg" mt="xlg" mr="mdsm">
              Задать вопрос
              </H2>
            </Title>
            <Form />
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
    </Modal>
  );
};