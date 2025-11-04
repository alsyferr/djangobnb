"use client"
import { useState } from "react"
import Modals from "./Modals"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"
import { error } from "console"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"




const SignupModal = () => {
    const router = useRouter()

    const signupModal = useSignupModal();

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    // const [isLoading, setIsLoading] = useState(false);

    // submit functionality

    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.postWithoutToken('api/auth/register/', JSON.stringify(formData));

        if (response.access) {
             handleLogin(response.user.pk, response.access, response.refresh);


            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors);
        }
    }


    const content = (     
        <>
           {/* <h2 className="text-2xl mb-5">Welcome to Djangobnb, please log in</h2>  */}
           <form className="space-y-4" action={submitSignup}>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Your e-mail address" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                <input 
                    onChange={(e) => setPassword1(e.target.value)}
                    type="password" 
                    placeholder="Your password" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                 <input
                    onChange={(e) => setPassword2(e.target.value)} 
                    type="password" 
                    placeholder="Repeat password" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />

                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl cursor-pointer opacity-80 transition">
                            {error}
                        </div>
                    )
                })}

                

                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
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