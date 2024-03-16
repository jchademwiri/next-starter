import Link from 'next/link';

const ComingSoon = () => {
  return (
    <section className="mx-10 grid h-screen place-items-center text-center ">
      <div>
        <h1 className="py-6 text-4xl font-bold md:text-7xl">
          SITE UNDER <br /> CONSTRUCTION
        </h1>
        <p className="py-2 text-2xl font-thin tracking-wider  md:py-4 md:text-4xl">
          SITE NEARLY READY
        </p>
        <div className="my-2 h-2 w-full rounded-full bg-accent">
          <div className="h-2 w-1/4 rounded-full bg-primary"></div>
        </div>
        <h2 className="py-2 text-xl font-semibold md:text-3xl">
          Contact us Now
        </h2>
        <div className="grid py-2 md:grid-cols-2 md:py-4">
          <Link className="py-1 hover:text-primary" href="tel:+27740491433">
            +27 (0)74 0491433
          </Link>
          <Link
            className="py-1 hover:text-primary"
            href="mailto:info@playhousemedia.net"
          >
            info@playhousemedia.net
          </Link>
        </div>
      </div>
      <footer className="my-10 py-5 md:my-5">
        <p>
          © Developed by{' '}
          <Link
            rel="noreferrer"
            target="_blank"
            title="We Would Love to work with your business, call us now "
            href={`https://www.jacobc.co.za/`}
            className="text-primary"
          >
            Playhouse Media Group
          </Link>
        </p>
      </footer>
    </section>
  );
};
export default ComingSoon;
