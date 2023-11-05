import Banners from "@/components/Banners/Banner";
import SmallCard from "@/components/Cards/SmallCard";
import { PostsList } from "@/components/Posts/PostsList";



export default function Home() {
  return (
      <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
        <section className="flex flex-col items-center justify-start lg:col-span-7">
        <Banners/>
        <PostsList/>
        </section>
        <section className=" lg:col-span-5 flex flex-col items-start justify-center gap-5">
          <div className="w-[22.5rem] h-12 rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts Populares</h3>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link="" title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
          </div>
            
          <div className="w-[22.5rem] h-12 rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts Populares</h3>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link="" title="Aqui vai o nome do Post"/>
            <SmallCard author="Juliano Santos"  date="02/11/2023" imageUrl="/coverMini.png" link=""  title="Aqui vai o nome do Post"/>
          </div>
        </section>
      </main>    
  )
}
