import React from 'react';

const RenderField = ({ input, label,placeholder, type, meta: { touched, error, warning }, className, labelClass}) => (
  <div className="register-form-field-wrap">
      <label className={labelClass}>{label}</label>
      <div>
          <input {...input} className={className} placeholder={placeholder} type={type} />
          {touched && ((error && <div>{error}</div>))}
      </div>
  </div>
);




export default RenderField;
