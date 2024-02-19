import LHC from "../../assets/LHC.jpg"

function Hero() {
  return (
    <>
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
      <div className="rounded-lg bg-gray-200 mt-8">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px] shadow-2xl"
            src={LHC}
            alt="A picture of LHC Lawn"
          />
        </div>  
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6 text-center">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl mb-4">
            Welcome to Research and Development Office
          </h1>
          <p className="mt-4 text-lg text-gray-700">
          The Research & Development office of IISER Bhopal has been established to provide specialized administrative and managerial support for the operation of sponsored research, consultancy and other R&D related activities of the Institute. The research viewpoint has now progressed from an individual laboratory work to a collaborative one that occurs not just at national but at international level. 
          The office provides support for the interaction of an IISER faculty with external agency around the globe. The office also provides support for the Institute-Industry interaction and takes care of the filing and management of patents.
          </p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Hero