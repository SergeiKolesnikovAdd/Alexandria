import { WarningWrapper } from "./warning.style";

export const Warning = (props) => {
  return (
    <WarningWrapper>
<svg fill="none" viewBox="0 0 16 20">
  <circle cx="8" cy="10" r="8" fill="#F95B5B"/>
  <path fill="#fff" d="M7.2 11.7 6.8 8V5.2H9V8l-.4 3.7H7.2Zm1.5 3.1c-.2.3-.5.4-.8.4-.4 0-.6-.1-.9-.4-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8.3-.3.5-.4.9-.4.3 0 .6.1.8.4.2.2.4.5.4.8 0 .3-.2.6-.4.8Z"/>
</svg>
    </WarningWrapper>
  );
};
