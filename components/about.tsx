
import styles from '../styles/Home.module.css'
import gif from '../public/animated3.gif'



export default function About() {
    
    return (
        <div className=" bg-[#90329a] px-2 py-32 md:px-20 sm:px-14" id="about">
            <div className={styles.road}>
              <h1 className="mb-10">
              ABOUT
              </h1>
            </div>
            <div className="sm:flex bg-[#b13bbe] container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="w-full pt-6 md:px-10 pt-6 w-full sm:w-full px-5 pt-6">
                    
                    <img className="w-full h-auto overflow-hidden shadow-xl rounded-xl" src={gif.src} alt="Alpacas" />
                
                    
                </div>
                    <div className="w-full pt-10 pb-10 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                        <h1 className="text-[#fff] font-bold text-2xl  my-2 text-center">What is Alpaca Project</h1>
                        
                    <div className="container pt-4">
                    <p className="text-[#fff] text-xl mb-2 md:mb-6">The Alpaca Project is made up of 999 Alpacas. The vision of the project is to create a tight knit community where you can safely discuss all things Crypto/NFT with the goal of providing ongoing value to every holder and the community in general.</p>
                    <p className="text-[#fff] text-base mb-2 md:mb-6 pb-10">The way we aim to do this is through creation and curation of tools and resources that help people navigate this space.</p>
            
                    </div>
                    </div>
            </div>
        
        </div>
        
        )
}
