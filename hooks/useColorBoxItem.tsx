import { ChangeEventHandler, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import Values from 'values.js';
import { ChengeTextColorState } from '../atoms/ChengeTextColorAtom';
import { TextBgColorState } from '../atoms/TextBgColorAtom';
import { ColorBoxData } from '../types/ColorBoxData';

type Props = Pick<ColorBoxData, 'tint' | 'shade'>;

export const useColorBoxItem = ({ tint, shade }: Props) => {
  const setTextBg = useSetRecoilState(TextBgColorState);
  const setTextColor = useSetRecoilState(ChengeTextColorState);

  const TextBgColor: ChangeEventHandler<EventTarget> = useCallback((e) => {
    const eventTarget = e.target as HTMLElement;
    setTextBg(eventTarget.innerText);
  }, []);

  const ChengeTextColor: ChangeEventHandler<EventTarget> = useCallback((e) => {
    const eventTarget = e.target as HTMLElement;
    setTextColor(eventTarget.innerText);
  }, []);

  const isTint = (tint: Values | undefined): tint is Values => {
    return tint !== undefined;
  };

  const isShade = (shade: Values | undefined): shade is Values => {
    return shade !== undefined;
  };

  const hex = isTint(tint) ? tint.hex : isShade(shade) ? shade.hex : undefined;

  return { hex, TextBgColor, ChengeTextColor };
};
