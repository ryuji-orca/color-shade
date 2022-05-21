import { FC } from 'react';
import { useTintShade } from '../../hooks/useTintShade';

export const Form: FC = () => {
  const { inputText, tintShadeButton, changeInputText } = useTintShade();

  return (
    <form
      action={inputText.indexOf('#') !== 0 ? `#${inputText}` : inputText}
      method='post'
      onSubmit={tintShadeButton}
      className='pb-8 m-auto w-full max-w-xl md:pt-32 md:pb-16'
    >
      <div>
        <label
          htmlFor='exampleFormControlTextarea1'
          className='inline-block pb-6 text-lg font-bold text-gray-300 md:text-xl'
        >
          Please enter a hex color
        </label>
        <input
          className='
            block
            p-3
            m-0
            w-full
            text-base
            font-normal
            text-gray-700
            focus:text-gray-700
            bg-clip-padding bg-white
            focus:bg-white rounded border
            border-gray-300
            focus:border-blue-600
            border-solid
            focus:outline-none
            transition ease-in-out'
          id='exampleFormControlTextarea1'
          type='text'
          name='color'
          placeholder='#0077b6'
          value={inputText}
          onChange={changeInputText}
          maxLength={7}
        />
      </div>
      <button
        type='submit'
        className='block py-2 px-4 mt-6  text-white bg-gray-500 hover:bg-gray-700 rounded'
      >
        Make
      </button>
    </form>
  );
};
