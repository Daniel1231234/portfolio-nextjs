"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";

import { MailCheckIcon, PhoneCallIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "./UI/Button";
import { emailJsConfigure } from "@/lib/emailjs";


const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Record<string, unknown>>();

  const handleSendEmail = async (data: Record<string, unknown>) => {
    try {
      const { serviceId, templateId, publicKey } = emailJsConfigure;
      const res = await emailjs.send(serviceId!, templateId!, data, publicKey);
      console.log(res);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data: Record<string, unknown>) => {
    handleSendEmail(data);
  };

  const showToastMessage = () => {
    console.log("Success");
    // toast.success("Message sent successfully!", {
    //   position: toast.POSITION.TOP_RIGHT,
    // })
  };

  return (
    <section id="contact" className="!min-h-fit">
      <h2 className="section-title">Contact Me</h2>
      <div className="container reveal contact__container grid grid-cols-[30% 58%]">
        <div className="contact__options flex flex-col gap-5 ">
          <article className="contact__option bg-card flex flex-col items-center gap-3 p-4 rounded-md text-center border border-primary">
            <MailCheckIcon className="contact__option-icon text-[1.5rem] mb-2" />
            <h4>Email</h4>
            <h5 className="text-sm hover:bg-transparent font-mono">
              dshctr1993@gmail.com
            </h5>
          </article>

          <article className="contact__option bg-card flex flex-col items-center gap-3 p-5 rounded-md text-center border border-primary">
            <PhoneCallIcon className="contact__option-icon text-[1.5rem] mb-2" />
            <h4>WhatsApp</h4>
            <h5 className="text-sm hover:bg-transparent font-mono">
              0545882578
            </h5>
            <a
              href="https://api.whatsapp.com/send?phone=0545882578"
              target="_blank"
              rel="noreferrer"
              className="text-[1rem] text-primary hover:text-white"
            >
              Send a Massage
            </a>
          </article>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form reveal flex flex-col items-center h-full gap-[1.2rem]"
        >
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="w-full p-6 h-[40px] rounded-lg bg-transparent border-[2px] border-primary  text-white"
            required
          />
          <input
            type="email"
            {...register("email")}
            name="email"
            placeholder="Your Email"
            className="w-full p-6 h-[40px]  rounded-lg bg-transparent border-[2px] border-primary  text-white"
            required
          />
          <TextareaAutosize
            {...register("message")}
            name="message"
            minRows={5}
            placeholder="Your Message"
            className=" w-full p-6 rounded-lg bg-transparent border-[2px] border-primary text-white"
            required
          />
          <Button type="submit">
            {isSending ? "Sending..." : "Send a Massage"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
