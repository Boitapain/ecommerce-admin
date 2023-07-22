import Nav from "@/components/Nav";
import { useSession, signIn} from "next-auth/react"
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({children}) {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);


  if(!session){
    return (
      <div>
        <div className="bg-bgGray w-screen h-screen flex flex-col justify-center gap-4 items-center">
        <div className="text-white bg-gray-600 p-2 rounded-md">
          <div>Email : ecomad708@gmail.com</div>
          <div>Password : Admin123!</div>
        </div>
        <button onClick={() => signIn('google')} className="bg-highlight p-2 flex gap-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google" className="w-6 h-6">
            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
          </svg>
          Login with Google
        </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-bgGray min-h-screen">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(showNav ? false:true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
        
      </div>
      
      <div className=" flex">
        <Nav show={showNav}/>
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
    
  )
}
