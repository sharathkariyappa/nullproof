import React, { useState } from 'react';
import { saveUser } from '@/hooks/saveUser';
import LaunchCountdown from '@/components/LaunchCountdow';

const EarlyAccess = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    wallet: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await saveUser(form.name, form.email, form.wallet);
      setSubmitted(true);
    } catch (err) {
      console.error('❌ Failed to save user:', err);
    }
  };
  
  
  return (
    <section className="py-20 min-h-screen flex flex-col items-center justify-center bg-background-secondary text-center px-4">
      <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
        Get <span className="gradient-text">Early Access</span>
      </h2>

      <p className="text-xl text-muted-foreground font-light max-w-2xl mb-10">
        Be the first to experience exclusive perks, updates, and early features.
      </p>

      <div className="max-w-md w-full p-6 border rounded-2xl shadow-sm flex flex-col gap-4 items-center">
        {!submitted ? (
          <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-sm bg-background placeholder:text-muted-foreground"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-sm bg-background placeholder:text-muted-foreground"
              required
            />

            <input
              type="text"
              name="wallet"
              placeholder="Wallet Address"
              value={form.wallet}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-sm bg-background placeholder:text-muted-foreground"
              required
            />

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-primary text-white text-sm hover:opacity-90 transition"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <LaunchCountdown />

        )}
      </div>
    </section>
  );
};

export default EarlyAccess;
