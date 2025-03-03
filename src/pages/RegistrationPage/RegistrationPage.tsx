import "./RegistrationPage.scss";
import { Heading } from "../../components/UI/Heading/Heading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Header } from "../../components/UI/Header/Header";

export const RegistrationPage = () => {
  return (
    <div className="RegistrationPage">
      <Header />
      <Heading headingText="Регистрация" headingType="h1"/>
      <form action="#">
        <AppInput inputValue="" placeholder="Имя и фамилия" type="text"/>
        <AppInput inputValue="" placeholder="Номер телефона" type="tel"/>
        <AppInput inputValue="" placeholder="Пароль" type="password"/>
        <AppButton buttonText="Зарегистрироваться" isDisabled/>
      </form>
      <RegistrationInfo path="#" accountLogin="Уже есть аккаунт? " textLogin="Регистрация с помощью" loginRegistration="Войти"/>
    </div>
  );
};


export default RegistrationPage;