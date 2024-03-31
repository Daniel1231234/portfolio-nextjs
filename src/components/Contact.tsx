"use client"

import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import TextareaAutosize from "react-textarea-autosize"
import { useForm } from "react-hook-form"
import { Button } from "./UI/Button"
import { emailJsConfigure } from "@/lib/emailjs"
import toast from "react-hot-toast"
import { Icons } from "./Icons"
import SectionWrapper from "./SectionWrapper"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/motion"

const Contact = () => {
  const [isSending, setIsSending] = useState(false)
  const IconMail = Icons["MailCheckIcon"]
  const IconPhone = Icons["PhoneCallIcon"]

  const { register, handleSubmit, reset } = useForm<Record<string, unknown>>()

  const handleSendEmail = async (data: Record<string, unknown>) => {
    try {
      const { serviceId, templateId, publicKey } = emailJsConfigure
      const res = await emailjs.send(serviceId!, templateId!, data, publicKey)
      if (res.status === 200) {
        toast.success("Message send successfully")
      }
      reset()
    } catch (err) {
      toast.error("Something went wrong, Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

  const onSubmit = (data: Record<string, unknown>) => {
    setIsSending(true)
    handleSendEmail(data)
  }

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-1 bg-card text-white shadow-xl p-8 rounded-2xl max-w-7xl mx-auto"
    >
      <p className="sm:text-[18px] text-[14px] text-mainLight uppercase tracking-wider">
        Get in touch
      </p>
      <h3 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact.
      </h3>
      <div className="grid md:grid-cols-[30%_58%] md:gap-[12%] gap-5 sm:grid-cols-1">
        <div className="flex flex-col gap-5 my-4">
          <motion.div
            variants={fadeIn("right", "spring", 1, 0.75)}
            className="w-full xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <article className="bg-tertiary rounded-[20px] py-5  flex justify-evenly items-center flex-col">
              <IconMail className="text-2xl mb-2" />
              <h4
                className="cursor-pointer hover:opacity-80"
                onClick={() => window.open("mailto:dshctr1993@gmail.com")}
              >
                Email
              </h4>
              <h5 className="text-sm hover:bg-transparent">
                dshctr1993@gmail.com
              </h5>
            </article>
          </motion.div>

          <motion.div
            variants={fadeIn("right", "spring", 1.4, 0.75)}
            className="w-full xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <article className="bg-tertiary rounded-[20px] py-5  flex justify-evenly items-center flex-col">
              <IconPhone className="contact__option-icon text-2xl mb-2" />
              <h4
                className="cursor-pointer hover:opacity-80"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=0545882578",
                    "_blank"
                  )
                }
              >
                WhatsApp
              </h4>
              <h5 className="text-sm hover:bg-transparent">0545882578</h5>
            </article>
          </motion.div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form reveal flex flex-col items-center h-full gap-5"
        >
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="bg-tertiary py-4 px-6 placeholder:text-mainLight text-white rounded-lg outline-none border-none font-medium w-full"
            required
          />
          <input
            type="email"
            {...register("email")}
            name="email"
            placeholder="Your Email"
            className="bg-tertiary py-4 px-6 placeholder:text-mainLight text-white rounded-lg outline-none border-none font-medium w-full"
            required
          />
          <TextareaAutosize
            {...register("message")}
            name="message"
            minRows={5}
            placeholder="Your Message"
            className=" bg-tertiary py-4 px-6 placeholder:text-mainLight text-white rounded-lg outline-none border-none font-medium  w-full"
            required
          />
          <Button type="submit">
            {isSending ? "Sending..." : "Send a Massage"}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact, "contact")
