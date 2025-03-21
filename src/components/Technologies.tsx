const logos = [
  "../assets/img/js.svg",
  "../assets/img/html.svg",
  "../assets/img/css.svg",
  "../assets/img/ts.svg",
  "../assets/img/react.svg",
];

export const Technologies = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden bg-zinc-600 py-8 rounded-2xl mt-5 group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-600 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-600 to-transparent z-10"></div>

      <div className="flex w-full gap-8">
        <div className="flex min-w-max animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo}
              alt="Brand"
              className="h-16 w-auto mx-4"
            />
          ))}
        </div>
        <div
          className="flex min-w-max animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {duplicatedLogos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo}
              alt="Brand"
              className="h-16 w-auto mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
