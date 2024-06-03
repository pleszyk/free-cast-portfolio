import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="p-2 mx-6 my-4 flex border bg-gray-800 border-gray-700 rounded-lg text-white flex-row space-y-4">
      <Image
        className="rounded-xl border border-gray-700 object-cover"
        src="/assets/photo.jpg"
        width={150}
        height={150}
        alt="Picture of the author"
      />
      <div className="px-6 flex w-full relative">
        <span className="text-sm">
          Hello, I&rsquo;m Paul. Experienced in building dynamic full-stack
          applications leveraging mainly React and Node.js. Equipped with a solid
          foundational background with a B.Sc in Computer Science to deliver high-quality
          projects. Thanks for checking out my projects!
        </span>
        <Link
          className="absolute hover:bg-indigo-600 right-0 bottom-0 text-xs border border-indigo-600 rounded p-1 bg-indigo-700"
          href="/studio"
        >
          Studio
        </Link>
      </div>
    </div>
  );
}

export default Hero;
