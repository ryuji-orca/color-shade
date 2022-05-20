import { ChangeEventHandler } from 'react';
import { useSetRecoilState } from 'recoil';
import { ChengeTextColorState } from '../atoms/ChengeTextColorAtom';

export const useTextColor = () => {
  const setTextColor = useSetRecoilState(ChengeTextColorState);

  const ChengeTextColor: ChangeEventHandler<EventTarget> = (e) => {
    const eventTarget = e.target as HTMLElement;
    setTextColor(eventTarget.innerText);
  };
  return { ChengeTextColor };
};
