import Accordion from "./accordion";
import Image from "next/image";
import backImage from '../public/images/Blockchain.jpg'

export default function Faq() {
  return (
    <section className="relative bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated floating elements - Rain effect */}
      <div className="absolute inset-0 -z-10">
      <Image
      src={backImage}
      alt="Blockchain Background"
      fill
      priority
      placeholder="blur"
      className="object-cover object-center opacity-20"
    />
  </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Collection area at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        
        {/* Left side rain drops - 4 icons */}
        {/* Drop 1 - Left */}
        <div 
          className="absolute top-0 left-8"
          style={{
            animation: 'fall-collect-left-1 8s linear infinite'
          }}
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/bitcoin.svg"
              alt="Bitcoin"
              width={32}
              height={32}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 2 - Left */}
        <div 
          className="absolute top-0 left-16"
          style={{
            animation: 'fall-collect-left-2 10s linear infinite',
            animationDelay: '2s'
          }}
        >
          <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/ethereum.svg"
              alt="Ethereum"
              width={28}
              height={28}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 3 - Left */}
        <div 
          className="absolute top-0 left-24"
          style={{
            animation: 'fall-collect-left-3 12s linear infinite',
            animationDelay: '4s'
          }}
        >
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/solana.svg"
              alt="Solana"
              width={24}
              height={24}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 4 - Left */}
        <div 
          className="absolute top-0 left-32"
          style={{
            animation: 'fall-collect-left-4 9s linear infinite',
            animationDelay: '6s'
          }}
        >
          <div className="w-18 h-18 bg-orange-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/bitcoin-gold.svg"
              alt="Bitcoin Gold"
              width={36}
              height={36}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Right side rain drops - 4 icons */}
        {/* Drop 1 - Right */}
        <div 
          className="absolute top-0 right-8"
          style={{
            animation: 'fall-collect-right-1 11s linear infinite',
            animationDelay: '1s'
          }}
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/bitcoin.svg"
              alt="Bitcoin"
              width={32}
              height={32}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 2 - Right */}
        <div 
          className="absolute top-0 right-16"
          style={{
            animation: 'fall-collect-right-2 9s linear infinite',
            animationDelay: '3s'
          }}
        >
          <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/ethereum.svg"
              alt="Ethereum"
              width={28}
              height={28}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 3 - Right */}
        <div 
          className="absolute top-0 right-24"
          style={{
            animation: 'fall-collect-right-3 13s linear infinite',
            animationDelay: '5s'
          }}
        >
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/solana.svg"
              alt="Solana"
              width={24}
              height={24}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Drop 4 - Right */}
        <div 
          className="absolute top-0 right-32"
          style={{
            animation: 'fall-collect-right-4 10s linear infinite',
            animationDelay: '7s'
          }}
        >
          <div className="w-18 h-18 bg-orange-500/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/bitcoin-gold.svg"
              alt="Bitcoin Gold"
              width={36}
              height={36}
              className="animate-pulse"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="pb-12 pt-8 md:pb-20 md:pt-16">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-6 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200">
              <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-sm font-medium leading-4 text-white shadow-sm">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Blockchain & Crypto Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our Web3 development services and blockchain applications
            </p>
          </div>

          {/* Faq */}
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <Accordion
                title="What blockchain platforms do you support for development?"
                id="faq-1"
                active={true}
              >
                We specialize in multiple blockchain platforms including Ethereum, Polygon, Solana, Binance Smart Chain, and Avalanche. Our team has extensive experience in cross-chain development and can help you choose the best platform based on your specific use case, scalability requirements, and cost considerations.
              </Accordion>

              <Accordion
                title="How do you ensure the security of smart contracts?"
                id="faq-2"
              >
                Security is paramount in our development process. We conduct comprehensive security audits, formal verification, and penetration testing. Our smart contracts undergo multiple rounds of review by experienced auditors, and we implement industry best practices including reentrancy guards, overflow protection, and access control mechanisms.
              </Accordion>

              <Accordion
                title="What types of DeFi applications can you build?"
                id="faq-3"
              >
                We develop comprehensive DeFi solutions including decentralized exchanges (DEXs), lending protocols, yield farming platforms, liquidity pools, staking mechanisms, and cross-chain bridges. Our DeFi applications feature robust risk management, automated market makers, and integration with major decentralized finance protocols.
              </Accordion>

              <Accordion
                title="Do you provide NFT marketplace development?"
                id="faq-4"
              >
                Yes, we specialize in NFT marketplace development with features like lazy minting, multi-chain support, royalty management, and advanced filtering. Our NFT platforms include creator dashboards, collection management tools, and seamless integration with popular wallets and marketplaces.
              </Accordion>

              <Accordion
                title="How do you handle regulatory compliance for crypto projects?"
                id="faq-5"
              >
                Regulatory compliance is crucial for crypto projects. We help implement KYC/AML procedures, transaction monitoring systems, and compliance reporting tools. Our team works closely with legal experts to ensure your project meets relevant regulatory requirements in target jurisdictions.
              </Accordion>

              <Accordion
                title="What wallet integrations do you support?"
                id="faq-6"
              >
                We integrate with all major crypto wallets including MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and Ledger hardware wallets. Our applications support both browser extensions and mobile wallet connections with seamless user experience across different devices and platforms.
              </Accordion>


            </div>
          </div>
        </div>
      </div>

      {/* Global styles for rain animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Left side collection animations */
          @keyframes fall-collect-left-1 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 120px)) translateX(20px) rotate(180deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-left-2 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 140px)) translateX(15px) rotate(150deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-left-3 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 100px)) translateX(25px) rotate(120deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-left-4 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 160px)) translateX(10px) rotate(90deg); 
              opacity: 1;
            }
          }
          
          /* Right side collection animations */
          @keyframes fall-collect-right-1 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 130px)) translateX(-20px) rotate(-180deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-right-2 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 110px)) translateX(-15px) rotate(-150deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-right-3 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 150px)) translateX(-25px) rotate(-120deg); 
              opacity: 1;
            }
          }
          
          @keyframes fall-collect-right-4 {
            0% { 
              transform: translateY(-100px) translateX(0px) rotate(0deg); 
              opacity: 0;
            }
            10% { 
              opacity: 1;
            }
            85% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(calc(100vh - 90px)) translateX(-10px) rotate(-90deg); 
              opacity: 1;
            }
          }
        `
      }} />
    </section>
  );
}