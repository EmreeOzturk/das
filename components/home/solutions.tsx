"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface IpQualityResult {
  isRisky: boolean;
  isProxy: boolean;
  isVPN: boolean;
  isTOR: boolean;
  isCrawler: boolean;
  isMobile: boolean;
  fraudScore: number;
  abuseVelocity: string;
  country_code: string;
  region: string;
  city: string;
  ISP: string;
  ASN: number;
  latitude: number;
  longitude: number;
  request_id: string;
}

const Solutions = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [result, setResult] = useState<IpQualityResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const solutions = [
    {
      number: "01",
      highlight: "ThreatShield IP",
      text: "Quickly verify your IP's security, detect any botnet links, and explore past cyberattack involvement.",
    },
    {
      number: "02",
      highlight: "IntelliGrid",
      text: "Analyze 150 million cyber threats monthly, leverage global intelligence via DePIN and discover actionable Web3 insights.",
    },
    {
      number: "03",
      highlight: "CyberPulse Map",
      text: "Mapping millions of daily attacks, real-time threat detection worldwide and a detailed view of the cyber landscape.",
    },
    {
      number: "04",
      highlight: "DomainTrust Scanner",
      text: "Pre-wallet security scan for Web3 projects, checking 42 parameters and ensuring trusted online experiences.",
    },
  ];

  useEffect(() => {
    const fetchClientIp = async () => {
      try {
        const response = await fetch('/API/get-ip');
        const data = await response.json();
        
        if (data.success && data.ipAddress) {
          setIpAddress(data.ipAddress); // Only set IP, don't check
        }
      } catch {
        setError("Failed to auto-detect IP address");
      }
    };

    fetchClientIp();
  }, []);

  const handleLookup = async () => {
    if (!ipAddress) {
      setError("Please enter an IP address");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/API/look-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ipAddress: ipAddress,
          strictness: 1
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message || "Failed to check IP address");
      }
    } catch {
      setError("Failed to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full pb-10 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header with IP Lookup */}
        <div
          id="solutions"
          className="flex flex-col items-center md:items-end mb-10 md:mb-20 w-full md:pr-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#9f01ff] text-5xl md:text-9xl"
          >
            Solutions
          </motion.h2>

          {/* IP Lookup Input */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full md:w-1/2 mt-8"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="Enter IP address to check"
                className="flex-1 p-3 bg-black text-white border-2 border-[#9f01ff] focus:outline-none"
              />
              <button
                onClick={handleLookup}
                disabled={isLoading}
                className="px-6 py-3 bg-[#9f01ff] text-white hover:bg-[#8000cc] transition-colors disabled:opacity-50"
              >
                {isLoading ? "Checking..." : "Check IP"}
              </button>
            </div>

            {/* Display Results */}
            {error && (
              <div className="mt-4 text-red-500 text-sm">{error}</div>
            )}

            {result && (
              <div className="mt-4 p-4 bg-black/50 border border-[#9f01ff]">
                <h3 className="text-[#9f01ff] text-lg mb-2">Security Report:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Fraud Score: <span className={result.fraudScore >= 75 ? "text-red-500" : "text-green-500"}>{result.fraudScore}</span></div>
                  <div>Proxy: <span className={result.isProxy ? "text-red-500" : "text-green-500"}>{result.isProxy ? "Yes" : "No"}</span></div>
                  <div>VPN: <span className={result.isVPN ? "text-red-500" : "text-green-500"}>{result.isVPN ? "Yes" : "No"}</span></div>
                  <div>TOR: <span className={result.isTOR ? "text-red-500" : "text-green-500"}>{result.isTOR ? "Yes" : "No"}</span></div>
                  <div>Country: {result.country_code}</div>
                  <div>Region: {result.region}</div>
                  <div>City: {result.city}</div>
                  <div>ISP: {result.ISP}</div>
                  <div>ASN: {result.ASN}</div>
                  <div>Coordinates: {result.latitude.toFixed(2)}, {result.longitude.toFixed(2)}</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-20 md:gap-y-32">
          {solutions.map((solution) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex gap-4 relative z-0 p-4 md:p-0`}
            >
              <div className="absolute inset-0 z-[-1]">
                {/* Görsel buraya yerleştirilecek */}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-[3rem] md:text-[5rem] leading-none">
                  {solution.number}
                </span>
                {solution.highlight && (
                  <p className="text-xl md:text-2xl pt-4 pb-2 leading-tight">
                    <span className="bg-[#9f01ff] text-white px-1">
                      {solution.highlight}
                    </span>
                  </p>
                )}
                <p className="text-white text-base md:text-lg leading-tight">
                  {solution.text}
                </p>
                {solution && (
                  <p className="text-white text-lg md:text-xl leading-tight"></p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
