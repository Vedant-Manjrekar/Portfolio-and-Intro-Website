import React from "react";
import { Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const SERVICE_ID = "service_cfblkmf";
const TEMPLATE_ID = "template_d3zmux7";
const PUBLIC_KEY = "UvbaAW7-q9BLVMFyQ";

function Contact() {
  const form = useRef(null);
  const input = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    if (
      name.current.value &&
      email.current.value &&
      subject.current.value &&
      input.current.value
    ) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          console.log(name, email, subject, input);
          alert("Your message is sent successfully.");
          input.current.value = "";
          name.current.value = "";
          email.current.value = "";
          subject.current.value = "";
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Please fill all the details.");
    }
  };

  return (
    <>
      <Text
        fontSize={{ base: "12vw", md: "6vw" }}
        textAlign={{ base: "center", md: "left", lg: "left" }}
        className="projects_ contact_t"
        id="contact_tt"
        pl={{ base: "0", md: "10vw" }}
      >
        &lt; CONTACT me /&gt;
      </Text>

      <br />

      <form className="contact_container" ref={form} onSubmit={sendEmail}>
        <input
          ref={name}
          type="text"
          placeholder="Full name"
          className="inp_contact name"
          name="client_name"
        />
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="inp_contact email"
          name="email"
        />
        <input
          ref={subject}
          type="text"
          placeholder="Subject"
          name="subject"
          className="inp_contact subject"
        />
        <textarea
          ref={input}
          className="message txt_contact"
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        />
        <input type="submit" value="Send" className="inp_contact submit_cont" />
      </form>
    </>
  );
}

export default Contact;
