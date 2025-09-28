"use client";

import { Check, Play } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

export default function Home() {
  const videos = useMemo(() => [
    { 
      src: "/videos/company.mp4", 
      title: "Company Overview",
      placeholder: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Company+Overview+Video"
    },
    { 
      src: "/videos/services.mp4", 
      title: "Our Services",
      placeholder: "https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Our+Services+Video"
    },
    { 
      src: "/videos/showcase.mp4", 
      title: "Project Showcase",
      placeholder: "https://via.placeholder.com/400x250/3a3a3a/ffffff?text=Project+Showcase+Video"
    },
    { 
      src: "/videos/technology.mp4", 
      title: "Technology Excellence",
      placeholder: "https://via.placeholder.com/400x250/4a4a4a/ffffff?text=Technology+Excellence+Video"
    },
    { 
      src: "/videos/partnership.mp4", 
      title: "Partnership & Growth",
      placeholder: "https://via.placeholder.com/400x250/5a5a5a/ffffff?text=Partnership+Growth+Video"
    }
  ], []);

  const [playingVideo, setPlayingVideo] = useState<string | null>(videos[0].src);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({});
  const [autoPlayStarted, setAutoPlayStarted] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    setPlayingVideo(videos[nextIndex].src);
    
    // Auto play next video after a short delay
    setTimeout(() => {
      const nextVideoElement = videoRefs.current[videos[nextIndex].src];
      if (nextVideoElement) {
        nextVideoElement.currentTime = 0;
        nextVideoElement.play().catch(() => {
          nextVideoElement.muted = true;
          nextVideoElement.play().catch(() => {});
        });
      }
    }, 500);
  };

  // Auto-start first video on page load
  useEffect(() => {
    if (!autoPlayStarted && videos.length > 0) {
      setAutoPlayStarted(true);
      const firstVideo = videos[0];
      setPlayingVideo(firstVideo.src);
      
      // Start first video after a short delay
      setTimeout(() => {
        const videoElement = videoRefs.current[firstVideo.src];
        if (videoElement) {
          videoElement.currentTime = 0;
          videoElement.muted = true; // Start muted for autoplay
          videoElement.play().catch((error) => {
            console.error('Auto play failed:', error);
          });
        }
      }, 1000);
    }
  }, [autoPlayStarted, videos]);

  // Handle video play when switching
  useEffect(() => {
    if (playingVideo && autoPlayStarted) {
      const videoElement = videoRefs.current[playingVideo];
      if (videoElement) {
        videoElement.currentTime = 0;
        // Try to play with sound, if fails, play muted
        videoElement.play().catch(() => {
          videoElement.muted = true;
          videoElement.play().catch((error) => {
            console.error('Video play failed:', error);
            setVideoErrors(prev => ({ ...prev, [playingVideo]: true }));
          });
        });
      }
    }
  }, [playingVideo, autoPlayStarted]);

  const handleVideoClick = (videoSrc: string, index: number) => {
    setPlayingVideo(videoSrc);
    setCurrentVideoIndex(index);
    setVideoErrors(prev => ({ ...prev, [videoSrc]: false }));
  };

  return (
    <main className="min-h-screen bg-white text-[#2c1810]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/videos/company.mp4"
          >
            <source src="/videos/company.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
              <span className="text-[#e57373]">Powering Progress,</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="block sm:inline">Bridging Nations</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2 drop-shadow-md">
              We are more than an EPC company — we are a bridge between Korea&apos;s
              advanced engineering expertise and Bangladesh&apos;s growing infrastructure needs. From
              substations to smart meters, from project design to commissioning, we stand at the intersection
              of innovation, reliability, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Core <span className="text-[#e57373]">Identity</span>
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Subsidiary of Our Corporation Korea, a proven leader in electrical construction.
                </p>
              </li>

              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Specialized in EPC contracting and strategic trading for Bangladesh&apos;s power sector.
                </p>
              </li>

              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Dedicated to delivering world-class technology with local accountability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our Story in <span className="text-[#e57373]">Motion</span>
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {playingVideo === video.src ? (
                    <div className="w-full h-48 sm:h-56 md:h-64">
                      {videoErrors[video.src] ? (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white p-4">
                          <div className="text-center">
                            <p className="text-lg mb-2">Video files not found</p>
                            <p className="text-sm text-gray-300 mb-4">
                              Git LFS files need to be downloaded
                            </p>
                            <div className="text-xs text-gray-400 mb-4">
                              Run: <code className="bg-gray-700 px-2 py-1 rounded">git lfs pull</code>
                            </div>
                            <button
                              onClick={() => handleVideoClick(video.src, index)}
                              className="bg-[#D32F2F] hover:bg-[#B71C1C] px-4 py-2 rounded-lg transition-colors"
                            >
                              Try Again
                            </button>
                          </div>
                        </div>
                      ) : (
                        <video
                          ref={(el) => {
                            videoRefs.current[video.src] = el;
                          }}
                          src={video.src}
                          controls
                          muted
                          preload="auto"
                          className="w-full h-full object-cover"
                          onEnded={handleVideoEnd}
                          onError={(e) => {
                            console.error('Video error:', e);
                            setVideoErrors(prev => ({ ...prev, [video.src]: true }));
                          }}
                          onLoadedData={(e) => {
                            const videoElement = e.target as HTMLVideoElement;
                            videoElement.currentTime = 0;
                          }}
                          onCanPlay={(e) => {
                            const videoElement = e.target as HTMLVideoElement;
                            if (playingVideo === video.src && autoPlayStarted) {
                              videoElement.play().catch(() => {
                                videoElement.muted = true;
                                videoElement.play().catch((error) => {
                                  console.error('Video play failed:', error);
                                  setVideoErrors(prev => ({ ...prev, [video.src]: true }));
                                });
                              });
                            }
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full h-48 sm:h-56 md:h-64 flex items-center justify-center">
                      {/* Video thumbnail - actual video frame */}
                      <video
                        src={video.src}
                        muted
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        poster=""
                      />
                      
                      {/* Dark overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* Play button */}
                      <button
                        onClick={() => handleVideoClick(video.src, index)}
                        className="relative z-10 group-hover:scale-110 transition-transform duration-300 bg-[#e57373] rounded-full p-4 sm:p-6 shadow-lg hover:bg-[#d32f2f]"
                      >
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" fill="currentColor" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Equipments Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our <span className="text-[#e57373]">Equipments</span>
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {/* All 22 Equipment Images */}
            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/12kv-630A-Sf6-Gas-Insulated-Switchgear-Gis-Rmu.avif"
                  alt="12kV 630A SF6 Gas Insulated Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">SF6 Gas Insulated Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/2-1-7.jpg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/51bnu4bP1LL._UF1000,1000_QL80_.jpg"
                  alt="Power Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Power Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/a4b1dfe06a37bd85_800x800ar.png"
                  alt="Switchgear Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Switchgear Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Air-insulated-switchgearss.jpg"
                  alt="Air Insulated Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Air Insulated Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/download.jpeg"
                  alt="Power Distribution Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Power Distribution Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/drop-out-fuse-cutout-3.webp"
                  alt="Drop-out Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Drop-out Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/eaton-xgis-iso-september2019-500x500.jpg"
                  alt="Eaton XGIS Switchgear"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Eaton XGIS Switchgear</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Everything-about-Rooftop-Solar-Sytem-Installation.webp"
                  alt="Rooftop Solar Installation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Rooftop Solar Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Fuse-Cutout-Drop-out-Fuses-11kv (1).avif"
                  alt="11kV Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">11kV Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/Fuse-Cutout-Drop-out-Fuses-11kv.avif"
                  alt="11kV Fuse Cutout"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">11kV Fuse Cutout</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/GOAB-Applicatoin-Page.jpg"
                  alt="GOAB Application"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">GOAB Applications</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (1).jpeg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (2).jpeg"
                  alt="Power Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Power Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (3).jpeg"
                  alt="Switchgear Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Switchgear Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (4).jpeg"
                  alt="Distribution Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Distribution Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images (5).jpeg"
                  alt="Power Systems"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Power Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/images.jpeg"
                  alt="Electrical Equipment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Electrical Equipment</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/medium-voltage-ring-main-unit15077491624.webp"
                  alt="Medium Voltage Ring Main Unit"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Ring Main Unit</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/s2_2_02_img01.jpg"
                  alt="Power Distribution"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Power Distribution</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/solar1.avif"
                  alt="Solar Energy System"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Solar Energy Systems</h3>
              </div>
            </div>

            <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
              <div className="aspect-square relative">
                <Image
                  src="/Equipments/xEnergy_storage_hero-870x570.jpeg.pagespeed.ic.daYMaVYzoQ.webp"
                  alt="Energy Storage System"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2c1810] leading-tight">Energy Storage Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
