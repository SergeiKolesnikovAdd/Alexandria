import {
  FormModalInner,
  ContentSection,
  ClsButton,
  ContentWrapper,
  Title,
  Subtitle,
} from "./gratitude-modal.style";
import { H2, Modal } from "components";
import { colors } from "styles";
import { Caption } from "components";

export const GratitudeModal = ({ isGratitude, setIsGratitude, ...props }) => {
  return (
    <Modal setOpen={setIsGratitude} isOpen={isGratitude}>
      <FormModalInner
        onClick={() => {
          setIsGratitude(false);
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
              setIsGratitude(false);
            }}
          />
          <ContentWrapper>
            <Title>
              <H2>Благодарим за обращение в Alexandrina!</H2>
            </Title>
            <Subtitle>
              <Caption mt="lg">
                Мы ответим на Ваш запрос
                <br />в течение 24 часов
              </Caption>
            </Subtitle>
          </ContentWrapper>
        </ContentSection>
      </FormModalInner>
    </Modal>
  );
};
