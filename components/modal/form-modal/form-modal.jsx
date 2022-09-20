import { FormModalInner, ContentSection, ClsButton, ContentWrapper, Title } from "./form-modal.style";
import { H1, Modal } from "components";
import { Form } from "./form-modal";

export const FormModal = ({
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
              <H1 mr="mdsm">{title}</H1>
            </Title>
						<Form/>
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
    </Modal>
  );
};
