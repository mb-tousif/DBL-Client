import { Link, useNavigate } from "react-router-dom"

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-7">
      <div className="my-auto sm:mt-20">
        <h1 className="text-2xl">Uh oh! We’ve got a problem.</h1>
      <div className="flex justify-center">
        <button
          className="w-32 mr-2 mb-2 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md shadow-md focus:outline-none"
          onClick={() => navigate(-1)}
        >
          <i className='bx bx-arrow-back w-5'></i>
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="w-32 mb-2 flex items-center justify-center bg-gray-200 text-gray-600 rounded-md shadow-md focus:outline-none"
        >
          <i className='bx bxs-home w-5'></i>
          <span>Go home</span>
        </Link>
      </div>
      </div>    
    </div>
  )
}
export default Page404