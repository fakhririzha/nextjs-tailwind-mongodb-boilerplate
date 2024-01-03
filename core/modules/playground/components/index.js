import { clsx } from 'clsx/lite';

import Combobox from '@lib/components/combobox';
import Popover from '@lib/components/popover';
import Tooltip from '@lib/components/tooltip';

const PlaygroundComponents = () => {
    const comboboxData = [
        {
            label: 'Option 1',
            value: 'option-1',
            onClick: () => console.log('Option 1 clicked'),
        },
        {
            label: 'Option 2',
            value: 'option-2',
        },
        {
            label: 'Option 3',
            value: 'option-3',
        },
        {
            label: 'Option 4',
            value: 'option-4',
        },
        {
            label: 'Option 5',
        },
    ];

    return (
        <div
            className={clsx(
                'playground-section',
                'mx-auto',
                'desktop:max-w-[1280px]',
                'px-10',
                'py-4'
            )}
        >
            <Popover content={<div>Popover content</div>} placement="right">
                This is a popover
            </Popover>
            <div className={clsx('pt-8')} />
            <Tooltip
                content={<div>Popover content</div>}
                placement="left"
                className={clsx('ml-[150px]')}
            >
                This is a tooltip
            </Tooltip>
            <div className={clsx('pt-8')} />
            <Combobox
                comboboxData={comboboxData}
                useKeyboardAction
                useClearButton
            />
        </div>
    );
};

export default PlaygroundComponents;
