import Image from "next/image";

export default function GreenEnergyPage() {
  return (
    <main className="min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#D32F2F] mb-6 sm:mb-8">Green Energy</h1>
      
      <div className="space-y-6 sm:space-y-8">
        <div>
          <Image
            src="/green/10.jpg"
            alt="Green Energy Image 1"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}


