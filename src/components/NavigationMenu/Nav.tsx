import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { Menu } from './Menu';
import { MobileMenu } from './MobileNav';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-4 max-w-6xl mx-auto w-[80%]'>
      <Link href='/' className='font-semibold'>
        JC
      </Link>
      <div className='flex items-center gap-1'>
        <div className='hidden md:block'>
          <Menu />
        </div>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default Nav;
