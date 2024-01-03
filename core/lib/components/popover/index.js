import PropTypes from 'prop-types';
import { useState } from 'react';

import { clsx } from 'clsx/lite';

const Popover = (props) => {
    const {
        id,
        isOpen,
        onOpenChange,
        children,
        className,
        contentClassName,
        content,
        placement,
        placementClassName,
        ...other
    } = props;

    const [open, setOpen] = useState(false);

    const generatePlacementClass = () => {
        if (placement === 'bottom') {
            return clsx('top-8', 'right-auto', placementClassName);
        }
        if (placement === 'left') {
            return clsx('-top-2', 'right-[110%]', placementClassName);
        }
        if (placement === 'right') {
            return clsx('-top-2', 'left-[110%]', placementClassName);
        }
        return clsx('bottom-8', placementClassName);
    };

    const generateStateClass = () => {
        if (isOpen !== null) {
            switch (isOpen) {
                case true:
                    return clsx(
                        'block',
                        'absolute',
                        'animate-in',
                        'zoom-in',
                        'duration-300'
                    );
                default:
                    return 'hidden';
            }
        } else {
            switch (open) {
                case true:
                    return clsx(
                        'block',
                        'absolute',
                        'animate-in',
                        'zoom-in',
                        'duration-300'
                    );
                default:
                    return 'hidden';
            }
        }
    };

    return (
        <div
            id={id}
            className={clsx(
                'popover-wrapper',
                'relative',
                'inline-block',
                className
            )}
            {...other}
        >
            <div
                className={clsx('popover-body', 'cursor-pointer')}
                onClick={() => {
                    if (!onOpenChange) {
                        setOpen(!open);
                    }
                }}
            >
                {children}
            </div>
            <div
                className={clsx(
                    'popover-content',
                    'px-4',
                    'py-2',
                    'bg-neutral-100',
                    'ring-1',
                    'ring-neutral-300',
                    'shadow-sm',
                    'dark:bg-slate-700',
                    'rounded-md',
                    'w-max',
                    generateStateClass(),
                    generatePlacementClass(),
                    contentClassName
                )}
            >
                {content}
            </div>
        </div>
    );
};

Popover.propTypes = {
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    onOpenChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    content: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    placementClassName: PropTypes.string,
};

Popover.defaultProps = {
    placement: 'bottom',
    isOpen: null,
};

export default Popover;
