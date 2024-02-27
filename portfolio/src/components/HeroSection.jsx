import React from 'react'

function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello,<br/> I'm Md Masudur Rahman</h1>
                    <p className='text-neutral-100 text-lg lg:texl-xl mb-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit quasi quas facere molestias eos cupiditate ducimus enim aut, quia nostrum? Reiciendis nobis eligendi ipsum labore eos, recusandae incidunt perspiciatis!</p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 bg-pink-500 text-black hover:bg-slate-100 text-xl font-semibold text-center '>Hire Me</button>
                        <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white text-xl font-semibold text-center border border-white mt-3'>Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] absulate'>
                    <img src="/images/hero-me-round-inverser.png" alt="images" width={300} height={300}
                    className='relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                    </div>
                    
                </div>

            </div>

        </section>
    )
}

export default HeroSection