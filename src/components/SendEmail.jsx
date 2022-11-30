import React, { useRef } from "react";
import styles from "./SendEmail.module.css";
import emailjs from "@emailjs/browser";

export default function SendEmail() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_byb59ng",
        "template_mrlqdno",
        form.current,
        "WDUhDce-Kk73f-92C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            placeholder='성함을 입력해주세요'
            name='user_name'
            required
            id='name'
          />
          <label htmlFor='Email'>Email : </label>
          <input
            type='email'
            placeholder='회신 받으실 이메일 주소를 입력해주세요'
            name='user_email'
            required
            id='email'
          />
          <label htmlFor='subject'>subject :</label>
          <input
            type='text'
            placeholder='제목을 입력해주세요'
            name='subject'
            required
            id='subject'
          />
          <textarea name='message' cols='30' rows='10'></textarea>
          <button type='submit' className={styles.submitBtn}>
            send Message
          </button>
        </form>
      </div>
    </section>
  );
}
