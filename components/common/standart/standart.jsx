export const Standart = ({colorgrad, opacity,stopColor}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#22222220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient x2="0.35" y2="1">
        <stop offset="0%" stopColor="red" />
        <stop offset="30%" stopColor="green" />
        <stop offset="100%" stopColor="blue" />
      </linearGradient>
      <circle opacity={opacity} cx="8" cy="8" r="8" fill={colorgrad} />
    </svg>
  );
};
