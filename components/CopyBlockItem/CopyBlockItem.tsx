import { BadgeCheckIcon, DuplicateIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCopyBlock } from '../../hooks/useCopyBlock';

type Props = {
  bgCopyBlock?: boolean
}

export const CopyBlockItem: FC<Props> = ({ bgCopyBlock }) => {
  const {
    isBgColorCopied,
    onBgColorCopied,
    onCopyText,
    bgCopyBlockBackground,
    textCopyBlockBackground,
  } = useCopyBlock({ bgCopyBlock });

  return (
    <>
      <CopyToClipboard text={onCopyText()} onCopy={onBgColorCopied}>
        <div className='my-6'>
          <div
            style={bgCopyBlock ? bgCopyBlockBackground() : textCopyBlockBackground()}
            className='group flex justify-center items-center  w-16 h-16 rounded-lg cursor-pointer'
          >
            <div className='group-hover: invisible group-hover:visible p-2 w-10 h-10 bg-white rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out translate-y-2 group-hover:translate-y-0'>
              {isBgColorCopied ? <BadgeCheckIcon className='text-green-500' /> : <DuplicateIcon />}
            </div>
          </div>
          <span className='block pt-2 text-sm text-center text-gray-300'>{onCopyText()}</span>
        </div>
      </CopyToClipboard>
    </>
  );
};
