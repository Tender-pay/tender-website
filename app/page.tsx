import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto text-center w-full">
      {/* Top Nav Bar */}
      <div className="w-full p-6">
        <Image src="/Tender_Logo_Inverted_With_Type.svg" alt="Tender Logo" width={192} height={64}/>
      </div>
      
      
      <div className="mt-30 mx-auto">
        <h1 className="text-6xl text-gray-900 font-bold">Pay with crypto. For real this time.</h1>
      </div>

      {/* Feature Cards */}
      <section className="mt-45 w-full mx-auto bg-gray-100 py-12">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard title="Non-custodial" description="With Tender, merchants hold their own keys. Tender never touches funds. A platform breach can't compromise merchant money because there's nothing to take."/>
          <FeatureCard title="Atomic Settlement" description="When a customer pays with Tender, there are no settlement times or chargebacks. If a transaction fails, it reverts."/>
          <FeatureCard title="One Button" description="Tender provides a checkout button that integrates seamlessly with existing merchant infrastructure. Customers recognize it. Adding it is made easy for merchants through the use of SDKs."/>
          <FeatureCard title="Zero Merchant Fees" description=" When a customer pays with Tender, they pay 1.5% embedded in the displayed price. Merchants pay nothing and always receive their full list price in stablecoins."/>
        </div>
      </section>

      {/* Get in Touch */}
      <a href="mailto:liam@tenderpay.io" className="inline-block mt-16 rounded-full bg-[#ec9614] px-8 py-5 text-white text-xl font-medium hover:bg-[#ffc56d] transition-colors">
        Get in Touch
      </a>

      {/* Footer */}
      <footer className="mt-16 w-full bg-gray-100 px-6 py-6 flex items-center justify-between">
        <Image src="/Tender_Logo_Inverted_With_Type.svg" alt="Tender Logo" width={128} height={42} className="mt-auto"/>
        <div className="flex flex-col items-end gap-2">
          <a href="https://www.linkedin.com/company/tender-hq" target="_blank" rel="noopener noreferrer">
            <Image src="/LinkedIn_Icon.svg" alt="LinkedIn" width={24} height={24}/>
          </a>
          <p className="mt-4 text-sm text-gray-400">© 2025 Tender</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-w-[150px] min-h-[150px] rounded-2xl border border-gray-200 bg-white px-6 py-8 hover:shadow-md transition-shadow">
      <h3 className="text-lg text-gray-800 font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

/* 
  - Logo with type, round off corners on logos and reexport
  - Immediately into description hero text. Tagline. Maybe "Pay with crypto. For real this time."
  - Something about the button that sits alongside Apple Pay and PayPal.
  - Features cards:
    - Non-custodial. You control your funds.
    - No centralized exchanges. No middle man. No risk of being frozen.
    - Easy integration with SDKs
    - Zero merchant fees. Customer pays 1.5%. Merchant pays nothing.
  - Get in touch
  - Copyright.

  

    Tender just works. YOu put up a button. 
    You have the button link to your backend and send a simple API request based on the customers cart. This is done with an SDK function call.
    You get back a transaction ID. You get a webhook when the transaction has completed meaning funds are already in your wallet.
*/

