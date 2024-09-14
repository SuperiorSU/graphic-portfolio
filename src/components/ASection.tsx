import React from 'react';

const ASection: React.FC = () => {
    return (
        <section className="bg-slate-950" id="about">
            <p className="text-slate-200 font-bold uppercase lg:text-xl text-base text-center">
          A Brief
        </p>
        <h2 className="text-4xl lg:text-9xl text-center md:text-5xl font-bold text-white uppercase">
          About Me
        </h2>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light sm:text-lgtext-gray-400">
                <h2 className="mb-7 text-4xl tracking-tight py-5 border-b-2 font-extrabold text-white">
                My name is Sujal
            </h2>
            <p className="mb-4 font-sans font-normal text-justify text-xs text-neutral-300">
                 A passionate Graphic Designer and Fullstack Web/App Developer. My journey began with a keen interest in visual arts and technology, leading me to pursue a career that merges creativity with technical expertise.
            </p>
            <p className='mb-3 font-sans font-normal text-justify  text-xs text-neutral-300'>
                With a foundation in Computer Science and hands-on experience in modern web technologies, I specialize in creating visually appealing and functional designs. My expertise spans across various fields including graphic design, web development, and user experience.
            </p>
            <p className='mb-3 font-sans font-normal text-justify  text-xs text-neutral-300'>
                I have worked on numerous projects, ranging from designing sleek user interfaces to developing dynamic websites. My skills include proficiency in tools like Adobe Photoshop, Figma, and Tailwind CSS, as well as experience with front-end frameworks like React and Next.js,.
            </p>
            <p className='mb-3 font-sans font-normal text-justify  text-xs text-neutral-300'>
                My goal is to deliver designs that not only meet client expectations but also enhance user experiences through thoughtful and innovative solutions. I am always eager to learn and adapt to new trends in design and technology.
            </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://utfs.io/f/BCPfHUjwOM0ELCzZZOdh2nQ1Wsa06c9YkGMt5LdPVHbzmvNS" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://utfs.io/f/a9350f24-f2a2-4eed-8c78-d3a0118ba03c-1q4e47.jpg" alt="office content 2" />
                </div>
            </div>
        </section>
    );
};

export default ASection;
