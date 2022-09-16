import { LogoWrapper } from "./logo.style";

export const Logo = () => {
  return (
    <LogoWrapper>
      <svg fill="none" viewBox="0 0 64 64">
        <rect width="64" height="64" fill="#D17456" rx="24" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m32 16 5.6 5.6 16.8 16.8-5.6 5.6L32 27.2 15.2 44l-5.6-5.6L32 16Zm0 16.8-5.6 5.6L32 44l5.6-5.6-5.6-5.6Z"
          clipRule="evenodd"
        />
      </svg>
    </LogoWrapper>
  );
};
