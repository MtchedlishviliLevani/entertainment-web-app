import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.svg";
import { useState, useRef } from "react";

interface Setters {
    setIsRegistrired: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
function Login({ setIsRegistrired, setIsLoggedIn }: Setters) {
    interface FormData {
        email: string;
        password: string;
    }

    // manipulate input borderBottom
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // access to inputs values
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleClick() {
        const usersString: string | null = localStorage.getItem("users");
        if (usersString !== null) {
            // Parse  JSON string in JavaScript object
            interface UserArray {
                email: string;
                password: string;
            }
            const usersArray: UserArray[] = JSON.parse(usersString);

            const foundUser = usersArray.find(
                (user) => user.email === email && user.password === password
            );
            if (foundUser) {
                setIsLoggedIn(true);
            } else {
                console.log("Incorrect email or password");

                const emailInputElement = emailRef.current;
                const passwordInputElement = passwordRef.current;

                if (emailInputElement && passwordInputElement) {
                    emailInputElement.style.borderBottomColor = "red";
                    passwordInputElement.style.borderBottomColor = "red";
                }
            }
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();
    const watchedPassword = watch("password");
    return (
        <div>
            <img src={logo} alt="" className="m-auto block mt-[30px]" />
            <div className="max-w-[327px] sm:max-w-[340px] md:max-w-[400px] xl:min-w-[400px] w-[90%] bg-loginBg px-[20px] py-[30px] m-auto rounded-[8px] mt-[50px]">
                <h2 className="text-primaryText text-[32px]">Login</h2>
                <form action="" className="" onSubmit={handleSubmit(handleClick)}>
                    <div className="mt-[25px] mb-[40px] flex flex-col gap-[20px]">
                        <input
                            {...register("email", {
                                minLength: 8,
                                maxLength: 30,
                                pattern: {
                                    value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Please enter a valid email address",
                                },
                            })}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            ref={emailRef}
                            className="pl-[15px] pb-[10px] w-[100%] caret-buttonBg carret-[2px] border-b border-solid border-greilishBlue block bg-[initial]  text-primaryText outline-none"
                            placeholder="Email address"
                            type="email"
                            name="email"
                        />
                        {errors.email?.message && <p>correct</p>}
                        <div>
                            <div className="relative">
                                <input
                                    {...register("password", {
                                        minLength: {
                                            value: 5,
                                            message: "Can't be empty",
                                        },
                                    })}
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    ref={passwordRef}
                                    className="pl-[15px] pb-[10px] w-[100%] border-b border-solid border-greilishBlue block bg-[initial]  text-primaryText outline-none"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                                {watchedPassword && errors.password?.message && (
                                    <span className="text-buttonBg absolute top-0 left-[60%] md:left-[68%]">
                                        Can't be empty
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-buttonBg text-b w-[100%] py-[10px] text-primaryText rounded hover:bg-buttonHoverBg hover:text-buttonHovTextCol"
                    >
                        Login to your account
                    </button>
                </form>
                <h4 className="text-primaryText mt-[20px] text-center">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => setIsRegistrired(false)}
                        className="text-buttonBg text-[15px] cursor-pointer"
                    >
                        Sign Up
                    </span>
                </h4>
            </div>
        </div>
    );
}

export default Login;
