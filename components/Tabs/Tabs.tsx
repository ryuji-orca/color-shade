import { Tab } from '@headlessui/react';
import { FC } from 'react';
import { useTabs } from '../../hooks/useTabs';
import { BackgroundColor } from '../BackgroundColor';
import { TextColor } from '../TextColor';

export const Tabs: FC = () => {
  const { classNames } = useTabs();

  return (
    <div className='mx-auto max-w-3xl'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-neutral-700 rounded-xl'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-300 ring-white ring-opacity-60',
                selected
                  ? 'bg-neutral-500 shadow'
                  : 'text-white hover:bg-neutral-500/[0.12] hover:text-white',
              )
            }
          >
            Background Color
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-300 ring-white ring-opacity-60',
                selected
                  ? 'bg-neutral-500 shadow'
                  : 'text-white hover:bg-neutral-500/[0.12] hover:text-white',
              )
            }
          >
            Text Color
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <BackgroundColor title='Background Color' />
          </Tab.Panel>
          <Tab.Panel>
            <TextColor title='Text Color' />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
