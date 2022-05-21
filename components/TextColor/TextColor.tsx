import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { ShadesColorAtom } from '../../atoms/ShadesColorAtom';
import { TintsColorAtom } from '../../atoms/TintsColorAtom';
import { useTextColor } from '../../hooks/useTextColor';
import { ColorBoxItem } from '../ColorBoxItem';

type Props = {
  title: string;
};

export const TextColor: FC<Props> = ({ title }) => {
  const blackBoxItems = ['333333', '444444', '555555'];
  const shades = useRecoilValue(ShadesColorAtom);
  const tints = useRecoilValue(TintsColorAtom);
  const { ChengeTextColor } = useTextColor();

  return (
    <div className='overflow-x-scroll py-6 pb-8 mx-auto max-w-4xl text-center hidden-scrollbar'>
      <div className='grid grid-cols-colorBoxItem gap-3 place-items-center pb-3 md:gap-1'>
        {tints && shades
          ? blackBoxItems.map((blackBoxItem) => (
              <div
                className='aspect-square w-16 h-16 rounded-full shadow-xl cursor-pointer'
                style={{ backgroundColor: '#' + blackBoxItem }}
                onClick={ChengeTextColor}
                key={blackBoxItem}
              >
                <span className='opacity-0' style={{ color: '#' + blackBoxItem }}>
                  {blackBoxItem}
                </span>
              </div>
            ))
          : null}
      </div>
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
