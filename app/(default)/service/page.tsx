export const metadata = {
    title: "Services – Blockchain & Crypto Application Solutions",
    description:
      "Explore Eopsin Tech's comprehensive blockchain and crypto services: smart contract development, DeFi solutions, wallet infrastructure, and more.",
  };
  
  const services = [
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and custom dApps with multi-chain compatibility.",
      features: ["Solidity/Rust development", "Formal verification", "Gas optimization", "Cross-chain bridges"],
      icon: "🔐",
    },
    {
      title: "DeFi Protocol Engineering",
      description: "End-to-end DeFi solutions including AMMs, lending protocols, yield farming, and staking mechanisms.",
      features: ["Protocol design", "Liquidity management", "Yield strategies", "Risk assessment"],
      icon: "💰",
    },
    {
      title: "Wallet & Infrastructure",
      description: "Non-custodial wallets, MPC signing, key management, and scalable blockchain infrastructure.",
      features: ["Multi-signature wallets", "Hardware wallet integration", "Custodial solutions", "API gateways"],
      icon: "👛",
    },
    {
      title: "NFT Marketplace Development",
      description: "Complete NFT platforms with minting, trading, royalties, and secondary market functionality.",
      features: ["ERC-721/1155 standards", "Royalty enforcement", "Marketplace UI/UX", "Rarity tools"],
      icon: "🎨",
    },
    {
      title: "Security Auditing & Monitoring",
      description: "Comprehensive security assessments, penetration testing, and continuous monitoring solutions.",
      features: ["Smart contract audits", "Runtime monitoring", "Bug bounties", "Incident response"],
      icon: "🛡️",
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic guidance on tokenomics, governance, regulatory compliance, and ecosystem integration.",
      features: ["Token economics", "Regulatory compliance", "Governance design", "Ecosystem strategy"],
      icon: "📊",
    },
  ];
  
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, assess technical feasibility, and create a detailed roadmap with milestones.",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "Design scalable architectures, select appropriate blockchain networks, and plan security measures.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Implement smart contracts, build frontend interfaces, and conduct thorough testing across environments.",
    },
    {
      step: "04",
      title: "Audit & Deployment",
      description: "Security audits, mainnet deployment, monitoring setup, and post-launch support.",
    },
  ];
  
  export default function Services() {
    return (
      <main className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <section className="flex flex-col gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Our Services
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Comprehensive blockchain and crypto application development services.
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              From concept to mainnet deployment, we provide end-to-end solutions for Web3 projects of all sizes.
            </p>
          </section>
  
          <section className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-indigo-200">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-500">
                      <span className="mr-2 text-indigo-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-10" />
              </div>
            ))}
          </section>
  
          <section className="mt-24 rounded-3xl bg-slate-900 p-10 text-white">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                How we bring your blockchain vision to life
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-lg font-bold">
                    {phase.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{phase.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="mt-24 rounded-3xl bg-gradient-to-r from-indigo-600 to-slate-900 p-10 text-white">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-semibold">Ready to start your blockchain project?</h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Let's discuss your requirements and create a custom solution that fits your needs and timeline.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg"
                  >
                    Get started today
                  </a>
                  <a
                    href="/case-studies"
                    className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
                  >
                    View our work
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-indigo-300">50+</div>
                    <div className="text-sm text-slate-300">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-300">99.9%</div>
                    <div className="text-sm text-slate-300">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-300">24/7</div>
                    <div className="text-sm text-slate-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }