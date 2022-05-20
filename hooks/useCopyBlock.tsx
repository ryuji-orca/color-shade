import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ChengeTextColorState } from '../atoms/ChengeTextColorAtom';
import { InputInitialColor } from '../atoms/InputInitialColor';
import { TextBgColorState } from '../atoms/TextBgColorAtom';

type Props = {
  bgCopyBlock?: boolean;
};

export const useCopyBlock = ({ bgCopyBlock }: Props) => {
  const [inputColorBrightness, setInputColorBrightness] = useState<number>(0);
  const [isBgColorCopied, setIsBgColorCopied] = useState<boolean>(false);
  const textBg = useRecoilValue(TextBgColorState);
  const textColor = useRecoilValue(ChengeTextColorState);
  const color = useRecoilValue(InputInitialColor);

  const onBgColorCopied = useCallback(() => {
    setIsBgColorCopied(true);
    setTimeout(() => {
      setIsBgColorCopied(false);
    }, 1000);
  }, []);

  const onCopyText = useCallback(() => {
    if (bgCopyBlock) {
      return textBg ? '#' + textBg : color.indexOf('#') !== 0 ? `#${color}` : color;
    }

    return textColor ? '#' + textColor : inputColorBrightness >= 50 ? '#000' : '#fff';
  }, [textBg, textColor]);

  const bgCopyBlockBackground = useCallback(() => {
    if (textBg) {
      return { backgroundColor: '#' + textBg };
    }
    if (color.indexOf('#') !== 0) {
      return { backgroundColor: `#${color}` };
    }
    return { backgroundColor: color };
  }, [textBg, color]);

  const textCopyBlockBackground = useCallback(() => {
    if (textColor) {
      return { backgroundColor: '#' + textColor };
    }
    if (inputColorBrightness >= 50) {
      return { backgroundColor: 'black', color: 'white' };
    }
    return { backgroundColor: 'white', color: 'black' };
  }, [textColor]);

  return {
    isBgColorCopied,
    onBgColorCopied,
    onCopyText,
    bgCopyBlockBackground,
    textCopyBlockBackground,
  };
};
