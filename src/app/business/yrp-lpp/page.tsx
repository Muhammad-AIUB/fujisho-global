import Image from "next/image";

export default function YrpLppPage() {
  return (
    <main className="min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#D32F2F] mb-6 sm:mb-8">YRP-LPP</h1>
      
      <div className="space-y-6 sm:space-y-8">
        <div>
          <Image
            src="/yrp/1.jpg"
            alt="YRP-LPP Project Image 1"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>

        <div>
          <Image
            src="/yrp/2.jpg"
            alt="YRP-LPP Project Image 2"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>

        <div>
          <Image
            src="/yrp/3.jpg"
            alt="YRP-LPP Project Image 3"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}


