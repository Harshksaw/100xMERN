import {useLocation} from 'react-router-dom';

function Navbar_dash() {
  const location = useLocation()
    
  const username = location.state ? location.state.id:null;
  return (
    <header className="text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-start">
     
      <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base  ">

        <h3 className="mr-5 hover:text-green-300">Payment App</h3>
 
      </nav>
      <a href="/" className="inline-flex items-center border-0 py-1 px-3  rounded text-base  md:mt-0">
        Hello, {username ? username : 'user'}
       
      </a>
      <div className="inline-flex bg-slate-400 focus:outline-none hover:bg-gray-200  items-center border-0 py-1 px-3 rounded-full  md:mt-0 justify-end">
         Image
      </div>
      
    </div>
  </header>
  )
}

export default Navbar_dash