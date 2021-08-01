import React, { useState } from "react";
import Container from "@material-ui/core/Container";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.fullname} ----- phone number is${data.phone}--------my email is ${data.email}-------my data is  ${data.msg}`
    );
    console.log(
      `my name is ${data.fullname} ----- phone number is${data.phone}--------my email is ${data.email}-------my data is  ${data.msg}`
    );
  };
  return (
    <>
      <Container>
        <div className="contact_section">
          <h1>Contact Us</h1>
          <div className="form_div">
            <form
              className="contact_section_form"
              onSubmit={formSubmit}
              action=""
            >
              <label name="fullname">FullName</label>

              <input
                className="contact_fields"
                name="fullname"
                value={data.fullname}
                placeholder="Enter Name"
                type="text"
                onChange={inputEvent}
                autoComplete="off"
              />

              <label name="phone">Phone</label>

              <input
                className="contact_fields"
                name="phone"
                value={data.phone}
                onChange={inputEvent}
                placeholder="Enter Phone Number"
                type="number"
              />

              <label name="email">Email Address</label>

              <input
                className="contact_fields"
                name="email"
                onChange={inputEvent}
                placeholder="user@fmail.com"
                value={data.email}
                type="email"
              />
              <label name="msg">Message</label>

              <input
                className="contact_fields msg_field"
                name="msg"
                onChange={inputEvent}
                value={data.msg}
                type="text"
              />
            </form>
            <button className="control_button"> Submit Form</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
