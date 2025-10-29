import Image from "next/image"
import Link from "next/link"
import SearchFilter from "./SearchFilter"
import UserNav from "./UserNav"
import AddPropertyButton from "./AddPropertyButton"


const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 py-6 border-b bg-whit z-10">
        <div className="max-w-[1500px] mx-auto px-8">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="" width={180} height={38}/>
                </Link>

                <div className=" flex space-x-6">
                    <SearchFilter />
                </div>

                <div className="flex items-center space-x-6">
                    <AddPropertyButton/>    

                    <UserNav />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar