import Nav from "@/components/Nav";
import { useSession, signIn} from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-bgGray w-screen h-screen flex flex-col justify-center gap-4 items-center">
        <div className="text-white bg-gray-600 p-2 rounded-md">
          <div>Email : ecomad708@gmail.com</div>
          <div>Password : Admin123!</div>
        </div>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-bgGray min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
    </div>
  )
}
