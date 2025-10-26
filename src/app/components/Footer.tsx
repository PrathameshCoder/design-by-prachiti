import { hr } from "motion/react-client"

export default function Footer() {
  return (
<footer className="w-full  text-white py-6 mt-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    {/* Left: Logo */}
    <div className="flex items-center mb-4 md:mb-0" >
      <img
        src="/footer-logo.png"
        alt="Logo"
        className="h-10 w-auto"
      />
    </div>
    {/* Center: Social Icons Placeholder */}
    <div className="flex space-x-4">
      {/* Add your social icons here */}
      <span className="text-lg flex space-x-4 items-center">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-12 h-9">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
  </a>
  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-12 h-9">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75H7.5A2.25 2.25 0 005.25 12v0a2.25 2.25 0 002.25 2.25h2.25m0 0v-4.5m0 4.5v1.5m4.5-6h3a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25 2.25h-3v-4.5zm0 4.5v1.5m0-1.5h3a2.25 2.25 0 002.25-2.25v0a2.25 2.25 0 00-2.25-2.25h-3v4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5h2.25" />
    </svg>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-12 h-9">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25A3.75 3.75 0 0120.25 12v4.5A3.75 3.75 0 0116.5 20.25h-9A3.75 3.75 0 013.75 16.5V12a3.75 3.75 0 013.75-3.75h9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.5v-4.5m0 0V8.25m0 3.75h.008v.008H8.25v-.008zm7.5 4.5v-2.25a2.25 2.25 0 00-4.5 0v2.25" />
    </svg>
  </a>
</span>
    </div>
    {/* Right: Credit */}
    <div className="flex items-center mt-4 md:mt-0 text-black">
      <span className="mx-2 text-xl font-light">|</span>
      <span className="text-sm mt-2 ">
        Proudly created by{' '}
        <a
          href="https://prathameshgongle.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200 transition-colors"
        >
          Prathamesh
        </a> ❤️
      </span>
    </div>
  </div>
</footer> 
    )}