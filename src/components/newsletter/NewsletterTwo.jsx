import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { subscribeNewsLetter } from '../../Util/http';

const NewsletterTwo = () => {

  const inputRef = useRef();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const { mutate, isSuccess , error: failed, isError} = useMutation({
    mutationFn: (email) => {
      subscribeNewsLetter(email)
    },
    onSuccess: () => {
      setEmail('')
    }
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError(inputRef.current.validationMessage);
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputRef.current.value === ''){
      inputRef.current.style.borderBottomColor = '#fa4529'; 
    } else{
      inputRef.current.style.borderBottomColor = '#00000026'; 
      mutate(email);
    }
  };
  
  return (
    <form className="ptf-subscribe-form ptf-subscribe-form--large">
      <div className="ptf-form-group">
        <i className="lnil lnil-envelope-alt"></i>
        <input 
          type="email" 
          placeholder="Email Address" 
          ref={inputRef}
          value={email}
          onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Subscribe</button>
      </div>
      {error && <span className="text-danger">{error}</span>}
      {isError ? 
          (<div class="alert alert-danger d-flex align-items-center" role="alert">
           {failed.message}
          </div>) 
        : null}
      {isSuccess ? 
          (<div class="alert alert-success d-flex align-items-center" role="alert">
          Success
        </div>) 
        : null}
      </form>
  );
};

export default NewsletterTwo;
