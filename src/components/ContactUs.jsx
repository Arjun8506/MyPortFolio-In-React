import React from "react";

const ContactUs = () => {
  return (
    <div className=" w-full min-h-fit pt-20 px-5 pb-10" id="contact">
      <h1 className="text-2xl text-center font-bold uppercase mb-5">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="">
        <h2 className=" mb-2 text-orange-600 text-xl">Social Media Links</h2>
        <ul>
          <li className=" flex items-center gap-1">
            <box-icon name='linkedin-square' type='logo' animation='burst' color='#00b5ff' size="md" ></box-icon>
            <a
              href="https://www.linkedin.com/in/arjun-nagar-8b748b276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className=" text-lg"
              >
              LinkedIn
            </a>
          </li>
          <li className=" flex items-center gap-1" >
          <box-icon name='skype' type='logo' animation='burst' color='#00b5ff' size="md" ></box-icon>
            <a
              href="https://join.skype.com/invite/vBcuVyknIm6E"
              target="_blank"
              className=" text-lg"
              >
              Skype
            </a>
          </li>
          <li className=" flex items-center gap-1" >
          <box-icon name='instagram' type='logo' animation='burst' color='#ff191d' size="md" ></box-icon>
            <a href="https://www.instagram.com/arjunnagar386?igsh=MW05emQ5MG50eWtweQ==" target="_blank"
                className=" text-lg"
            >Instagram</a>
          </li>
        </ul>
        </div>
        <div className="">
      <h2 className=" mb-2 text-xl text-orange-600" >Contact Details </h2>
        <ul>
          <li>Contact No :- <span>+91 8506801098</span></li>
          <li>Email ID :- <span>arjunnagar801098@gmail.com</span></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
