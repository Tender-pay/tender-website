import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto text-center w-full">
      {/* Top Nav Bar */}
      <div className="w-full p-8 flex items-left">
        <TenderLogo width={192} height={64} className="inline-block"/>
      </div>
      
      <div className="mt-20 md:mt-40 mx-auto px-10 md:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold font-jakarta">Pay with crypto. For real this time.</h1>
      </div>

      {/* Feature Cards */}
      <section className="mt-35 md:mt-45 w-full mx-auto bg-gray-100 py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[1fr] gap-8 max-w-4xl mx-auto">
          <FeatureCard title="One Button" description="Tender provides a checkout button that integrates seamlessly with existing merchant infrastructure. Customers recognize it. Adding it is made easy for merchants through the use of SDKs."/>
          <FeatureCard title="Non-custodial" description="With Tender, merchants hold their own keys. Tender never touches funds. A platform breach can't compromise merchant money because there's nothing to take."/>
          <FeatureCard title="Atomic Settlement" description="When a customer pays with Tender, if a transaction fails, it reverts. If it succeeds, the merchant receives their funds immediately. There are no settlement times or chargebacks."/>
          <FeatureCard title="Zero Merchant Fees" description=" When a customer pays with Tender, they pay 1.5% embedded in the displayed price. Merchants pay nothing and always receive their full list price in stablecoins."/>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 w-full">
        <a href="mailto:liam@tenderpay.io" className="inline-block rounded-full bg-[#ec9614] px-12 py-6 text-white text-2xl font-bold font-inter hover:bg-[#ffc56d] shadow-lg hover:scale-101 transition-all duration-100">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 p-6 flex items-center justify-between">
        <TenderLogo width={128} height={42} className="mt-auto"/>
        <div className="flex flex-col items-end">
          <a href="https://www.linkedin.com/company/tender-hq" target="_blank" rel="noopener noreferrer" className="mt-2">
            <Image src="/LinkedIn_Icon.svg" alt="LinkedIn" width={32} height={32}/>
          </a>
          <p className="mt-8 text-sm text-gray-400">© {new Date().getFullYear()} Tender</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-w-[150px] max-w-[400px] min-h-[250px] mx-auto rounded-2xl border border-gray-200 bg-white px-8 py-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-inter text-gray-800 font-bold">{title}</h3>
      <p className="mt-2 font-sans font-regular text-gray-600">{description}</p>
    </div>
  );
}

function TenderLogo({width, height, className}: {width: number; height: number; className?: string}) {
  return (
    <a href="https://tenderpay.io/" className={className}>
      <Image src="/Tender_Logotype.svg" alt="Tender Logo" width={width} height={height}/>
    </a>
  )
}