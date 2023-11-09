import Link from "next/link";
import { FaFacebook, FaSquareInstagram, FaSquareTwitter,FaLinkedin } from 'react-icons/fa6'

export function Footer() {
   
 const Links = [
  {id: 1, text: 'Home', url: '/'},
  {id: 2, text: 'About', url: '/'},
  {id: 3, text: 'Posts', url: '/'},
  {id: 4, text: 'Contact', url: '/'},
 ]
 
 const Links2 = [
  {id : 5, text : 'Category', url: '/'},
  {id : 6, text : 'Best posts', url: '/'},
  {id : 7, text : 'Best authors', url: '/'},
  {id : 8, text : 'Best posts', url: '/'},
 ]

 const social = [
  {id: 9, text: 'Facebook', url: '/', icon: <FaFacebook/>},
  {id: 10, text: 'Instagram', url: '/', icon: <FaSquareInstagram/>},
  {id: 11, text: 'Twitter', url: '/', icon: <FaSquareTwitter/>},
  {id: 12, text: 'LinkedIn', url: '/', icon: <FaLinkedin/>},
 ]

  return ( 
  
     <footer className="grid lg:grid-cols-6 grid-cols-1 gap-20 items-center bg-slate-950 lg:px-16 lg:py-20 px-5 py-10">
        <div className=" lg:col-span-3 flex flex-col items-start justify-center gap-5">
        <h1 className="text-slate-50 font-bold text-4xl">Blog Dev</h1>
        <p className="text-slate-50">Join our newsletter to stay up to date on features and releases.</p>
        <form className="flex gap-2 w-full">
          <input className="w-full rounded-md p-2 border-0 bg-slate-50" type="text" placeholder="Enter your email" />
          <button className="border-0 bg-slate-50 text-slate-900 p-2 rounded-md">Subscribe</button>
        </form>
        </div>
        <div className="lg:col-span-3  w-full flex md:flex-row flex-col justify-around gap-10">
           <ul className="flex flex-col gap-2">
             <h3 className="text-slate-50 text-2xl font-semibold">Links</h3>
             {Links.map((link) => (
               <li key={link.id}>
                <Link className="text-slate-50" href={link.url}>
                  {link.text}
                </Link>
               </li>
             ))}
           </ul>
           <ul className="flex flex-col gap-2" >
           <h3 className="text-slate-50 text-2xl font-semibold">Links</h3>
            {Links2.map((link2) => (
               <li key={link2.id}>
                <Link className="text-slate-50"  href={link2.url}>
                  {link2.text}
                </Link>
               </li>
            ))}
           </ul>
           <ul className="flex flex-col gap-2">
            <h3 className="text-slate-50 text-2xl font-semibold">Redes Sociais</h3>
            {social.map((link) => (
              <li key={link.id}>
                <Link className="text-slate-50 flex items-center gap-3"   href={link.url}>
                  <i className="text-lg">
                    {link.icon}
                  </i>
                 {link.text}
                </Link>
              </li>
            ))}
           </ul>
        </div>
     </footer>

  )
}