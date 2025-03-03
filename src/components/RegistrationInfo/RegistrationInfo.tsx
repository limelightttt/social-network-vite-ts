import { Link } from "react-router-dom";

interface IRegistrationInfoProps {
  path: string;
  textLogin: string;
  accountLogin: string;
  loginRegistration: string;
}

export const RegistrationInfo = ({
  path,
  textLogin,
  accountLogin,
  loginRegistration,
}: IRegistrationInfoProps) => {
  return (
    <div className="registration">
      <span>
      {accountLogin}<Link to={path}>{loginRegistration}</Link>
      </span>
      <p>{textLogin}</p>
      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </div>
  );
};
