import React from "react";
import "./styling/contact.css";
import { IconContext } from "react-icons";
import { MdSend, MdLocationOn, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-[90vw] lg:w-[75vw] lg:min-h-[50vh] max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse text-white font-Poppins gap-20">
      <div className="flex-[5]">
        <div className="flex gap-3 mb-[3.5rem]">
          <div className="input-field">
            <input
              type="text"
              className="text-white font-Poppins px-3 text-sm"
              id="name"
              required
            />
            <label for="name" className="translate-y-[17%]">
              First Name
            </label>
          </div>
          <div className="input-field">
            <input
              type="email"
              className="text-white font-Poppins px-3 text-sm"
              id="email"
              required
            />
            <label for="email" className="translate-y-[17%]">
              Email
            </label>
          </div>
        </div>
        <div className="input-field mb-[2rem] w-[100%] md:w-[77%]">
            <input
              type="text"
              className="text-white font-Poppins px-3 text-sm w-full"
              id="subject"
              required
            />
            <label for="subject" className="translate-y-[17%]">
              Subject
            </label>
        </div><br />
        <textarea name="" id="" cols="20" rows="10" className="w-[100%] md:w-[77%] font-Poppins px-3 text-md py-4 mb-5"></textarea>
        <div className="w-[100%] md:w-[77%]">
          <button className="flex gap-2 items-center bg-white text-darkColor px-3 py-2 rounded-3xl text-sm font-semibold ml-auto border border-white hover:bg-darkColor hover:text-white duration-200">Send Message<IconContext.Provider value={{size: 20}}><MdSend /></IconContext.Provider></button>
        </div>
      </div>

      <div className="flex-[4]">
        <h2 className="text-3xl font-semibold">
          Let's work together on your next project.
        </h2>
        <p className="py-4 opacity-80 text-gray-300 mb-5">
          Looking for exciting opportunities to collaborate and build meaningful
          connections. Let's connect and make great things happen!
        </p>

        <div className="flex items-center mb-4">
          <span>
            <IconContext.Provider
              value={{
                size: 45,
                className:
                  "bg-[#212131] p-2 rounded-md box-border mr-3 hover:bg-purple hover:text-darkColor duration-100 delay-[0.05s] cursor-pointer",
              }}
            >
              <MdLocationOn />
            </IconContext.Provider>
          </span>
          <div className="">
            <span className="text-white text-xs">Country</span>
            <h4 className="text-whitee text-sm">Pakistan</h4>
          </div>
        </div>
        <div className="flex items-center my-4">
          <span>
            <IconContext.Provider
              value={{
                size: 45,
                className:
                  "bg-[#212131] p-2 rounded-md box-border mr-3 hover:bg-purple hover:text-darkColor duration-100 delay-[0.05s] cursor-pointer",
              }}
            >
              <MdEmail />
            </IconContext.Provider>
          </span>
          <div className="">
            <span className="text-white text-xs">Whatsapp</span>
            <h4 className="text-white text-sm">
              +92 313 2508277
            </h4>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span>
            <IconContext.Provider
              value={{
                size: 45,
                className:
                  "bg-[#212131] p-2 rounded-md box-border mr-3 hover:bg-purple hover:text-darkColor duration-100 delay-[0.05s] cursor-pointer",
              }}
            >
              <BsWhatsapp />
            </IconContext.Provider>
          </span>
          <div className="">
            <span className="text-white text-xs">Email</span>
            <h4 className="text-white text-sm">
              mohammadhassanrizwan@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
