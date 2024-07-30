import React from "react";
import Styles from "./css/Contact.module.css";
import person from "../imgs/icon-person.svg";
import conf from "../imgs/icon-cog.svg";
import graph from "../imgs/icon-chart.svg";

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: ''
  });


  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'This field is required';
      valid = false;
    }

    if (!email) {
      newErrors.email = 'This field is required';
      valid = false;
    }

    if (!company) {
      newErrors.company = 'This field is required';
      valid = false;
    }

    if (!title) {
      newErrors.title = 'This field is required';
      valid = false;
    }

    if (!message) {
      newErrors.message = 'This field is required';
      valid = false;
    }


    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
  
      console.log('Form submitted');
    }
  };

  return (
    <section className={`${Styles.bgSection}`}>
      <div className="customContainer mx-auto px-5 relative z-20">
        <div className="flex flex-col desktop:flex-row">
          <div className="flex-1 laptop:max-w-[515px] mx-auto">
            <div className="text-center desktop:text-start">
              <h1 className="fontH1Small text-white font-bold flex-2 w-full laptop:mb-4">
                Contact
              </h1>
              <h2 className="text-LightCoral font-bold fontH2">Ask us about</h2>
            </div>
            <div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={person} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    The quality of our talent network
                  </p>
                </div>
              </div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={conf} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    Usage & implementation of our software
                  </p>
                </div>
              </div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={graph} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    How we help drive innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 flex-1 max-w-[540px] mx-auto w-full ">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="new-password">
              <div className="relative">
                <input
                  className={`bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue focus:placeholder:text-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 ${errors.name ? 'border-[#F67E7E] placeholder:text-[#F67E7E] placeholder:opacity-70' : ''}`}
                  autoComplete="new-password"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <span className="text-[#F67E7E] text-xs italic">{errors.name}</span>}
              </div>
              <div className="relative">
                <input
                  className={`bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue focus:placeholder:text-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 ${errors.email ? 'border-[#F67E7E] placeholder:text-[#F67E7E] placeholder:opacity-70' : ''} `}
                  autoComplete="new-password"
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <span className="text-[#F67E7E] text-xs italic pl-3">{errors.email}</span>}
              </div>
              <div className="relative">
                <input
                  className={`bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue focus:placeholder:text-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 ${errors.company ? 'border-[#F67E7E] placeholder:text-[#F67E7E] placeholder:opacity-70' : ''}`}
                  autoComplete="new-password"
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
                {errors.company && <span className="text-[#F67E7E] text-xs italic pl-3">{errors.company}</span>}
              </div>
              <div className="relative">
                <input
                  className={`bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue focus:placeholder:text-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 ${errors.title ? 'border-[#F67E7E] placeholder:text-[#F67E7E] placeholder:opacity-70' : ''}`}
                  autoComplete="new-password"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                {errors.title && <span className="text-[#F67E7E] text-xs italic pl-3">{errors.title}</span>}
              </div>
              <div className="relative">
                <textarea
                  className={`bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue focus:placeholder:text-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 resize-none ${errors.message ? 'border-[#F67E7E] placeholder:text-[#F67E7E] placeholder:opacity-70' : ''}`}
                  autoComplete="new-password"
                  placeholder="Message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                {errors.message && <span className="text-[#F67E7E] text-xs italic pl-3">{errors.message}</span>}
              </div>
              <div>
                <button className="py-2.5 px-8 bg-white text-DarkGreen rounded-3xl fontMenu duration-300 hover:bg-LightCoral">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
