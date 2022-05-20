import { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ChengeTextColorState } from '../../atoms/ChengeTextColorAtom';
import { InputInitialColor } from '../../atoms/InputInitialColor';
import { ShadesColorAtom } from '../../atoms/ShadesColorAtom';
import { TextBgColorState } from '../../atoms/TextBgColorAtom';
import { TintsColorAtom } from '../../atoms/TintsColorAtom';
import { CopyBlockItem } from '../CopyBlockItem';
import { CopyBlockList } from '../CopyBlockList';

export const Preview: FC = () => {
  const [inputColorBrightness, setInputColorBrightness] = useState<number>(0);
  const color = useRecoilValue(InputInitialColor);
  const shades = useRecoilValue(ShadesColorAtom);
  const tints = useRecoilValue(TintsColorAtom);
  const textBg = useRecoilValue(TextBgColorState);
  const textColor = useRecoilValue(ChengeTextColorState);

  return (
    <>
      {tints.length !== 0 && shades.length !== 0 ? (
        <div className='mx-auto max-w-xl'>
          <div
            style={
              textBg
                ? { backgroundColor: '#' + textBg }
                : {
                    backgroundColor: color.indexOf('#') !== 0 ? `#${color}` : color,
                  }
            }
            className={`h-80 rounded-2xl flex justify-center items-center`}
          >
            <p
              className='text-2xl'
              style={
                textColor
                  ? { color: '#' + textColor }
                  : inputColorBrightness >= 50
                  ? { color: 'black' }
                  : { color: 'white' }
              }
            >
              Text
            </p>
          </div>

          <CopyBlockList
            bgCopyBlockItem={<CopyBlockItem bgCopyBlock={true} />}
            textCopyBlockItem={<CopyBlockItem />}
          />
        </div>
      ) : null}
    </>
  );
};
