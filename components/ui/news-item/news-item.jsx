import { Text, Caption, H3, } from "components";
import Link from "next/link";

import {
  ContentWrapper,
  PromoSection,
  Date,
  LinkRow,
  Dot,
  TabletDate,
  Overlay,
} from "./news-item.style";

export const NewsItem = ({ id, date, title1, title2, description, img, index, ...props }) => {
  return (
    <ContentWrapper {...props}>
      <PromoSection img={img}>
        <Date>{date}</Date>
        <LinkRow>
          <Link href="">
            <Caption>Публикации</Caption>
          </Link>
          <Dot />
          <Link href="">
            <Caption>Консультации</Caption>
          </Link>
          <Dot />
          <Link href="">
            <Caption>Новое</Caption>
          </Link>
        </LinkRow>
        <Overlay/>
      </PromoSection>
      <TabletDate>{date}</TabletDate>
      <H3 px="mdlg" mt="md">
        {title1}
        <br />
        {title2}
      </H3>
      <Text px="mdlg" mt="sm">{description}</Text>
    </ContentWrapper>
  );
};
