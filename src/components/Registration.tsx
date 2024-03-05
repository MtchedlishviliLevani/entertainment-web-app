import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

function Registration({
    setIsRegistrired,
}: {
    setIsRegistrired: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    interface FormData {
        email: string;
        password: string;
        repeatPassword: string;
    }
    //
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const watchedPassword = watch("password");
    const watchedRepeatPas = watch("repeatPassword");

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleClick = () => {
        // Retrieve existing user array from local storage or initialize an empty array
        const existingUsersString = localStorage.getItem("users");

        // Parse the existing user array if it's not null
        const existingUsers = existingUsersString
            ? JSON.parse(existingUsersString)
            : [];

        // Update local storage with the updated array
        localStorage.setItem("users", JSON.stringify(existingUsers));
        if (email.length > 0 && password.length > 0) {
            setIsRegistrired(true);
            // Add the new user object to the array
            existingUsers.push({ email, password });
        }
    };

    return (
        <div>
            <img src={logo} alt="" className="m-auto block mt-[30px]" />
            <div className="max-w-[327px] sm:max-w-[340px] md:min-w-[400px] w-[90%] bg-loginBg px-[20px] py-[30px] m-auto rounded-[8px] mt-[50px]">
                <h2 className="text-primaryText text-[32px]">Sign Up</h2>
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
                                            message: "Minimum 5 characters",
                                        },
                                    })}
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="pl-[15px] pb-[10px] mb-[20px] w-[100%] border-b border-solid border-greilishBlue block bg-[initial]  text-primaryText outline-none"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                                {watchedPassword && errors.password?.message && (
                                    <span className="text-buttonBg absolute top-0 left-[60%] md:left-[68%]">
                                        Can't be empty
                                    </span>
                                )}

                                <input
                                    {...register("repeatPassword", {
                                        minLength: {
                                            value: 5,
                                            message: "Can't be empty",
                                        },
                                    })}
                                    className="pl-[15px] pb-[10px] w-[100%] border-b border-solid border-greilishBlue block bg-[initial]  text-primaryText outline-none"
                                    placeholder="Repeat password"
                                    type="password"
                                    name="repeatPassword"
                                />
                                {watchedPassword !== watchedRepeatPas && (
                                    <span className="text-buttonBg absolute text-[12px] top-[54px] left-[55%] md:left-[64%]">
                                        Passwords do not match
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
                        onClick={() => setIsRegistrired(true)}
                        className="text-buttonBg text-[15px] cursor-pointer"
                    >
                        Sign In
                    </span>
                </h4>
            </div>
        </div>
    );
}

export default Registration;
