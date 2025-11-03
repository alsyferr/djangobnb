"use client"
import { useState } from "react"
import Modals from "./Modals"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"



const SignupModal = () => {
    const signupModal = useSignupModal();

    // const [isLoading, setIsLoading] = useState(false);

    const content = (     
        <>
           {/* <h2 className="text-2xl mb-5">Welcome to Djangobnb, please log in</h2>  */}
           <form className="space-y-4">
                <input 
                    type="email" 
                    placeholder="Your e-mail address" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                <input 
                    type="password" 
                    placeholder="Your password" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                 <input 
                    type="password" 
                    placeholder="Repeat password" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />

                <div className="p-5 bg-airbnb text-white rounded-xl cursor-pointer opacity-80 transition">
                    The error message goes here
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Test')}
                />
           </form>
            
        </> 
            
    )


  return (
    <Modals
        label="Sign Up"
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        content={content}
    />
  )
}

export default SignupModal