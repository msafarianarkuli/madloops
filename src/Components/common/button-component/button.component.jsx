export const Button = ({ children, classButton, onClick, ButtonType }) => (
  <button type={ButtonType} className={classButton} onClick={onClick}>
    {children}
  </button>
);
