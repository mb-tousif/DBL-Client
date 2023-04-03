import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="pt-[120px] bg-[#3e3e3ee7]">
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#03A776] to-[#0D1519] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl text-[#03A776] font-semibold">
                  Login to your account
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        }})}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {errors.email?.type === "required" && (
                      <span className="text-red-600 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                          message: "Password is not valid!",
                        },
                      })}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errors.password?.type === "required" && (
                      <span className="text-red-600 text-xs">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-600 text-xs">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-2 text-sm">
                    <Link to={"#/"}>Forgot Password?</Link>
                  </div>
                  <div className="relative mx-auto">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#0D1519] to-[#03A776] text-white md:w-32 rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="relative">
                    <p className="text-sm text-gray-500">
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="font-medium ml-2 text-[#03A776] hover:text-[#0D1519] focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
