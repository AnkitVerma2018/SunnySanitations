"use client";

import { useState } from "react";

export default function CareerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await fetch("/api/career", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
     throw new Error(data.message || "Something went wrong");
    }

    alert("Application submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    alert("Failed to submit application.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C8A46B] uppercase tracking-[0.35em] text-xs">
            Careers
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            Join Our Team
          </h2>

          <p className="text-white/60 mt-5 leading-7">
            We're always looking for passionate designers, architects and
            creative professionals.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-[#0D0D0D] p-8 md:p-10 space-y-6"
        >
          <div>
            <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-[#C8A46B]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@email.com"
                className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-[#C8A46B]"
              />
            </div>

            <div>
              <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-[#C8A46B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
              Position Applying For
            </label>

            <input
              type="text"
              name="position"
              required
              value={form.position}
              onChange={handleChange}
              placeholder="Interior Designer"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-[#C8A46B]"
            />
          </div>

          <div>
            <label className="block text-white/70 text-xs uppercase tracking-widest mb-2">
              Tell Us About Yourself
            </label>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write a short introduction..."
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-[#C8A46B]"
            />
          </div>

          <button
  type="submit"
  disabled={loading}
  className="w-full border border-[#C8A46B] py-4 uppercase tracking-[0.3em] text-[#C8A46B] transition-all duration-300 hover:bg-[#C8A46B] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit Application"}
</button>
        </form>
      </div>
    </section>
  );
}