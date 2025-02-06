"use client";

import { useEffect, useState } from "react";

const AttackDetails = () => {
  const DAILY_INCREMENT = 4_875_123; // Total attacks per day
  const VICTIM_INCREMENT = 5_000; // Victims per day
  const SECONDS_IN_A_DAY = 86400; // Number of seconds in a day
  const ATTACKS_PER_SECOND = DAILY_INCREMENT / SECONDS_IN_A_DAY;
  const VICTIMS_PER_SECOND = VICTIM_INCREMENT / SECONDS_IN_A_DAY;

  const [stats, setStats] = useState(() => {
    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).getTime();
    const secondsSinceStartOfDay = Math.floor(
      (now.getTime() - startOfDay) / 1000
    );
    const dayOfMonth = now.getDate();

    // Initialize values
    const detected_attacks_monthly =
      dayOfMonth * DAILY_INCREMENT +
      secondsSinceStartOfDay * ATTACKS_PER_SECOND;
    const detected_attacks_today = secondsSinceStartOfDay * ATTACKS_PER_SECOND;
    const total_victims =
      dayOfMonth * VICTIM_INCREMENT +
      secondsSinceStartOfDay * VICTIMS_PER_SECOND;

    return {
      detected_attacks_monthly,
      detected_attacks_today,
      total_victims,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      ).getTime();
      const secondsSinceStartOfDay = Math.floor(
        (now.getTime() - startOfDay) / 1000
      );
      const dayOfMonth = now.getDate();

      // Dynamically calculate values
      const detected_attacks_monthly =
        dayOfMonth * DAILY_INCREMENT +
        secondsSinceStartOfDay * ATTACKS_PER_SECOND;
      const detected_attacks_today =
        secondsSinceStartOfDay * ATTACKS_PER_SECOND;
      const total_victims =
        (dayOfMonth * VICTIM_INCREMENT +
          secondsSinceStartOfDay * VICTIMS_PER_SECOND) *
        3;

      setStats({
        detected_attacks_monthly,
        detected_attacks_today,
        total_victims,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [ATTACKS_PER_SECOND, VICTIMS_PER_SECOND]);

  // if (error) return <p>Error: {error}</p>;
  // if (!data) return <p>Loading...</p>;

  return (
    <div className="grid gap-24 py-2 grid-cols-3">
      <div className="">
        <h2>{Math.floor(stats.detected_attacks_today).toLocaleString()}</h2>
        <p className="text-2xl">Detected Attacks Today</p>
      </div>
      <div className="">
        <h2>{Math.floor(stats.detected_attacks_monthly).toLocaleString()}</h2>
        <p className="text-2xl">Detected Attacks This Month</p>
      </div>
      <div className="">
        <h2>{Math.floor(stats.total_victims).toLocaleString()}</h2>
        <p className="text-2xl">Total Victims</p>
      </div>
    </div>
  );
};

export default AttackDetails;
