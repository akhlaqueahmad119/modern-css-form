
import React from 'react';

export default function UserForm({
  handleChange,
  value,
  handleSubmit,
}) {
  const gender = ['Male', 'Female'];
  const languages = ['Hindi', 'English', 'Urdu'];

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h1>Create Your Profile</h1>
        <p>Enter your details to get started</p>
      </div>

      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Enter your name"
          onChange={handleChange}
          value={value.fullname}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={value.email}
          required
        />
      </div>

      <div className="form-group">
        <span className="group-title">Select Gender</span>

        <div className="options-container">
          {gender.map((item) => (
            <label className="option-card" key={item}>
              <input
                type="radio"
                name="gender"
                value={item}
                checked={value.gender === item}
                onChange={handleChange}
                required
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <span className="group-title">Languages You Know</span>

        <div className="options-container">
          {languages.map((item) => (
            <label className="option-card" key={item}>
              <input
                type="checkbox"
                name="languages"
                value={item}
                checked={value.languages.includes(item)}
                onChange={handleChange}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="submit-btn" type="submit">
        Create Profile <span>→</span>
      </button>
    </form>
  );
}
