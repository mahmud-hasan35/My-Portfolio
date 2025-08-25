export default function LogoMarquee() {
  const logos = [
    "/icon/html-1.svg",
    "/icon/css-3.svg",
    "/icon/tailwindcss.svg",
    "/icon/javascript-r.svg",
    "/React-icon.svg",
    "/icon/nodejs-1.svg",
    "/icon/next-js.svg",
    "/icon/firebase-2.svg",
    "/icon/mongodb-icon-1-1.svg",
    "/icon/git-bash.svg",
  ];

  return (
<div className="logo-container logo-glow max-w-full mx-auto">
  <div className="flex animate-marquee gap-10">
    {logos.concat(logos).map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="logo"
        className="w-12 h-12 sm:w-16 sm:h-16" // mobile = 3rem(=48px), sm and above = 4rem(=64px)
      />
    ))}
  </div>
</div>

  );
}
