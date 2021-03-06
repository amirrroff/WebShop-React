import { BiHeart } from "react-icons/bi";
import Head from 'next/head'



export const getStaticProps = async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data =await res.json()
  
    return{
      props:{ ninjas: data}
    }
  }
  
  
  const Shop = ({ ninjas }) => {
    return ( 
      <div className='background'>
       <style jsx>{`
              .background {
                background-image: url("https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg");
              }
        `}
      </style>
         <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <ul className="flex flex-wrap justify-center sm:justify-between">
       {ninjas.map(item => (
         <div key={item.id}> 
             <li className="w-80 h-5/6 m-12 border rounded-lg shadow-lg bg-zinc-200 ">
                <div className="text-center">
                  <div className="relative">
                  <img src={item.image} alt="fotos" className="h-80 w-full mb-2" />
                  <button className='border absolute bottom-0.5 right-0 px-4 py-4 bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    </button>
                  </div>
                   <h1 className="font-bold ">{item.title}</h1>
                      <p className="w-18 h-10 mt-2"> Price : {item.price}€</p>
                      <button className='border w-48 py-2 border-black bg-white text-black rounded-full m-1 hover:bg-black hover:text-white'>BUY NOW</button>
                      <button className='border w-48 py-2 border-black bg-black text-white rounded-full mb-8'>ADD TO BAG </button>
                   </div>
                
             </li>
           </div>
       ))}
          </ul>

      </div>
     );
  }
   
  export default Shop;