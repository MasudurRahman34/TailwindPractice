import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello I'm <br /></span>
                        <TypeAnimation
                            sequence={[
                                'Md Masudur Rahman',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Fullstack Web Developer',
                                1000,
                                'Full Stack Machine Learning Engineer',
                                1000,
                                'Data Analytics',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{display: 'inline-block' }}
                            repeat={Infinity}
                        /> </h1>
                    <p className='text-neutral-100 mb-6 font-semibold text-lg lg:texl-xl sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit quasi quas facere molestias eos cupiditate ducimus enim aut, quia nostrum? Reiciendis nobis eligendi ipsum labore eos, recusandae incidunt perspiciatis!</p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200 text-xl font-semibold text-center '>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-xl font-semibold text-center mt-3'><span className='block bg-[#121212] rounded-full hover:bg-slate-500 px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] absulate'>
                        <img src="/images/hero-me-round-inverser.png" alt="images" width={300} height={300}
                            className='relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default HeroSection