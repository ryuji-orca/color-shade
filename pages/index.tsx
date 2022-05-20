import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { ShadesColorAtom } from '../atoms/ShadesColorAtom';
import { TintsColorAtom } from '../atoms/TintsColorAtom';
import { Form } from '../components/Form';
import { Preview } from '../components/Preview';
import { Tabs } from '../components/Tabs';

const Home: NextPage = () => {
  const shades = useRecoilValue(ShadesColorAtom);
  const tints = useRecoilValue(TintsColorAtom);

  return (
    <div className='p-5 min-h-screen bg-neutral-900 md:p-0'>
      <Form />
      <Preview />
      {tints.length !== 0 && shades.length !== 0 ? <Tabs /> : null}
    </div>
  );
};

export default Home;
