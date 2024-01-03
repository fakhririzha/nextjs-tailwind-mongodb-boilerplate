import PropTypes from 'prop-types';

import { Input as ShadcnInput } from '@shadcn/components/ui/input';
import { Label } from '@shadcn/components/ui/label';

import { clsx } from 'clsx/lite';

const Input = (props) => {
    const {
        formHandler,
        className,
        useLabel,
        label,
        startIcon,
        endIcon,
        error,
        errorMessage,
        type,
        placeholder,
    } = props;

    return (
        <div
            className={clsx(
                'input-wrapper',
                (startIcon || endIcon) && 'flex flex-col relative'
            )}
        >
            {useLabel && (
                <Label
                    htmlFor={props.name}
                    className={clsx(error && errorMessage && 'text-red-500')}
                >
                    {label}
                </Label>
            )}
            <div
                className={clsx(
                    'input-container',
                    'flex',
                    'w-full',
                    'items-center',
                    'rounded-lg',
                    'has-[:focus-visible]:shadow-sm',
                    !error &&
                        'has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-slate-400',
                    error && errorMessage && 'text-red-500 ring-1 ring-red-500'
                )}
            >
                {startIcon && (
                    <div className="start-icon-container">{startIcon}</div>
                )}
                <ShadcnInput
                    {...formHandler}
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        'pl-4',
                        'rounded-l-lg',
                        'focus-visible:ring-0',
                        'focus-visible:border-none',
                        'focus-visible:outline-none',
                        className
                    )}
                />
                {endIcon && <div className="end-icon-container">{endIcon}</div>}
            </div>
            {error && errorMessage && (
                <p className={clsx('error-message', 'text-red-500')}>
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
    placeholder: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    useLabel: PropTypes.bool,
    label: PropTypes.string,
    startIcon: PropTypes.element,
    endIcon: PropTypes.element,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    errorMessage: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
};

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    className: '',
    useLabel: false,
    label: '',
    startIcon: null,
    endIcon: null,
    error: false,
    errorMessage: '',
    type: 'text',
};

export default Input;
