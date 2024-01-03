import PropTypes from 'prop-types';

import { clsx } from 'clsx/lite';

const Tooltip = (props) => {
    const { id, children, className, content, placement, ...other } = props;

    const generatePlacementClass = () => {
        if (placement === 'bottom') {
            return clsx('top-8', 'right-auto');
        }
        if (placement === 'left') {
            return clsx('-top-2', 'right-[110%]');
        }
        if (placement === 'right') {
            return clsx('-top-2', 'left-[110%]');
        }
        return clsx('bottom-8');
    };

    return (
        <div
            id={id}
            className={clsx(
                'popover-wrapper',
                'relative',
                'inline-block',
                'group',
                className
            )}
            {...other}
        >
            <div className={clsx('popover-body', 'cursor-pointer')}>
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
                    'hidden',
                    'group-hover:block',
                    'group-hover:absolute',
                    'group-hover:animate-in',
                    'group-hover:zoom-in',
                    'group-hover:duration-300',
                    generatePlacementClass()
                )}
            >
                {content}
            </div>
        </div>
    );
};

Tooltip.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    content: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
    placement: 'bottom',
};

export default Tooltip;
