import {useParams} from "react-router-dom"
import FacultyHero from "./FacultyHero"
import CommaBreak from "../utils/CommaBreak"
import  FacultyPublications  from "./FacultyPublications"
import FacultyPatents from "./FacultyPatents"

const facultyData = [
    {
        "profId": 0,
        "name": "Hello World",
        "designation": "Professor",
        "department": "dse",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id libero ut felis vestibulum eleifend sit amet eu sapien. Vivamus egestas velit vel quam vestibulum, sed hendrerit quam vestibulum. Phasellus sed nisl at diam auctor mattis eu vitae lectus. ",
        "image" : "",
        "publications" : [
            {
                "title" : "Test title 1",
                "author": "Test author 1",
                "journal" : "Test Journal",
                "type" : "journal",
                "year" : 2024,
                "url" : ""
            },
            {
                "title" : "Test title 2",
                "author": "hello world",
                "journal" : "Test conference",
                "type" : "conference",
                "year" : 2024,
                "url" : ""
            }
        ],
        "patents" : [
           {
             "title": "Test patent 1",
             "applicants" : "Test applicants",
             "inventors": "Hello World",
             "year" : 2024,
             "status" : "filed",
             "department" : "dse"
           },
           {
            "title": "Test patent 2",
            "applicants" : "Test applicants",
            "inventors": "Hello World",
            "year" : 2023,
            "status" : "accepted",
            "department" : "dse"
          }
        ],
        "grants" : [
            {
                
            }
        ]
    }
]

function Faculty() {
  const {profId} = useParams()
  const facultyInfo = facultyData.filter((faculty)=> faculty.profId == profId)

  return (
    <>
    {facultyInfo.map((faculty) => {
        return (
        <>
        <FacultyHero key={faculty.profId} name={faculty.name} designation={faculty.designation} department={faculty.department} description={faculty.description}/>
        <CommaBreak/>
        <FacultyPublications publications={faculty.publications}/>
        <CommaBreak/>   
        <FacultyPatents patents={faculty.patents}/>
        </>
        )
    })}
    </>
  )
}

export default Faculty