import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-2xl animate-pulse bottom-10 right-10"></div>
      </div>

      <div className="relative container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 animate-fadeIn">
            {data.name}
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed mb-6 opacity-90">
            {data.paragraph}
          </p>
          <Link
            href={`blog/${data.slug}`}
            className="inline-block bg-white text-indigo-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>

        <div className="lg:w-1/2">
          {data.image ? (
            <div className="relative group transform transition duration-500 hover:scale-105">
              <Image
                src={urlFor(data.image).url()}
                alt="Hero image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-600  opacity-0 group-hover:opacity-70 rounded-lg transition duration-500"></div>
            </div>
          ) : (
            <p className="text-gray-300">No image available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
