export default function SubBanner({ heading }) {
  return (
    <section className="bg-[url('/background/sub-banner-bg.png')] bg-cover bg-center mt-[2rem] md:mt-[5rem] lg:mt-[6rem]">
      <div className="bg-[linear-gradient(0deg,_rgba(16,_64,_153,_0.60)_0%,_rgba(16,_64,_153,_0.60)_100%)] h-40 lg:h-64 flex items-center justify-center">
        <h1 className="text-2xl lg:text-4xl font-medium text-center text-white">
          {heading}
        </h1>
      </div>
    </section>
  );
}
