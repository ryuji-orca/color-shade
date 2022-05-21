import Link from 'next/link';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
export const Footer: FC = () => {
  return (
    <footer className='pb-6 bg-neutral-900 md:py-6'>
      <ul className='flex justify-center items-center'>
        <li className=' '>
          <Link href='https://github.com/ryuji-orca/color-shade'>
            <a>
              <FaGithub className='w-8 h-8 text-white  rounded-full hover:opacity-50' />
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
