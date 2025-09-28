"use client";

import { Check, Play } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

export default function Home() {
  const videos = useMemo(() => [
    { src: "/VDOS/Untitled design (1).mp4", title: "Company Overview" },
    { src: "/VDOS/Untitled design (2).mp4", title: "Our Services" },
    { src: "/VDOS/Untitled design (3).mp4", title: "Project Showcase" },
    { src: "/VDOS/Untitled design (4).mp4", title: "Technology Excellence" },
    { src: "/VDOS/Untitled design.mp4", title: "Partnership & Growth" }
  ], []);

  const [playingVideo, setPlayingVideo] = useState<string | null>(videos[0].src);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    setPlayingVideo(videos[nextIndex].src);
  };

  // Auto-play first video on page load
  useEffect(() => {
    if (playingVideo === videos[0].src) {
      const videoElement = videoRefs.current[playingVideo];
      if (videoElement) {
        videoElement.play().catch(() => {});
      }
    }
  }, [playingVideo, videos]);

  // Handle video play when switching
  useEffect(() => {
    if (playingVideo) {
      const videoElement = videoRefs.current[playingVideo];
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play().catch(() => {});
      }
    }
  }, [playingVideo]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0B0B] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 dark:from-black dark:via-red-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="text-[#D32F2F]">Powering Progress,</span>
              <br />
              Bridging Nations
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              At Fujisho Global Ltd., we are more than an EPC company — we are a bridge between Korea&apos;s
              advanced engineering expertise and Bangladesh&apos;s growing infrastructure needs. From
              substations to smart meters, from project design to commissioning, we stand at the intersection
              of innovation, reliability, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-800 via-teal-900 to-emerald-900 dark:from-emerald-900 dark:via-teal-950 dark:to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core <span className="text-[#D32F2F]">Identity</span>
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Subsidiary of Fujisho Corporation Korea, a proven leader in electrical construction.
                </p>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Specialized in EPC contracting and strategic trading for Bangladesh&apos;s power sector.
                </p>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Dedicated to delivering world-class technology with local accountability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-800 via-orange-900 to-amber-900 dark:from-amber-900 dark:via-orange-950 dark:to-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Story in <span className="text-[#D32F2F]">Motion</span>
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {playingVideo === video.src ? (
                    <div className="w-full h-64">
                      <video
                        ref={(el) => {
                          videoRefs.current[video.src] = el;
                        }}
                        src={video.src}
                        controls
                        autoPlay
                        preload="auto"
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                        onLoadedData={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.currentTime = 0;
                        }}
                        onCanPlay={(e) => {
                          const video = e.target as HTMLVideoElement;
                          if (playingVideo === video.src) {
                            video.play().catch(() => {});
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-64 flex items-center justify-center">
                      {/* Video thumbnail using first frame */}
                      <video
                        src={video.src}
                        muted
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        poster=""
                      />
                      
                      {/* Dark overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Play button */}
                      <button
                        onClick={() => {
                          setPlayingVideo(video.src);
                          setCurrentVideoIndex(index);
                        }}
                        className="relative z-10 group-hover:scale-110 transition-transform duration-300 bg-[#D32F2F] rounded-full p-6 shadow-lg hover:bg-[#B71C1C]"
                      >
                        <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Equipments Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-800 via-rose-900 to-red-900 dark:from-red-900 dark:via-rose-950 dark:to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-[#D32F2F]">Equipments</span>
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* All 22 Equipment Images */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/12kv-630A-Sf6-Gas-Insulated-Switchgear-Gis-Rmu.avif"
                  alt="12kV 630A SF6 Gas Insulated Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">SF6 Gas Insulated Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/2-1-7.jpg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/51bnu4bP1LL._UF1000,1000_QL80_.jpg"
                  alt="Power Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Power Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/a4b1dfe06a37bd85_800x800ar.png"
                  alt="Switchgear Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Switchgear Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Air-insulated-switchgearss.jpg"
                  alt="Air Insulated Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Air Insulated Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/download.jpeg"
                  alt="Power Distribution Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Power Distribution Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/drop-out-fuse-cutout-3.webp"
                  alt="Drop-out Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Drop-out Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/eaton-xgis-iso-september2019-500x500.jpg"
                  alt="Eaton XGIS Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Eaton XGIS Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Everything-about-Rooftop-Solar-Sytem-Installation.webp"
                  alt="Rooftop Solar Installation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Rooftop Solar Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Fuse-Cutout-Drop-out-Fuses-11kv (1).avif"
                  alt="11kV Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">11kV Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Fuse-Cutout-Drop-out-Fuses-11kv.avif"
                  alt="11kV Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">11kV Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/GOAB-Applicatoin-Page.jpg"
                  alt="GOAB Application"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">GOAB Applications</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (1).jpeg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (2).jpeg"
                  alt="Power Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Power Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (3).jpeg"
                  alt="Switchgear Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Switchgear Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (4).jpeg"
                  alt="Distribution Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Distribution Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (5).jpeg"
                  alt="Power Systems"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Power Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images.jpeg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/medium-voltage-ring-main-unit15077491624.webp"
                  alt="Medium Voltage Ring Main Unit"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Ring Main Unit</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/s2_2_02_img01.jpg"
                  alt="Power Distribution"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Power Distribution</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/solar1.avif"
                  alt="Solar Energy System"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Solar Energy Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/xEnergy_storage_hero-870x570.jpeg.pagespeed.ic.daYMaVYzoQ.webp"
                  alt="Energy Storage System"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Energy Storage Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
