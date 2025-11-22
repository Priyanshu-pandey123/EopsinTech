import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Enterprise Web3 services engineered for regulated businesses
            </h2>
            <p className="mt-4 text-[15px] text-gray-400">
              From blockchain infrastructure to DeFi and NFTs, we design, build, and
              scale mission-critical Web3 products for fintechs, exchanges, and
              global enterprises.
            </p>
          </div>
          {/* Blockchain Network Visualization */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center relative">
              {/* Background blockchain network pattern */}
              <div className="absolute inset-0 -z-10">
                <svg
                  className="w-full h-full opacity-20"
                  viewBox="0 0 800 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Network nodes and connections */}
                  <defs>
                    <linearGradient id="blockchainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connection lines */}
                  <path d="M200 150 L400 200 L600 150" stroke="url(#blockchainGradient)" strokeWidth="2" opacity="0.6"/>
                  <path d="M150 250 L400 200 L650 250" stroke="url(#blockchainGradient)" strokeWidth="2" opacity="0.6"/>
                  <path d="M200 350 L400 300 L600 350" stroke="url(#blockchainGradient)" strokeWidth="2" opacity="0.6"/>
                  <path d="M250 450 L400 400 L550 450" stroke="url(#blockchainGradient)" strokeWidth="2" opacity="0.6"/>
                  
                  {/* Network nodes */}
                  <circle cx="200" cy="150" r="8" fill="#3B82F6" opacity="0.8" className="animate-pulse"/>
                  <circle cx="400" cy="200" r="12" fill="#8B5CF6" opacity="0.9" className="animate-pulse"/>
                  <circle cx="600" cy="150" r="8" fill="#06B6D4" opacity="0.8" className="animate-pulse"/>
                  <circle cx="150" cy="250" r="6" fill="#10B981" opacity="0.7" className="animate-pulse"/>
                  <circle cx="650" cy="250" r="6" fill="#F59E0B" opacity="0.7" className="animate-pulse"/>
                  <circle cx="200" cy="350" r="8" fill="#EF4444" opacity="0.8" className="animate-pulse"/>
                  <circle cx="400" cy="300" r="10" fill="#EC4899" opacity="0.85" className="animate-pulse"/>
                  <circle cx="600" cy="350" r="8" fill="#84CC16" opacity="0.8" className="animate-pulse"/>
                  <circle cx="250" cy="450" r="6" fill="#6366F1" opacity="0.7" className="animate-pulse"/>
                  <circle cx="550" cy="450" r="6" fill="#14B8A6" opacity="0.7" className="animate-pulse"/>
                </svg>
              </div>

              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_6s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-purple-900/60 before:to-blue-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-purple-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900/80 backdrop-blur-sm border border-purple-500/20"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Blockchain Network Node"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  {/* Blockchain network overlay */}
                  <div className="absolute inset-0 rounded-full">
                    <svg
                      className="w-full h-full opacity-30"
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="200" cy="200" r="180" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="10 5" className="animate-spin" style={{animationDuration: '20s'}}/>
                      <circle cx="200" cy="200" r="140" stroke="#3B82F6" strokeWidth="1" strokeDasharray="8 4" className="animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}/>
                      <circle cx="200" cy="200" r="100" stroke="#06B6D4" strokeWidth="1" strokeDasharray="6 3" className="animate-spin" style={{animationDuration: '10s'}}/>
                    </svg>
                  </div>

                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none opacity-40"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Network connections"
                  />
                  <div>
                    {/* Blockchain technology tags */}
                    <div className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-500/30">
                      <div className="text-sm font-medium text-blue-300">Smart Contracts</div>
                      <div className="w-full bg-blue-500/30 rounded-full h-1 mt-1">
                        <div className="bg-blue-400 h-1 rounded-full animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30">
                      <div className="text-sm font-medium text-purple-300">DeFi Protocol</div>
                      <div className="w-full bg-purple-500/30 rounded-full h-1 mt-1">
                        <div className="bg-purple-400 h-1 rounded-full animate-pulse" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-500/30">
                      <div className="text-sm font-medium text-green-300">Layer 2 Scaling</div>
                      <div className="w-full bg-green-500/30 rounded-full h-1 mt-1">
                        <div className="bg-green-400 h-1 rounded-full animate-pulse" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/30">
                      <div className="text-sm font-medium text-orange-300">Cross-chain Bridge</div>
                      <div className="w-full bg-orange-500/30 rounded-full h-1 mt-1">
                        <div className="bg-orange-400 h-1 rounded-full animate-pulse" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating blockchain particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Services grid - keeping the existing blockchain services */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Blockchain Infrastructure</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Design and deploy secure, scalable chains, rollups, and node
                infrastructure tailored to institutional workloads and uptime
                requirements.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Smart Contract Engineering</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Architect, implement, and audit smart contracts with formal
                security reviews and compliance-first engineering practices.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 0 .57-1.916 8.014 8.014 0 0 0 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 1-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Crypto Exchange Development</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Build compliant spot and derivatives exchanges with secure
                custody, matching engines, and regulatory-grade monitoring.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Wallet Development</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Non‑custodial, MPC, and institutional wallets with transaction
                policies, multi-sig, and enterprise key management.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>DeFi Protocols</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Launch lending, staking, liquidity, and structured DeFi products
                with robust risk controls and monitoring.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 0 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <span>Token &amp; NFT Systems</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Design tokenomics, NFT marketplaces, and on-chain loyalty
                systems aligned with long-term utility and governance.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M4 2a2 2 0 0 0-2 2v8.382A2 2 0 0 0 2.553 13.8l2.894 1.932A2 2 0 0 0 7 14.118V12h3a4 4 0 0 0 0-8H8a1 1 0 0 0 0 2h2a2 2 0 1 1 0 4H7V4a2 2 0 0 0-2-2H4Z" />
                </svg>
                <span>AI + Web3 Integrations</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Combine on-chain data with AI models to power fraud detection,
                personalization, and real-time decisioning.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M3 3a2 2 0 0 0-2 2v7.5A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5V10h2.5A1.5 1.5 0 0 0 15 8.5v-5A1.5 1.5 0 0 0 13.5 2h-5A1.5 1.5 0 0 0 7 3.5V6H3Z" />
                </svg>
                <span>Enterprise Consulting</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Strategic roadmapping, architecture reviews, and governance
                design to align Web3 initiatives with enterprise objectives.
              </p>
            </article>ā
          </div>
        </div>
      </div>
    </section>
  );
}
