import leftImage from "../../Assets/signup.jpg";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  fullName: string;
  NID: string;
  email: string;
  DOB: string;
  role: string;
  gender: string;
  password: string;
  cell: string;
  imgUrl: string;
  address: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div className="pt-[140px] pb-6 mx-auto bg-[#3e3e3ee7]">
      <div className="flex justify-center px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url(${leftImage})`,
            }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-[#03A776] font-bold text-center">
              Create an Account!
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("fullName", { required: true })}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  {errors.fullName && (
                    <p className="text-rose-600 text-center text-sm">
                      Full name is required.
                    </p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="NID"
                  >
                    NID
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("NID", { required: true })}
                    type="text"
                    placeholder="Enter Your NID"
                  />
                  {errors.NID && (
                    <p className="text-rose-600 text-center text-sm">
                      NID is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("email", {
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                />
                {errors.email?.type === "pattern" && (
                  <p className="text-rose-600 text-center text-sm">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "required" && (
                  <p className="text-rose-600 text-center text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="inline-block mb-2 mr-2 text-gray-700">
                  Gender:
                </label>
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Male"
                />
                <label
                  htmlFor="male"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Male
                </label>
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Female"
                />
                <label
                  htmlFor="female"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Female
                </label>
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Others"
                />
                <label
                  htmlFor="others"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Others
                </label>
                {errors.gender && (
                  <p className="text-rose-600 text-center text-sm">
                    Select your gender.
                  </p>
                )}
              </div>
              <div className="sm:flex justify-between">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="DOB"
                  >
                    DOB
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("DOB", { required: true })}
                    type="date"
                    placeholder="Enter Your DOB"
                  />
                  {errors.DOB && (
                    <p className="text-rose-600 text-center text-sm">
                      DOB is required.
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="inline-block mb-2 text-sm font-bold text-gray-700">
                    User Role
                  </label>
                  <select
                    className="w-full h-8 text-center bg-[#666666e7] text-gray-50 rounded-lg text-sm"
                    {...register("role", { required: true })}
                  >
                    <option value="">--Select User--</option>
                    <option value="Guest">Guest</option>
                    <option value="A/C Holder">A/C Holder</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                  </select>
                  {errors.role && (
                    <p className="text-rose-600 text-center text-sm">
                      User role is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("password", {
                      minLength: {
                        value: 6,
                        message: "Password min-length six characters",
                      },
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    type="password"
                    placeholder="******************"
                  />
                  {errors.password?.type === "minLength" && (
                    <p className="text-rose-600 text-center text-sm">
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="text-rose-600 text-center text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phoneNumber"
                  >
                    Enter Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("cell", { required: true })}
                    type="cell"
                    placeholder="88012 345 6789"
                  />
                  {errors.cell && (
                    <p className="text-rose-600 text-center text-sm">
                      Phone Number is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="flex flex-col items-center px-4 py-6 bg-white text-[#03A776] rounded-lg shadow border border-blue cursor-pointer hover:bg-blue">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base">Upload Your Photo</span>
                  <input
                    type="file"
                    className="hidden"
                    {...register("imgUrl", { required: true })}
                  />
                </label>
                {errors.imgUrl && (
                  <p className="text-rose-600 text-center text-sm">
                    Upload your profile picture.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows={6}
                  placeholder="Enter Your Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <p className="text-rose-600 text-center text-sm">
                    Address is required.
                  </p>
                )}
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-[#03A776] to-[#0D1519] rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm md:text-base text-[#0D1519] hover:text-[#03A776] align-baseline"
                  href="/login"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
