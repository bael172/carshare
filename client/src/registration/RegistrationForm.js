import React, { useState } from 'react';
import InputField from './InputField';
import CheckboxItem from './CheckboxItem';
import DateSelect from './DateSelect';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: '',
    birthMonth: '',
    birthDay: '',
    birthYear: ''
  });

  const [agreements, setAgreements] = useState({
    personalData: false,
    terms: false,
    age: false
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleAgreementChange = (field) => (e) => {
    setAgreements(prev => ({ ...prev, [field]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex overflow-hidden flex-col px-3.5 pt-4 pb-8 mx-auto w-full bg-white max-w-[480px]">
      <div className="self-center text-2xl font-black text-black">
        <span className="text-green-600">Эх</span>{" "}
        <span className="text-purple-700">прокачу!</span>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col py-3 mt-3 bg-purple-950">
        <div className="self-center text-lg font-medium text-white max-sm:self-center">
          Регистрация
        </div>
        
        <div className="flex flex-col items-start px-4 mt-5 w-full">
          <InputField
            label="Фамилия"
            required={true}
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange('lastName')}
          />
          
          <InputField
            label="Имя"
            required={true}
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange('firstName')}
          />
          
          <InputField
            label="Отчество"
            id="middleName"
            value={formData.middleName}
            onChange={handleInputChange('middleName')}
          />

          <InputField
            label="Телефон"
            required={true}
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            placeholder="123-456-78-90"
          />

          <InputField
            label="Адрес электронной почты"
            required={true}
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="example@mail.ru"
          />

          <InputField
            label="Адрес фактического проживания"
            required={true}
            id="address"
            value={formData.address}
            onChange={handleInputChange('address')}
          />

          <InputField
            label="Придумайте логин для входа"
            id="username"
            value={formData.username}
            onChange={handleInputChange('username')}
          />

          <InputField
            label="Придумайте пароль для входа"
            required={true}
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange('password')}
          />

          <InputField
            label="Повторите пароль"
            required={true}
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
          />

          <DateSelect 
            label="Дата рождения"
            month={formData.birthMonth}
            day={formData.birthDay}
            year={formData.birthYear}
            onMonthChange={(value) => setFormData(prev => ({ ...prev, birthMonth: value }))}
            onDayChange={(value) => setFormData(prev => ({ ...prev, birthDay: value }))}
            onYearChange={(value) => setFormData(prev => ({ ...prev, birthYear: value }))}
          />

          <CheckboxItem
            label="Согласие на обработку персональных данных"
            checked={agreements.personalData}
            onChange={handleAgreementChange('personalData')}
          />
          
          <CheckboxItem
            label={<>
              Согласие с <span className="text-violet-400">Условиями Пользования</span> и{" "}
              <span className="text-violet-400">Политикой Конфидециальности</span>
            </>}
            checked={agreements.terms}
            onChange={handleAgreementChange('terms')}
          />
          
          <CheckboxItem
            label="Я подтверждаю что являюсь гражданином России и мне исполнилось 18 лет"
            checked={agreements.age}
            onChange={handleAgreementChange('age')}
          />

          <div className="flex gap-10 self-stretch mt-2.5 text-xs text-white">
            <div className="grow shrink my-auto w-[119px]">
              Уже есть аккаунт? <a href="#login" className="text-blue-700">Войти</a>
            </div>
            <button 
              type="submit" 
              className="px-8 py-2 whitespace-nowrap bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Продолжить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;