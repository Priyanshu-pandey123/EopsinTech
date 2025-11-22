import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ShieldCheckIcon, CodeBracketIcon, ServerStackIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

// Placeholder for a generic blockchain-themed image (e.g., a network graph or a block)
const BANNER_IMAGE_URL = "https://bernardmarr.com/img/What%20Is%20Blockchain%20A%20Super%20Simple%20Guide%20Anyone%20Can%20Understand.png";

// --- Data from previous component (AboutBlockchain.jsx) ---
const stats = [
  { label: "Enterprise Deployments", value: "40+", icon: ServerStackIcon },
  { label: "Smart Contracts Audited", value: "120+", icon: CodeBracketIcon },
  { label: "DeFi TVL Secured", value: "$2.4B", icon: CurrencyDollarIcon },
  { label: "Average Uptime", value: "99.98%", icon: CheckCircleIcon },
];

const values = [
  {
    title: "Protocol-First Thinking",
    body: "We design modular architectures that adapt to Layer 1 and Layer 2 ecosystems, ensuring longevity and composability.",
    icon: CodeBracketIcon,
  },
  {
    title: "Security At Every Layer",
    body: "From formal verification to runtime monitoring, our teams harden wallets, bridges, and on-chain logic before mainnet launch.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Human-Centered Interfaces",
    body: "Intuitive dashboards and developer tooling help teams ship crypto experiences that feel familiar yet powerful.",
    icon: CheckCircleIcon,
  },
];

const pillars = [
  {
    title: "Institutional Blockchain Rollouts",
    body: "Deploy permissioned or hybrid ledgers with custodial controls, digital identity, and regulatory reporting baked in.",
  },
  {
    title: "Crypto Application Acceleration",
    body: "Launch wallets, staking portals, NFT marketplaces, or DeFi primitives with audited smart contracts and observability.",
  },
  {
    title: "Zero-Trust Infrastructure",
    body: "Secure key management, MPC signing flows, and continuous threat modeling safeguard every touchpoint.",
  },
];
// -----------------------------------------------------------

// --- Light Theme Banner Component ---
function AboutBanner() {
  return (
    <section 
    className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay - Light Theme Adjustment */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src={BANNER_IMAGE_URL}
            alt="Blockchain Network Background"
            width="100%"
            height="100%"
            style={{ 
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            className="opacity-5" // Reduced opacity for light theme
          />
          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <p 
            className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600" // Blue accent for light theme
            data-aos="zoom-y-out"
          >
            Our Mission
          </p>
          <h1
            className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl" // Dark text
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Building the Secure, Decentralized Future.
          </h1>
          <p
            className="mt-6 mx-auto max-w-3xl text-xl text-gray-600" // Gray text
            data-aos="zoom-y-out"
            data-aos-delay={300}
          >
            We are Eopsin Tech, a team of blockchain architects and engineers dedicated to delivering compliant, high-performance, and secure application solutions for the world's leading enterprises and Web3 innovators.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Complete Light Theme About Page Component ---
export default function AboutPageLight() {
  return (
    <main className="bg-gray-50">
      <AboutBanner />
      
      <div className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Stats Section - Light Theme Adjustment */}
          <section className="mt-0 grid gap-6 rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-aos="zoom-y-out" data-aos-delay={100 * index}>
                <stat.icon className="mx-auto h-8 w-8 text-blue-600 animate-pulse" />
                <p className="mt-2 text-4xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          {/* Pillars Section - Our Expertise - Light Theme Adjustment */}
          <section className="mt-24 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1" data-aos="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
                Our Expertise
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Proven frameworks for regulated and open crypto ecosystems.
              </h2>
              <p className="mt-4 text-gray-600">
                We embed compliance controls, tokenomics modeling, and multi-chain observability so your roadmap stays future-proof.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.title} 
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
                  data-aos="fade-up" 
                  data-aos-delay={150 * index}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
                  <p className="mt-2 text-gray-600">{pillar.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values Section - Light Theme Adjustment */}
          <section className="mt-24 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="rounded-2xl bg-white p-8 text-gray-900 border border-blue-500/10 transition duration-500 hover:bg-gray-100/50"
                data-aos="zoom-in"
                data-aos-delay={200 * index}
              >
                <value.icon className="h-10 w-10 text-blue-600 mb-4 animate-[float_4s_ease-in-out_infinite_both]" style={{animationDelay: `${index * 0.5}s`}} />
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Core Value
                </p>
                <h3 className="mt-4 text-2xl font-extrabold">{value.title}</h3>
                <p className="mt-3 text-gray-600">{value.body}</p>
              </div>
            ))}
          </section>

          {/* CTA Section - Light Theme Adjustment (Using the original hero's CTA style) */}
          <section className="mt-24 rounded-3xl bg-gray-900 p-10 text-white shadow-2xl" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold">Ready to build your next blockchain application?</h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              From chain selection and smart-contract architecture to observability dashboards, we partner end-to-end so your launch is compliant, performant, and user-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700"
              >
                Book a discovery call
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Explore case studies
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
