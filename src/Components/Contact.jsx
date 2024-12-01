import React, { useRef } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
    const formRef = useRef(null); // Create a ref for the form

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1a56c0c7-9aab-44c6-94ae-eb990632fb54");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              }).then(() => {
                formRef.current.reset(); // Reset the form fields
            });
        }
      };

  return (
    <section className=" w-80 h-auto  border-2 shadow-md rounded-md p-2 px-12 py-0 " >
      <form ref={formRef} onSubmit={onSubmit} action="" className="flex flex-col justify-center items-center px-28 py-8 gap-2 rounded-sm bg-green-400 bg-opacity-10">
        <div className="flex flex-col gap-4">
          <h1 className="heading text-xl flex  w-28 font-bold">Contact Us</h1>
        </div>
        <div className="name-slot text-left">
        
          <input type="text " name="name" placeholder="Name:" required className="input border-2 rounded-xl p-2  w-60 h-12" />
        </div>
        <div className="email-slot text-left">
          
          <input
            type="email"
            name="email"
            required
            placeholder="Email: abc@gmail.com"
            className="input border-2 rounded-xl  p-2 w-60 h-12"
          />
        </div>
        <div className="maessage-slot text-left">
          
          <textarea className="input border-2 rounded-xl p-2 " placeholder="Message here... " name="message" required rows={5} cols={29}></textarea>
        </div>
        <button className="submit-btn border-none bg-blue-600 rounded-lg p-4 w-36 text-white hover:bg-blue-500">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
