import Image from "next/image";
import React from "react";

import Link from "next/link";
const HeroSection = () => {
  const stars = Array(5).fill({
    src: "https://i.postimg.cc/3Jk49njv/icons8-star-90.png",
    alt: "star",
    width: 20,
    height: 20,
  });

  return (
    <section className="flex flex-col p-4 md:p-8 min-h-screen mt-20 md:mt-30">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12">
        {/* Left Side Content */}
        <div className="max-w-md space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Talk to your docs. Work with your team instantly.
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center md:text-left">
            SynkSpace lets you write, chat, and build — together, in real time.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="/docs">
              <button className="bg-black cursor-pointer px-8 py-4  text-base text-white rounded-md hover:bg-gray-800 transition-colors">
                Try Now
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 mt-12">
            <div className="flex items-center gap-2">
              {stars.map((star, index) => (
                <Image
                  key={index}
                  src={star.src}
                  alt={star.alt}
                  width={star.width}
                  height={star.height}
                />
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h2 className="text-lg font-bold text-center md:text-left">
                Best collaboration platform
              </h2>
              <p className="text-center md:text-left italic">
                &quot;SynkSpace streamlined our workflow and is easy to
                use.&quot;
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 rounded-full overflow-hidden">
                <Image
                  src={"https://i.postimg.cc/kXGyTbG1/boy1.jpg"}
                  alt="User avatar"
                  priority
                  fill
                  className="object-cover"
                />
              </div>
              <p>Liam @liamcodes</p>
            </div>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="relative mt-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] order-2 md:order-2">
          <Image
            src={"https://i.postimg.cc/y8J59bfr/Right-Illustration-1.png"}
            alt="Background Illustration"
            width={500}
            height={500}
            className="absolute inset-0 z-0 object-contain"
          />
          <Image
            src={"/heroRight.svg"}
            alt="Foreground Illustration"
            width={800}
            height={800}
            className="absolute inset-0 z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
