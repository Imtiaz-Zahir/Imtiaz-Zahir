import { useState } from "react";

export default function Contact() {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="px-0 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 my-20"
    >
      <h1 className="text-center uppercase text-5xl font-semibold my-10">
        Contact
      </h1>
      <div className="lg:flex text-gray-400 overflow-hidden lg:px-10">
        <form
          data-aos="fade-left"
          className="grid grid-cols-2 gap-5 lg:w-3/5 lg:pr-10 text-lg"
        >
          <input
            onChange={(m) =>
              setDetails({ ...details, fullName: m.target.value })
            }
            value={details.fullName}
            type="text"
            placeholder="Your Name"
            required
            className="h-10 col-span-2 md:col-span-1 bg-transparent border-b border-gray-600 py-3 focus:outline-none"
          />
          <input
            onChange={(m) => setDetails({ ...details, email: m.target.value })}
            value={details.email}
            type="email"
            placeholder="Your Email"
            required
            className="h-10 col-span-2 md:col-span-1 bg-transparent border-b border-gray-600 py-3 focus:outline-none"
          />
          <textarea
            onChange={(m) =>
              setDetails({ ...details, message: m.target.value })
            }
            value={details.message}
            cols={10}
            rows={7}
            placeholder="Your Message"
            required
            className="rounded-md col-span-2 bg-transparent p-3 border border-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="border-2 border-gray-600 rounded-2xl py-3 mr-auto px-5 hover:bg-gray-900 col-span-2"
          >
            SEND MESSAGE
          </button>
        </form>
        <div
          data-aos="fade-right"
          className="lg:w-2/5 sm:p-2 my-5 md:my-0 md:p-10"
        >
          <h3 className="text-lg font-bold uppercase">email</h3>
          <a
            className="text-2xl text-gray-200 mt-2"
            href="mailto: imtiazzahir43@gmail.com"
          >
            imtiazzahir43@gmail.com
          </a>
          <h3 className="text-lg font-bold uppercase mt-5">phone</h3>
          <p className="text-2xl text-gray-200 mt-2">+880 1*********</p>
          <h3 className="text-lg font-bold uppercase mt-5">socels</h3>
          <div className="flex items-center text-4xl mt-2 gap-4">
            <a href="/">
              <svg
                height={40}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9CA3AF"
                  d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                ></path>
              </svg>
            </a>
            <a href="/">
              <svg
                height={40}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9CA3AF"
                  d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
