import styles from '../styles/Home.module.css'
import samurai from '../public/samurai alpaca.png'
import coach from '../public/coach alpaca.png'
import detective from '../public/detective alpaca.png'
import gunner from '../public/gunner alpaca.png'

export default function Team() {
    
    return (
        <div className={styles.team} id="team">
            <div className={styles.road}>
              <h1 className="mb-10">
              TEAM
              </h1>
            </div>
            <div className="container border-2 border-white rounded-sm">
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

			            <div className="flex flex-col items-center justify-center bg-[#4CA0AE] text-white p-4 shadow rounded-lg">
				            <div className="inline-flex shadow-lg border border-gray-500 rounded-full overflow-hidden h-40 w-40">
					            <img src={detective.src}
						            alt=""
						            className="h-full w-full"/>
				            </div>

				            <h2 className="mt-4 font-bold text-xl">Shadowgulp</h2>
				            <h6 className="mt-2 text-sm font-medium">Dev</h6>
				         

				            
			            </div>

			            <div className="flex flex-col items-center justify-center bg-[#4CA0AE] text-white p-4 shadow rounded-lg">
				            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					            <img src={samurai.src}
						            alt=""
						            className="h-full w-full"/>
				            </div>

				            <h2 className="mt-4 font-bold text-xl">Fleck Jo</h2>
				            <h6 className="mt-2 text-sm font-medium">Founder</h6>

				            

				            
			            </div>

			            <div className="flex flex-col items-center justify-center bg-[#4CA0AE] text-white p-4 shadow rounded-lg">
				            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					            <img src={coach.src}
						            alt=""
						            className="h-full w-full"/>
				            </div>

				            <h2 className="mt-4 font-bold text-xl">Jack</h2>
				            <h6 className="mt-2 text-sm font-medium">Artist</h6>

				            
			            </div>

			            <div className="flex flex-col items-center justify-center bg-[#4CA0AE] text-white p-4 shadow rounded-lg">
				            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					            <img src={gunner.src}
						            alt=""
						            className="h-full w-full"/>
				            </div>

				            <h2 className="mt-4 font-bold text-xl">xau</h2>
				            <h6 className="mt-2 text-sm font-medium">Founder</h6>

			            </div>

		            </div>
            </div>
        </div>
        
        )
}