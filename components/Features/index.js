"use client";
import React from "react";
import { solutions, problems } from "./Content";
import { FeaturesDescription } from "./FeaturesDescription";
import Image from "next/image";
import { useViewStore } from "@/store/view.store";
import { useThemeStore } from "@/store/theme.store";

export default function Features() {
  const inViewFeature = useViewStore((state) => state.inViewFeature);
  const theme = useThemeStore((state) => state.theme);
  let features = theme === "dark" ? problems : solutions;
  return (
    <>
      <div className="lg:grid lg:place-items-center lg:h-screen hidden">
        <div className="flex w-2/3 items-start gap-20">
          <div className="w-full py-[40vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id} className="flex flex-col gap-2 py-40">
                  <FeaturesDescription id={feature.id}>
                    <p className="text-3xl py-4 font-medium dark:text-purple-50 text-gray-800">
                      {feature.title}
                    </p>
                    <h3 className="text-base font-regular dark:text-purple-200 text-gray-600">
                      {feature.text}
                    </h3>
                  </FeaturesDescription>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative w-full aspect-square rounded-2xl bg-purple-200">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`
        absolute inset-0 h-full w-full rounded-2xl transition-opacity
        ${inViewFeature === feature.id ? "opacity-100" : "opacity-0"}
      `}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid gap-8 px-10 py-24">
        {features.map((feature) => (
          <div
            className="aspect-[3/4] w-full rounded-2xl drop-shadow-lg dark:bg-purple-950 p-4 bg-purple-50"
            key={feature.id}
          >
            <div className="aspect-square w-full bg-purple-200 rounded-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                className="w-full h-full"
                objectFit="contain"
              />
            </div>
            <p className="text-xl pt-4 pb-2 font-medium dark:text-purple-50 text-gray-800">
              {feature.title}
            </p>
            <h3 className="text-base font-regular dark:text-purple-200 text-gray-600">
              {feature.text}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
