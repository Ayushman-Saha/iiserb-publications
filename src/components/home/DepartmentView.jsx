import DepartmentCard from "./DepartmentCard";
import DSEIllust from "../../assets/ic_dse.jpg"
import EcoIllust from "../../assets/ic_economics.jpg"

const deptData = [
    {
        "name" : "Department of Data Science and Engineering",
        "description" : "Lorem Ipsum",
        "dept" : "dse",
        "image" : DSEIllust
    },
    {
        "name" : "Department of Economics",
        "description" : "Lorem Ipsum",
        "dept" : "eco",
        "image" : EcoIllust
    },
    {
        "name" : "Department of Electrical Engineering and Computer Science",
        "description" : "Lorem Ipsum",
        "dept" : "eecs",
        "image" : DSEIllust
    },
    {
        "name" : "Department of Chemical Engineering",
        "description" : "Lorem Ipsum",
        "dept": "che",
        "image" : EcoIllust
    }
]

export default function DepartmentView() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0 my-8">
      <div className="my-4">
        <h1 className="text-3xl font-bold">Our Departments</h1>
        <p className="mb-8 mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        {deptData.map((dept)=> {
            return <DepartmentCard key={dept.name} name={dept.name} description={dept.description} image={dept.image} dept={dept.dept}/>
        })}
      </div>
    </div>
  )
}
