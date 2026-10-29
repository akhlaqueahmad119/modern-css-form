
import React from 'react';
import './style.css';
import UserForm from './UserForm';

export default function App() {
  const [value, setValue] = React.useState({
    fullname: '',
    email: '',
    gender: '',
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value: inputValue, type, checked } = e.target;

    setValue((prev) => {
      if (type === 'checkbox') {
        return {
          ...prev,
          languages: checked
            ? [...prev.languages, inputValue]
            : prev.languages.filter((item) => item !== inputValue),
        };
      }

      return {
        ...prev,
        [name]: inputValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    alert('Form submitted successfully!');
  };

  return (
    <div className="page-container">
      <UserForm
        handleChange={handleChange}
        value={value}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
