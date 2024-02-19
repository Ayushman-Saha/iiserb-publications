/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function FacultyCard({name, designation, image, profId}) {
  return (
    <>
    <NavLink to={`faculty/${profId}`}>
        <div className="flex flex-col items-center text-start  transition duration-300 ease-in-out hover:scale-110">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-gray-800"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src={image}
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover opacity-40"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">{name}</h1>
              <h6 className="text-base text-white">{designation}</h6>
            </div>
           
          </div>
        </div>
    </NavLink>
    </>
  )
}

export default FacultyCard