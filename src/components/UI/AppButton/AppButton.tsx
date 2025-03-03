interface IAppButtonProps {
  buttonText: string;
  isDisabled: boolean;
  buttonClick?: () => void;
}

export const AppButton = ({
  buttonText,
  buttonClick,
  isDisabled,
}: IAppButtonProps) => {
  return (
    <button disabled={isDisabled} onClick={buttonClick}>
      {buttonText}
    </button>
  );
};
