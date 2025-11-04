"use client"
import { useState } from "react"
import Modals from "./Modals"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"
import { handleLogin } from "@/app/lib/actions"
import apiService from "@/app/services/apiService"



const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.postWithoutToken('api/auth/login/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)

            loginModal.close();

            router.push('/')
        } else {
            setErrors(response.non_field_errors);
        }
    }

    const content = (     
        <>
           {/* <h2 className="text-2xl mb-5">Welcome to Djangobnb, please log in</h2>  */}
           <form className="space-y-4" action={submitLogin}>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Your e-mail address" 
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Your password" 
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
                    onClick={ submitLogin}
                />
           </form>
            
        </> 
            
    )


  return (
    <Modals
        label="Log In"
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        content={content}
    />
  )
}

export default LoginModal