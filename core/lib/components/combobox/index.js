import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import MagnifyingGlassIcon from '@heroicons/react/20/solid/MagnifyingGlassIcon';

import Input from '@lib/components/input';
import Popover from '@lib/components/popover';

import { clsx } from 'clsx/lite';

const Combobox = (props) => {
    const {
        useLabel,
        label,
        useKeyboardAction,
        useClearButton,
        comboboxOptions,
        comboboxData,
        ...other
    } = props;

    const [inputValue, setInputValue] = useState('');
    const [isOpen, onOpenChange] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setInputValue('');
                onOpenChange(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, wrapperRef]);

    const renderData = () => {
        if (comboboxData.length === 0) {
            return (
                <div className={clsx('text-center')}>
                    <div className={clsx('text-gray-400')}>No items.</div>
                </div>
            );
        }

        if (inputValue !== '') {
            const filteredData = comboboxData.filter(
                (item) =>
                    item.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()) ||
                    item.value?.toLowerCase().includes(inputValue.toLowerCase())
            );

            if (filteredData.length === 0) {
                return (
                    <div className={clsx('text-center')}>
                        <div className={clsx('text-gray-400')}>
                            No results found
                        </div>
                    </div>
                );
            }

            return (
                <div>
                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            onClick={item.onClick ? item.onClick : () => {}}
                            className={clsx(
                                'flex',
                                'items-center',
                                'px-4',
                                'py-2',
                                'hover:bg-neutral-200',
                                'hover:rounded-lg',
                                'hover:cursor-pointer',
                                'group',
                                index !== filteredData.length - 1 && 'border-b'
                            )}
                        >
                            <div className={clsx('flex-grow')}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div>
                {comboboxData.map((item, index) => (
                    <div
                        key={index}
                        onClick={item.onClick ? item.onClick : () => {}}
                        className={clsx(
                            'flex',
                            'items-center',
                            'px-4',
                            'py-2',
                            'hover:bg-neutral-200',
                            'hover:rounded-lg',
                            'hover:cursor-pointer',
                            'group',
                            index !== comboboxData.length - 1 && 'border-b'
                        )}
                    >
                        <div className={clsx('flex-grow')}>{item.label}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div
            ref={wrapperRef}
            className={clsx(
                'combobox-wrapper',
                'px-4',
                'pt-4',
                'pb-6',
                'w-max',
                'rounded-lg'
            )}
        >
            <Popover
                className={clsx('min-w-[320px]')}
                content={renderData()}
                contentClassName={clsx(
                    '!rounded-lg',
                    'duration-300',
                    'min-w-[320px]'
                )}
                placement="bottom"
                placementClassName={clsx('top-2', '!relative')}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <Input
                    formHandler={{
                        onChange: (e) => {
                            onOpenChange(true);
                            setInputValue(e.target.value);
                        },
                        onFocus: () => onOpenChange(true),
                        value: inputValue,
                    }}
                    type="text"
                    label={label}
                    placeholder="Enter a keyword"
                    endIcon={
                        <div
                            className={clsx(
                                'rounded-none',
                                'rounded-r-lg',
                                'bg-white',
                                'p-2',
                                'px-4',
                                'h-10'
                            )}
                        >
                            <MagnifyingGlassIcon
                                className={clsx('w-5', 'h-5', 'text-slate-400')}
                            />
                        </div>
                    }
                    ref={null}
                    useLabel={useLabel}
                />
            </Popover>
        </div>
    );
};

Combobox.propTypes = {};

Combobox.defaultProps = {};

export default Combobox;
