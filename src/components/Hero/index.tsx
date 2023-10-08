import Link from 'next/link';

const Hero = () => {
  return (
    <section
      id='home'
      className="box-shadow  bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat text-white"
    >
      <div className='max-height-screen box mx-auto grid h-[90vh] w-11/12 max-w-[1240px] content-center  gap-4 p-4 py-8 '>
        <div className='grid content-center w-full '>
          <div>
            <h3 className='py-2 text-xs uppercase'>Call us now</h3>
            <Link
              className='py-2 text-accent'
              target='_blank'
              rel='noreferrer'
              href='tel:+27727247569'
            >
              +27 74 049 1433
            </Link>
            <h1 className='py-2 leading-tight text-gray-200'>
              Register your company today.
            </h1>
            <h3 className='font-light mb-7 '>
              Includes everything you need to start an official company.
            </h3>

            <div className=' hover:animate-bounce w-max'>
              <Link
                target='_blank'
                rel='noreferrer'
                className='p-4 px-6 font-semibold rounded bg-primary animate-bounce '
                href='https://wa.me/message/GN3V7YGW4CIDO1'
              >
                FREE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
