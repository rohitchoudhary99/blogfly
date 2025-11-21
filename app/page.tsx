"use client";

const heroStory = {
  category: "Gadgets",
  title: "The Reason Why Everyone Love Apple MacBook",
  author: "John Doe",
  date: "12 August 2020",
  image:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
};

const relatedStories = [
  {
    label: "Tech",
    title: "What Will Virtual Reality Be Like In The Next 50 Years?",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Robot",
    title: "The Mayans’ Lost Guide To Artificial Intelligence",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Laptop",
    title: "How Product Development Can Increase Your Profit!",
    author: "John Doe",
    date: "12 August 2020",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6 lg:px-16">
      <div className="mx-auto w-full">
        {/* 1 column on mobile, 50/50 split from lg upwards using flex */}
        <section className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <article className="w-full rounded-[2rem] bg-white p-0 shadow-[0_25px_60px_rgba(15,23,42,0.15)] lg:w-3/5">
            <div
              className="relative h-[420px] overflow-hidden rounded-[2rem]"
              style={{ backgroundImage: `url(${heroStory.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-orange-700">
                  {heroStory.category}
                </span>
                <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
                  {heroStory.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-white/75">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    {heroStory.author}
                  </span>
                  <span>{heroStory.date}</span>
                </div>
              </div>
            </div>
          </article>

          <aside className="w-full space-y-4 lg:w-2/5">
            {relatedStories.map((story) => (
              <article
                key={story.title}
                className="flex w-full items-center gap-3 rounded-[1.5rem] bg-white px-4 py-3 shadow-[0_15px_25px_rgba(15,23,42,0.1)]"
              >
                <div
                  className="h-20 w-20 flex-shrink-0 rounded-[1rem] bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="flex-1 space-y-1">
                  <span className="inline-flex w-fit rounded-full bg-[#eef2ff] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#4f46e5]">
                    {story.label}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {story.title}
                  </h3>
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[var(--muted)]">
                    By {story.author} · {story.date}
                  </p>
                </div>
              </article>
            ))}
          </aside>
        </section>
      </div>
    </div>
  );
}
