import "./LoginPage.scss";
import { Heading } from "../../components/UI/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";


export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Авторизация" headingType="h1"/>
      <form action="#">
        <AppInput inputValue="" placeholder="Номер телефона" type="tel"/>
        <AppInput inputValue="" placeholder="Пароль" type="password"/>
        <AppButton buttonText="Войти" isDisabled/>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo path="#" accountLogin="У вас нет аккаунта? " textLogin="Войти с помощью" loginRegistration="Зарегистрироваться"/>
    </div>
  );
};
