import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {SubmitContactUs} from '../Util/http';
import { useMutation } from '@tanstack/react-query';

const ContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // company: Yup.string().required("Company name is required"),
    message: Yup.string().required("Please, write your project goal."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    mobile: Yup.string().required("Phone Number is required")
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const {mutate, isError, error, isSuccess } = useMutation({
    mutationFn: SubmitContactUs
  });

  function onSubmit(data, e) {
    // display form data on success
    mutate(JSON.stringify(data));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">Full Name</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}
      <div className="ptf-form-group">
        <label data-number="02">Email Address</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>

      <div className="ptf-form-group">
        <label data-number="03">Phone Number</label>
        <input
          type="number"
          name="mobile"
          {...register("mobile")}
          className={`${errors.mobile ? "is-invalid" : ""}`}
        />
        {errors.mobile && (
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        )}
      </div>

      <div className="ptf-form-group" style={{
        display: 'none'
      }}>
        <label data-number="04">Company</label>
        <input
          type="text"
          name="company"
          {...register("company")}
          className={`${errors.company ? "is-invalid" : ""}`}
        />
        {errors.company && (
          <div className="invalid-feedback">{errors.company?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="05">Message</label>
        <textarea
          type="text"
          name="message"
          {...register("message")}
          className={`${errors.message ? "is-invalid" : ""}`}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button className="ptf-submit-button">
       submit 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {isError ? 
          (<div class="alert alert-danger d-flex align-items-center" role="alert">
           {error.message}
          </div>) 
        : null}
      {isSuccess ? 
          (<div class="alert alert-success d-flex align-items-center" role="alert">
          Your Message Sent Successfully
        </div>) 
        : null}
    </form>
  );
};

export default ContactForm;
