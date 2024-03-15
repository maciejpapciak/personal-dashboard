import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { UserData } from "./App";

const SignInData = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(24)
})
type SignInDataType = z.infer<typeof SignInData>

export default function Login({setIsLogged, setUserData}: {setIsLogged: (isLogged: boolean) => void, setUserData: (userData: UserData) => void}){

    const { register, handleSubmit, formState: { errors } } = useForm<SignInDataType>({ resolver: zodResolver(SignInData)})

    const mutation = useMutation({
        mutationFn: (currentUser: SignInDataType) => {
            return axios.post('https://api.pm.st.cetuspro.com/account/sign-in', currentUser).then(({data}) => data)
        },
        onSuccess: (data: any) => {
            setIsLogged(true)
            setUserData({email: data.email, profileColor: "#56cb6c"})
        }
    })

    return(
        <div>
            <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col w-48 gap-2">
                <input placeholder="email" {...register("email", {required: true})} />
                {errors.email && <p>{errors.email.message}</p>}

                <input type="password" placeholder="password" {...register("password", {required: true})} />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">submit!</button>
            </form>
        </div>
    )
}