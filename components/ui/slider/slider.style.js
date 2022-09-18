import styled from "@emotion/styled";
import { ButtonSlider } from "components";



export const SlideWrapper = styled.div`
  width: 720px;
  height: 720px;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 48px;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;



  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;
//   export const SlideNext = styled(ButtonSlider)`
//   position: absolute;
//   top: 50%;
//   right: 5%;
// `;

// export const SlidePrev = styled(ButtonSlider)`
//   position: absolute;
//   top: 50%;
//   left: 5%;
//   transform: rotate(180deg);
// `;
