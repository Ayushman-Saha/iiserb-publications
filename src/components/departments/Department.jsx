import {useParams} from "react-router-dom"
import FacultyImage from "../../assets/ic_faculty.jpg"
import FacultyCard from "./FacultyCard"

const deptData = [
    {
        "dept" : "dse",
        "department": "Department of Data Science and Engineering",
        "description" : "Enter Description Here",
        "faculty" : [
            {
                "name": "Hello World",
                "image" : "",
                "designation" : "Professor",
                "profId" : 0
            },
            {
                "name": "Jon Doe",
                "image" : "",
                "designation" : "Assistant Professor",
                "profId" : 1
            },
            {
                "name": "Hello World 1",
                "image" : "",
                "designation" : "Associate Professor",
                "profId" : 2
            },{
                "name": "Hello World",
                "image" : "",
                "designation" : "Professor",
                "profId" : 3
            },
            {
                "name": "Hello World",
                "image" : "",
                "designation" : "Professor",
                "profId" : 4
            }
        ]
    }
]

function Department() {
    const {dept} = useParams()
    const department = deptData.filter((department)=> department.dept === dept)
    const data = department[0].faculty
  return (
   <>
   
    {/* Main content */}

   <div className="mx-auto max-w-7xl px-2 md:px-0 my-8">
      <div className="my-4">
        <h1 className="text-3xl font-bold">{department[0].department}</h1>
        <p className="mb-8 mt-2 text-gray-500">
          {department[0].description}
        </p>
      </div>
      {/* {Search bar} */}

   <div className="flex w-full items-center space-x-2 md:w-1/3 mx-auto my-8">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="Name"
        placeholder="Enter name of faculty"
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
    </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        {data.map((faculty)=> {
            return <FacultyCard key={faculty.profId} name={faculty.name} designation={faculty.designation} image={FacultyImage} profId={faculty.profId}/>
        })}
      </div>
    </div>
   </>
  )
}

export default Department