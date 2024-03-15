import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { UserData } from "./App";


const SignUpData = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(24),
    confirmPassword: z.string().min(3).max(24),
    companyName: z.string()
})
type SignUpDataType = z.infer<typeof SignUpData>

export default function Register({setIsLogged, setUserData}: {setIsLogged: (isLogged: boolean) => void, setUserData: (userData: UserData) => void}){


    const {register, handleSubmit, formState: { errors }} = useForm<SignUpDataType>({ resolver: zodResolver(SignUpData) })

    // API call here
    const mutation = useMutation({
        mutationFn: (newUser: SignUpDataType) => {
            return axios.post('https://api.pm.st.cetuspro.com/account/sign-up', newUser).then(({data}) => data)
        },
        onSuccess: (data: any) => {
            setIsLogged(true)
            setUserData({email: data.email, profileColor: "#caca45"})
        }
    })
  

    return(
        <div className="w-full">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col w-48 gap-2">
                <input placeholder="email" {...register("email", {required: true})} />
                {errors.email && <p>{errors.email.message}</p>}

                <input type="password" placeholder="password" {...register("password", {required: true})} />
                {errors.password && <p>{errors.password.message}</p>}

                <input type="password" placeholder="confirm password" {...register("confirmPassword", {required: true})} />          
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <input placeholder="company name" {...register("companyName", {required: true})} />
                {errors.companyName && <p>{errors.companyName.message}</p>}

                <button type="submit">submit!</button>
            </form>
        </div>
    )
}