import React from 'react'
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import profileImage from "../../public/images/Mydp.png";
import Image from "next/image";
import MagneticEffect from './MagneticEffect';

export default function Footer () {
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl mb-16 dark:text-white text-gray-800">
          Hire me / Follow me / Do both
        </h2>
        <div className="flex gap-16 flex-row">
          <MagneticEffect>
            <Link
              href="https://github.com/Aditya-150"
              className="bg-purple-50 p-3 rounded-full flex drop-shadow-lg"
            >
              <FaGithub size={32} color="#9333ea" />
            </Link>
          </MagneticEffect>
          <MagneticEffect>
            <Link
              href="https://www.linkedin.com/in/aditya-prasad-mohanty/"
              className="bg-purple-50 p-3 rounded-full flex drop-shadow-lg"
            >
              <FaLinkedinIn size={32} color="#9333ea" />
            </Link>
          </MagneticEffect>
          <MagneticEffect>
            <Link
              href="https://aditya150.vercel.app/"
              className="bg-purple-50 p-3 rounded-full flex drop-shadow-lg"
            >
              <Image
                src={profileImage}
                alt="profile image"
                className="size-8 rounded-full"
              />
            </Link>
          </MagneticEffect>
        </div>
      </div>
    </div>
  );
}
