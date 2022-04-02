import styles from '../styles/Home.module.css'




export default function Footer() {
    
    
    return (
        <footer className="footer bg-[#37464E] relative pt-1 border-b-2 border-blue-700 text-white">
                <div className="container mx-auto px-6">

                    <div className="sm:flex  sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full text-white sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col">
                                <div className="w-3/12 flex items-center">
                                    <a className="text-2xl font-semibold" href="/">Alpacas</a>
                                </div>
                                
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-1">Links</span>
                                <span className="my-2"><a href="https://twitter.com/alpaca_friends" className="text-gray-200 text-md hover:text-white">Twitter</a></span>
                                <span className="my-2"><a href="https://discord.gg/" className="text-gray-200  text-md hover:text-white">Discord</a></span>
                                <span className="my-2"><a href="https:/magiceden.io/" className="text-gray-200 text-md hover:text-white">Magiceden</a></span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Navigation</span>
                                <span className="my-2"><a href="#about" className="text-gray-200  text-md hover:text-white">ABOUT</a></span>
                                <span className="my-2"><a href="#roadmap" className="text-gray-200  text-md hover:text-white">ROADMAP</a></span>
                                <span className="my-2"><a href="#team" className="text-gray-200  text-md hover:text-white">TEAM</a></span>
                                <span className="my-2"><a href="#faq" className="text-gray-200 text-md hover:text-white">FAQs</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-white font-bold mb-2">
                                Copyright © 2022, Alpacas Project.
                            </p>
                            <p className="text-sm text-white font-bold mb-2">
                                All trademarks and copyrights belong to their respective owners.
                            </p>
                        </div>
                    </div>
                </div>
        </footer>
        
        )
}