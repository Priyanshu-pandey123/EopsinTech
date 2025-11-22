"use client";

import { useState } from "react";
import Image from "next/image";
import BitcoinLogo from "@/public/images/bitcoin.svg";
import EthereumLogo from "@/public/images/ethereum.svg";
import SolanaLogo from "@/public/images/solana.svg";
import BitcoinGold from "@/public/images/bitcoin-gold.svg";
import Bitcoin from "@/public/images/bitcoin.svg";
import Iota from "@/public/images/iota.svg";

export default function LargeTestimonial() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const logos = [BitcoinLogo, EthereumLogo, SolanaLogo,Bitcoin,BitcoinGold,Iota];

  return (
    <section>
      {/* Full-width Carousel */}
      <div className="w-screen overflow-hidden -mx-[calc(50vw-50%)] mt-12 bg-transparent h-[150px]">
        <div
          className="
            flex 
            w-max 
            animate-[scroll_18s_linear_infinite] 
            hover:[animation-play-state:paused]
          "
        >
          {[...logos, ...logos, ...logos].map((logo, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`
                  mx-12 flex-shrink-0 cursor-pointer transition-all duration-300 
                  relative flex items-center justify-center
                `}
              >
                {/* Circle Container */}
                <div
                  className={`
                    rounded-full flex items-center justify-center
                    transition-all duration-300 
                    ${isActive ? "scale-150 shadow-2xl" : "scale-100 shadow-md"}
                    bg-white/10 backdrop-blur-xl border border-white/20
                    hover:scale-125
                  `}
                  style={{
                    width: "90px",
                    height: "90px",
                  }}
                >
                  <Image
                    src={logo}
                    alt="Crypto Logo"
                    width={50}
                    height={50}
                    className="
                      opacity-90 
                      hover:opacity-100 
                      transition-all 
                      duration-300
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6">
       
      </div>
    </section>
  );
}
