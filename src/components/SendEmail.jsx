import React, { useState, useRef } from "react";
import styles from "./SendEmail.module.css";
import emailjs from "@emailjs/browser";
import BlueButton from "./ui/BlueButton";
import toast from "react-hot-toast";

export default function SendEmail() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    check &&
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
            e.target.reset();
            toast.success("성공적으로 전송되었습니다!", {
              style: {
                maxWidth: "1000px",
                width: "300px",
                fontSize: "20px",
              },
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("전송에 실패하였습니다. 다시 시도해주시기 바랍니다.", {
              style: {
                maxWidth: "1000px",
                width: "530px",
                fontSize: "20px",
              },
            });
          }
        );
  };

  const handleChange = (e) => {
    setCheck(e.target.checked);
  };

  const [check, setCheck] = useState(false);

  // console.log(check);

  return (
    <section>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <label htmlFor='name'>Name :</label>
            <input
              className={styles.input_text}
              type='text'
              placeholder='성함을 입력해주세요'
              name='user_name'
              required
              id='name'
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor='Email'>Email :</label>
            <input
              className={styles.input_text}
              type='email'
              placeholder='회신 받으실 이메일 주소를 입력해주세요'
              name='user_email'
              required
              id='email'
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor='subject'>Subject :</label>
            <input
              className={styles.input_text}
              type='text'
              placeholder='제목을 입력해주세요'
              name='subject'
              required
              id='subject'
            />
          </div>
          <span>
            본인은 개인정보 보호법 제15조에 의거하여 본인의 개인정보(이메일)를
            제공할 것을 동의합니다.
          </span>

          <div className={styles.agree}>
            개인정보 수집 내용에 동의합니다.
            <input
              type='checkbox'
              className={styles.input_checkbox}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='내용을 입력해주세요'
          ></textarea>
          <div className={styles.button_container}>
            <BlueButton text={"Send Mail"} check={check} />
          </div>
        </form>
      </div>
    </section>
  );
}
