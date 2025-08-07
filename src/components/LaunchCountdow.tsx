import { useEffect, useState } from 'react';

const LaunchCountdown = () => {
  const launchDate = new Date('2025-09-01T00:00:00');
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Launched!');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <p className="text-sm text-muted-foreground">
      Launching in <span className="font-semibold text-primary">{timeLeft}</span>
    </p>
  );
};

export default LaunchCountdown;
