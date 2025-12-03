import "../assets/animation.css";
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useSearchParams } from 'react-router-dom';

export default function Verify() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [load, setLoad] = useState(false);
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    useEffect(()=> {
        if(searchParams.get('code')) {
            setCode(searchParams.get('code'));
        }
    }, []);
  return (
    <>
        <Header/>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Verify {email ||'johndoe@example.com'}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                {/* code */}
                <div>
                  <label
                    for="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your code
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    
                    className={`bg-gray-50 border  text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400 dark:text-white ${
                      error
                        ? "dark:focus:ring-red-500 dark:focus:border-red-500 focus:ring-red-600 focus:border-red-600 text-red-900 border-red-300 dark:bg-red-700 dark:border-red-600 "
                        : "dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-600 focus:border-blue-600 text-gray-900 border-gray-300 dark:bg-gray-700 dark:border-gray-600 "
                    }`}
                    placeholder="123456"
                    value={code}
                    required=""
                  />
                  <span className="text-red-600">{error}</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                //   onClick={handleSubmit}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {load ? <div className="loader"></div> : "Verify Email"}
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
