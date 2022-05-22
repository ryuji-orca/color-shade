import { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import Values from 'values.js';
import { ChengeTextColorState } from '../atoms/ChengeTextColorAtom';
import { InputInitialColor } from '../atoms/InputInitialColor';
import { ShadesColorAtom } from '../atoms/ShadesColorAtom';
import { TextBgColorState } from '../atoms/TextBgColorAtom';
import { TintsColorAtom } from '../atoms/TintsColorAtom';

export const useTintShade = () => {
  const [inputText, setInputText] = useState<string>('');
  const [inputColorBrightness, setInputColorBrightness] = useState<number>(0);
  const setColor = useSetRecoilState(InputInitialColor);
  const setShades = useSetRecoilState(ShadesColorAtom);
  const setTints = useSetRecoilState(TintsColorAtom);
  const setTextBg = useSetRecoilState(TextBgColorState);
  const setTextColor = useSetRecoilState(ChengeTextColorState);

  const changeInputText: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  const isValid = useCallback((colorCode: string) => {
    if (colorCode.indexOf('#') === 0) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorCode);
    } else {
      return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorCode);
    }
  }, []);

  const tintShadeButton: FormEventHandler<Element> = useCallback(
    (e) => {
      e.preventDefault();
      setTextBg('');
      setTextColor('');
      setColor(inputText);

      if (isValid(inputText)) {
        const colorValues = new Values(inputText.indexOf('#') !== 0 ? `#${inputText}` : inputText);
        const inputColor = colorValues.tint(0);
        const inputColorBrightness = inputColor.getBrightness();
        setInputColorBrightness(inputColorBrightness);
        const tintsColors = colorValues.tints(10);
        const shadesColors = colorValues.shades(10);
        const newTintsColors = [inputColor, ...tintsColors];
        const newShadesColors = [inputColor, ...shadesColors];
        setTints(newTintsColors);
        setShades(newShadesColors);
      } else {
        toast.error('有効な16進数のカラーを入力してください');
      }
    },
    [inputText],
  );
  return { inputText, tintShadeButton, changeInputText };
};
