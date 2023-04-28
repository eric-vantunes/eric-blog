import Posts from "./components/Posts"
import About from "./components/About"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-8 mb-8 text-4xl text-center dark:text-white">
        Hi, there👋🏻&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold underline decoration-wavy decoration-[#3e3e3e] ">Eric Antunes</span>
        </span>
      </p>
      <hr className="px-6 mx-auto max-w-2xl" />
      <About />
      <Posts />
    </main>
  )
}
