import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { ShadesColorAtom } from '../../atoms/ShadesColorAtom';
import { TintsColorAtom } from '../../atoms/TintsColorAtom';
import { ColorBoxItem } from '../ColorBoxItem';

type Props = {
  title: string;
};

export const BackgroundColor: FC<Props> = ({ title }) => {
  const shades = useRecoilValue(ShadesColorAtom);
  const tints = useRecoilValue(TintsColorAtom);

  return (
    <div className='overflow-x-scroll py-6 pb-8 mx-auto max-w-4xl text-center hidden-scrollbar'>
      <div className='grid grid-cols-colorBoxItem gap-3 place-items-center md:gap-1'>
        {tints?.map((tint, index) => {
          return <ColorBoxItem title={title} tint={tint} index={index} key={index} />;
        })}
        {shades?.map((shade, index) => {
          return <ColorBoxItem title={title} shade={shade} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
