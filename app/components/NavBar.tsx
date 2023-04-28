import Link from "next/link"
import { FaGithub, FaLinkedin, FaLaptop } from "react-icons/fa"

export default function NavBar(){
  return (
    <nav className="dark:bg-[#2a2a2a] p-4 stick top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto
      flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-quicksand font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/"
            className="text-white/90 no-underline hover:text-white">Eric Antunes
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-4xl">
          <Link className="text-white/90 hover:text-white group flex relative target-blank " href="https://github.com/eric-vantunes">
            <FaGithub />
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">GitHub</span>
          </Link>
          <Link className="text-white/90 hover:text-white group flex relative" href="https://www.linkedin.com/in/ericvantunes/">
            <FaLinkedin />
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Linkedin</span>
          </Link>
          <Link className="text-white/90 hover:text-white group flex relative" href="https://ericvantunes.netlify.app/">
            <FaLaptop />
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Portfólio</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}