import React from 'react'

const Portfolio = () => {
    return (
        <section className='portfolio' id='portfolio'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> My Portfolio</p>
                <h1 className='font-semibold text-[50px] mt-2'>Frontend Magic</h1>
                <h2 className='font-semibold text-[50px] ms-12 my-4'>and <span className='italic text-[#FFAE00] underline' >Backend Power</span></h2>
            </div>
            <div className="portfolio-container">

                <div className="item-1 mt-10 cursor-pointer">
                    <h2 className='my-10 font-bold text-3xl cursor-pointer hover:text-[#ffae00] transition-all'>
                        Reel Up Ecommerce Video Platform
                    </h2>
                    <div className="overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                        <img
                            src="/assets/MyPortfolio/img-1.avif"
                            alt=""
                            className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>

                <div className="portfolio-sub-container grid grid-cols-1 sm:grid-cols-2 gap-5">
  <div className="item-1 cursor-pointer">
    <h2 className="my-10 font-bold text-3xl cursor-pointer hover:text-[#ffae00] transition-all">
      Academy Sales Carrier
    </h2>
    <div className="overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
      <img
        src="/assets/MyPortfolio/img-2.avif"
        alt=""
        className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  </div>

  <div className="item-1 cursor-pointer">
    <h2 className="my-10 font-bold text-3xl cursor-pointer hover:text-[#ffae00] transition-all">
      Academy Sales Carrier
    </h2>
    <div className="overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
      <img
        src="/assets/MyPortfolio/img-3.avif"
        alt=""
        className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  </div>
</div>

                 <div className="item-1 mt-10 cursor-pointer">
                    <h2 className='my-10 font-bold text-3xl cursor-pointer hover:text-[#ffae00] transition-all'>
                        Reel Up Ecommerce Video Platform
                    </h2>
                    <div className="overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                        <img
                            src="/assets/portfolio/img-4.avif"
                            alt=""
                            className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio
