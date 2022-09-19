import { ButtonWrapper } from "./button-slider-right.style";




export const ButtonSliderRight = ({...props}) => (

  <ButtonWrapper {...props} >
  <svg fill="none" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="transparent" rx="24" />
    <path
      fill="#fff"
      d="M38.5 31.134a1 1 0 0 1 0 1.732l-8.351 4.822c-.78.45-1.71-.279-1.46-1.144l1.23-4.267a1 1 0 0 0 0-.554l-1.23-4.267c-.25-.865.68-1.594 1.46-1.143l8.351 4.821Z"
    />
  </svg>
</ButtonWrapper>
);
