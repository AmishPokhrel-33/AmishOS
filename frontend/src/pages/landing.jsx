import { Navigate, useNavigate } from "react-router-dom"

function Landing(){
        const navigate = useNavigate();

        const click = () =>{
            navigate('/OS')
        }
    return(
        <>
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800">AmishOS</h2>
        <p className="mt-2 text-gray-600">
         This is Simple OS made By Amish.It is a browser based OS 
        </p>

        <button className="bg-transparent m-4 hover:bg-gray-600 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded transition duration-200" onClick={click}>
        Goto
        </button>

      </div>

    </div>
              
        </>
    )
}

export default Landing