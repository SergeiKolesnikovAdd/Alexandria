import { Caption, H2, Text } from "components";
import { ContentWrapper, AdvantageWrapper, AdvantageItem, StyledCaption, StyledH2, StyledText, } from "./advantage-slide.style";

export const AdvantageSlide = () => {
  return (
    <ContentWrapper>
      <StyledText style={{ opacity: 0.4 }}>Преимущества</StyledText>
      <StyledH2>
        Почему выбирают
        <br />
        именно нас?
      </StyledH2>
      <AdvantageWrapper>
        <AdvantageItem mr="mdsm">
          <StyledText>
            Продвижение в международные
            <br />
            наукометрические и предметные базы данных
          </StyledText>
          <StyledCaption>
            Составление подробного плана
            <br />
            продвижения журнала в базы данных с его
            <br />
            последующей реализацией.
          </StyledCaption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem mr="mdsm">
          <StyledText>
            Консультации и полное
            <br />
            сопровождение
          </StyledText>
          <StyledCaption>
            Подробные инструкции, воркшопы
            <br />
            и консультации помогут досконально
            <br />
            разобраться в процессе издательской
            <br />
            деятельности и повысят уровень
            <br />
            экспертности назначенной редакционной
            <br />
            коллегии.
          </StyledCaption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem mr="mdsm">
          <StyledText>
            Экспертное редактирование,
            <br />
            перевод и подготовка научных
            <br />
            рукописей
          </StyledText>
          <StyledCaption>
            Редактирование научных рукописей
            <br />
            экспертами международного уровня,
            <br />
            перевод и полная подготовка в публикации.
          </StyledCaption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <StyledText>Различные бизнес-модели</StyledText>
          <StyledCaption>
            Подробные инструкции, воркшопы
            <br />
            и консультации помогут досконально
            <br />
            разобраться в процессе издательской
            <br />
            деятельности и повысят уровень
            <br /> экспертности назначенной редакционной коллегии.
          </StyledCaption>
          {/* TODO: IMG */}
        </AdvantageItem>
      </AdvantageWrapper>
    </ContentWrapper>
  );
};
