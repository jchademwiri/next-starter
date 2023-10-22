import Link from 'next/link';
import { socials, TSocial } from './data';
import { randomUUID } from 'crypto';

const Footer = () => {
  return (
    <footer>
      <article className='grid place-items-center py-4 md:flex md:justify-between w-11/12 max-w-[1240px] mx-auto'>
        <div className='my-1 flex gap-4'>
          {socials.map(({ link, follow, icon }: TSocial) => (
            <div
              key={randomUUID()}
              className='cursor-pointer py-2 hover:text-primary md:p-4'
            >
              <Link
                href={link}
                target='_blank'
                title={follow}
                aria-label='Contact with sithembe Transportation and projects'
              >
                {icon}
              </Link>
            </div>
          ))}
        </div>
        <div className='my-1'>
          <p>
            Made with Love{' '}
            <Link
              href='https://www.jacobc.co.za'
              className='text-primary'
              aria-label='Contact with sithembe Transportation and projects'
            >
              Jacob Chademwiri
            </Link>
          </p>
        </div>
        <div className='my-1'>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.{' '}
          </p>
        </div>
      </article>
    </footer>
  );
};
export default Footer;
