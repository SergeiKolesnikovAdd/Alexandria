import { Caption, H2, Text } from "components";
import { ContentWrapper, AdvantageWrapper, AdvantageItem } from "./about-end-text-block.style";

export const AdvantageSlide = () => {
  return (
    <ContentWrapper>
      <Text style="opacity:0.4;">Преимущества</Text>
      <H2>
        Почему выбирают
        <br />
        именно нас?
      </H2>
      <AdvantageWrapper>
        <AdvantageItem>
          <Text>
            Продвижение в международные
            <br />
            наукометрические и предметные базы данных
          </Text>
          <Caption>
            Составление подробного плана
            <br />
            продвижения журнала в базы данных с его
            <br />
            последующей реализацией.
          </Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text>
            Консультации и полное
            <br />
            сопровождение
          </Text>
          <Caption>
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
          </Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text>
            Экспертное редактирование,
            <br />
            перевод и подготовка научных
            <br />
            рукописей
          </Text>
          <Caption>
            Редактирование научных рукописей
            <br />
            экспертами международного уровня,
            <br />
            перевод и полная подготовка в публикации.
          </Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
        <AdvantageItem>
          <Text>Различные бизнес-модели</Text>
          <Caption>
            Подробные инструкции, воркшопы
            <br />
            и консультации помогут досконально
            <br />
            разобраться в процессе издательской
            <br /> 
            деятельности и повысят уровень
            <br /> 
            экспертности назначенной редакционной коллегии.
          </Caption>
          {/* TODO: IMG */}
        </AdvantageItem>
      </AdvantageWrapper>
    </ContentWrapper>
  );
};
