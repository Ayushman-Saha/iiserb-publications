import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const data = [
  {
    department: 'Department of Data Science & Engineering',
    faculties: [
      {
        name: 'John Doe',
        title: 'Front-end Developer',
        department: 'Engineering',
        email: 'john@devui.com',
        designation: 'Professor',
        doj : "12/12/12",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        publications : [
            {
                "year" : 2024,
                "type" : "journal",
                "journal" : "Test journal",
                "title" : "Test publication"

            },
            {
                "year" : 2024,
                "type" : "journal",
                "journal" : "Test journal",
                "title" : "Test publication"

            }
        ],
        patents : [
            {
                "year" : 2022,
                "status" : "filed",
                "title" : "Patent title",
            }
        ],
        grants:[
          {
              "grant_name" : 'MEDSER',
              "amount" : '5,60,000 INR'
          }
        ],
        books:[
          {
            "title" : "book title",
            "publication" : "book publication"

          }
        ],
        students:[
          {
            "grad_phd" : 5,
            "grad_ms" : 40,
            "ongoing_phd" : 5,
            "ongoing_ms" : 50
          }
        ],
        graduated_students:[
          {
            "phd" : 5,
            "ms" : 40

          }
        ],
        ongoing_students:[
          {
            "phd" : 9,
            "ms" : 50
          }
        ]
      },
      {
        name: 'Jane Doe',
        title: 'Back-end Developer',
        department: 'Engineering',
        email: 'jane@devui.com',
        designation: 'Assistant Professor',
        doj : "12/12/12",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
          publications : [
            {
                "year" : 2024,
                "type" : "journal",
                "journal" : "Test journal",
                "title" : "Test publication"

            }
        ],
        patent: [],
        grants:[],
        books:[],
        students:[],
        graduated_students:[],
        ongoing_students:[]
      },
      
    ],
  },
  {
    department: 'Department of Economics',
    faculties: [
      {
        name: 'Mark Doe',
        title: 'Digital Marketing',
        department: 'Marketing',
        email: 'mark@devui.com',
        designation : 'Associate Professor',
        doj : "12/12/12",
        image:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          publications : [
            {
                "year" : 2024,
                "type" : "journal",
                "journal" : "Test journal",
                "title" : "Test publication"

            }
        ],
        patent: [],
        grants:[],
        books:[],
        students:[]
      },
      {
        name: 'Seb Cook',
        title: 'Social Media',
        department: 'Marketing',
        email: 'seb@devui.com',
        designation: 'Professor',
        doj : "12/12/12",
        image:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
          publications : [
            {
                "year" : 2024,
                "type" : "journal",
                "journal" : "Test journal",
                "title" : "Test publication"

            }
        ],
        patent:[],
        grants:[],
        books:[],
        students:[]
      },
    ],
  },
]

export default function Table() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-black">Faculty</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all faculties along with their works.
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new publications
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Faculty</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Publications
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Patents
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Grants
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Books
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Students
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((dept) => (
                      <React.Fragment key={dept.department}>
                        <tr className="border-t border-gray-200 divide-x divide-gray-200">
                          <th
                            colSpan={6}
                            scope="col"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                          >
                            {dept.department}
                          </th>
                        </tr>
                        {dept.faculties.map((faculty) => (
                          <tr key={faculty.name} className='divide-x divide-gray-200'>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={faculty.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 ">
                                    {faculty.name}
                                  </div>
                                  <div className="text-sm text-gray-900">{faculty.designation}</div>
                              <div className="text-sm text-gray-500">{`DOJ: ${faculty.doj}`}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 ">
                                {faculty.publications.map((publication) => {
                                    return (
                                        <div key={faculty.publications.indexOf(publication)} className="my-4 mb-8">
                                        <div className="text-sm text-gray-900">{`${faculty.publications.indexOf(publication) + 1}. ${publication.title}`}</div>
                                        <div className="text-sm text-gray-500">{publication.journal}</div>
                                        <div className="text-sm text-gray-500">{publication.year}</div>
                                        <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{publication.type}</div>
                                        </div>
                                    )
                                })}
                              
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 ">
                                {(faculty.patents != undefined) ? faculty.patents.map((patent) => {
                                    return (
                                        <div key={faculty.publications.indexOf(patent)} className="my-4 mb-8">
                                        <div className="text-sm text-gray-900">{`${faculty.patents.indexOf(patent) + 1}. ${patent.title}`}</div>
                                        <div className="text-sm text-gray-500">{patent.year}</div>
                                        {/* <div className="text-sm text-gray-500">{patent.year}</div> */}
                                        <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{patent.status}</div>
                                        </div>
                                    )
                                }): <></>}
                              
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 ">
                                {(faculty.grants != undefined) ? faculty.grants.map((grant) => {
                                    return (
                                        <div key={faculty.publications.indexOf(grant)} className="my-4 mb-8">
                                        <div className="text-sm text-gray-900">{`${faculty.grants.indexOf(grant) + 1}. ${grant.grant_name}`}</div>
                                        <div className="text-sm text-gray-500">{grant.amount}</div>
                                        {/* <div className="text-sm text-gray-500">{patent.year}</div> */}
                                        {/* <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{patent.status}</div> */}
                                        </div>
                                    )
                                }): <></>}
                              
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 ">
                                {faculty.books.map((book) => {
                                    return (
                                        <div key={faculty.books.indexOf(book)} className="my-4 mb-8">
                                        <div className="text-sm text-gray-900">{`${faculty.books.indexOf(book) + 1}. ${book.title}`}</div>
                                        {/* <div className="text-sm text-gray-500">{book.title}</div> */}
                                        <div className="text-sm text-gray-500">{book.publication}</div>
                                        {/* <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{publication.type}</div> */}
                                        </div>
                                    )
                                })}
                              
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 ">
                                {faculty.students.map((student) => {
                                    return (
                                        <tr key={faculty.students.indexOf(student)} className="my-4 mb-8">
                                          {/* <tr className="flex"> */}
                                            {/* <div className="text-sm text-gray-900">{`${faculty.graduated_students.indexOf(grad_student) + 1}. ${grad_student.phd}`}</div> */}
                                            <td>
                                            <div className="text-sm text-gray-500">{student.grad_phd}</div>
                                            </td>
                                            {/* <div className="h-4 bg-gray-400 w-1"></div> Vertical line */}
                                            <td>
                                            <div className="text-sm text-gray-500">{student.grad_ms}</div>
                                            </td>
                                            {/* <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{publication.type}</div> */}
                                          {/* </tr> */}
                                        </tr>
                                    )
                                })}
                              
                            </td>
                            {/* <td className="whitespace-nowrap px-4 py-4 ">
                                {faculty.ongoing_students.map((ongoing) => {
                                    return (
                                        <div key={faculty.ongoing_students.indexOf(ongoing)} className="my-4 mb-8"> */}
                                        {/* <div className="text-sm text-gray-900">{`${faculty.ongoing_students.indexOf(ongoing) + 1}. ${ongoing.phd}`}</div> */}
                                        {/* <div className="text-sm text-gray-500">{ongoing.ms}</div>
                                        <div className="text-sm text-gray-500">{ongoing.phd}</div> */}
                                        {/* <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize divide-x-2 divide-gray-200">{publication.type}</div> */}
                                        {/* </div>
                                    )
                                })}
                              
                            </td> */}

                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                              {faculty.role}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>previous</span>
          </a>

          <div className="hidden items-center gap-x-3 md:flex">
            <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
              1
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              2
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              3
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              ...
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              12
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              13
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
