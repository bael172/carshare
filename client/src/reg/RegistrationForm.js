import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../index.css'


function RegistrationForm() {
  const [formData, setFormData] = useState({
    surName: '',
    firstName: '',
    lastName: '',
    hasLastName: true,
    phone: '',
    email: '',
    address: '',
    login: '',
    password: '',
    confirmPassword: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    agreements: {
      personalData: false,
      terms: false,
      age: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container className="registration-container">
      <h1 className="brand-title mb-3">
        <span className="brand-title-green">Эх</span>{" "}
        <span className="brand-title-purple">прокачу!</span>
      </h1>

      <Form className="registration-form px-12" onSubmit={handleSubmit}>
        <h2 className="form-title mt-1 mb-3">Регистрация</h2>
        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Фамилия</Form.Label>
          <Form.Control
            type="text"
            name="surName"
            value={formData.surName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Имя</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label>Отчество</Form.Label>
          <div className="flex items-center">
            <Form.Control 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            disabled={!formData.hasLastName}></Form.Control>
            <Form.Check 
            type="checkbox"
            label="отсутствует"
            checked={!formData.hasLastName}
            onChange={(e)=>setFormData(prev=>({
              ...prev,
              hasLastName: !e.target.checked
            }))}></Form.Check>
            </div>
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Телефон</Form.Label>
          <div className="phone-input-container">
            <div className="country-code">
              <span className="flag-icon">🇷🇺</span>
              <span>+7</span>
            </div>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="123-456-78-90"
              className="phone-input"
            />
          </div>
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@mail.ru"
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Адрес</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="г.Москва, ул.Тверская д.34 к.6 кв.75"
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            type="text"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Пароль</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="input mb-3">
          <Form.Label className="required-field">Повторите пароль</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="date mb-3">
          <Form.Label className="required-field">Дата рождения</Form.Label>
          <div className="date-select-container">
            <Form.Select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleInputChange}
              className="date-select"
            >
              <option value="">Месяц</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(2000, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </Form.Select>

            <Form.Select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleInputChange}
              className="date-select"
            >
              <option value="">День</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>

            <Form.Select
              name="birthYear"
              value={formData.birthYear}
              onChange={handleInputChange}
              className="date-select"
            >
              <option value="">Год</option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </Form.Select>
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="personalData"
            label="Согласие на обработку персональных данных"
            checked={formData.agreements.personalData}
            onChange={handleCheckboxChange}
            className="checkbox-label"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="terms"
            label={
              <span>
                Согласие с <a href="#" className="link-text">Условиями Пользования</a> и{' '}
                <a href="#" className="link-text">Политикой Конфидециальности</a>
              </span>
            }
            checked={formData.agreements.terms}
            onChange={handleCheckboxChange}
            className="checkbox-label"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Check
            type="checkbox"
            name="age"
            label="Я подтверждаю что являюсь гражданином России и мне исполнилось 18 лет"
            checked={formData.agreements.age}
            onChange={handleCheckboxChange}
            className="checkbox-label"
          />
        </Form.Group>

        <div className="submit-container">
          <div className="login-text">
            Уже есть аккаунт? <a href="#" className="link-text">Войти</a>
          </div>
          <Button variant="success" type="submit" className="submit-button">
            Продолжить
          </Button>
        </div>
        
      </Form>
    </Container>
  );
}

export default RegistrationForm;