import IISERBLogo from "../../assets/ic_logo.jpg"
function Footer() {
    let time = new Date()
  return (
    <>
    <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 my-16">
        <div className="inline-flex items-center">
          <img src={IISERBLogo} className=""/>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">Developed by <a className="underline" href="https://www.linkedin.com/in/ayushman-saha/" target="_blank">Ayushman Saha</a> </p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© {time.getFullYear()} IISER Bhopal. All rights reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer