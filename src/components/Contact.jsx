import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f1aa320-d3b1-47ca-b06b-e35295e01489");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Thanks for contacting us. We will get back to you soon.");
      
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("data.message");
      setResult("");
    }
  };
  return (
    <div>
         <div id='About' className='flex flex-col items-center justify-center
    w-full overflow-hidden mx-auto p-14 md:px-14 lg:px-20'>
        <h1 className='text-2xl sm:4xl font-bold mb-2'>Contact
            <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-grey-400 max-w-80 text-center mb-8'>
            Ready to make a move? Let's Build Your Furture Together
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input name="Name" className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Your name' required/>

                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input name="Email" className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                type="email" placeholder='Your Email' required/>

                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white  px-12 py-2 rounded'>
                {result?result:"Send Message"}</button>
        </form>
    

    </div>
</div>
  )
}

export default Contact