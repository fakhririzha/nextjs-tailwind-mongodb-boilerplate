import { useState } from 'react';

import { Button } from '@shadcn/components/ui/button';
import { Input } from '@shadcn/components/ui/input';
import { Label } from '@shadcn/components/ui/label';

import InputComponents from '@lib/components/input';

import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import EyeSlashIcon from '@heroicons/react/24/solid/EyeSlashIcon';

import { clsx } from 'clsx/lite';

const SignUpComponents = (props) => {
    const { register, handleSubmit, errors, submitHandler } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () =>
        setIsPasswordVisible(!isPasswordVisible);

    return (
        <div
            className={clsx(
                'signup-form',
                'mx-auto',
                'desktop:max-w-[1280px]',
                'px-10',
                'py-4'
            )}
        >
            <h1>Register</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <InputComponents
                        formHandler={{
                            ...register('name', { required: true }),
                        }}
                        className={clsx('rounded-lg')}
                        type="text"
                        label="Name"
                        error={errors.name}
                        errorMessage={errors.name && errors.name.message}
                        useLabel
                        ref={null}
                    />
                </div>
                <div>
                    <InputComponents
                        formHandler={{
                            ...register('email', { required: true }),
                        }}
                        className={clsx('rounded-lg')}
                        type="text"
                        label="Email"
                        error={errors.email}
                        errorMessage={errors.email && errors.email.message}
                        useLabel
                        ref={null}
                    />
                </div>
                <div>
                    <InputComponents
                        formHandler={{
                            ...register('password', { required: true }),
                        }}
                        type={isPasswordVisible ? 'text' : 'password'}
                        label="Password"
                        placeholder="Enter your password"
                        endIcon={
                            <button
                                className={clsx(
                                    'rounded-none',
                                    'rounded-r-lg',
                                    'bg-white',
                                    'py-2',
                                    'px-4',
                                    'h-10'
                                )}
                                type="button"
                                onClick={() =>
                                    togglePasswordVisibility(!isPasswordVisible)
                                }
                            >
                                {isPasswordVisible ? (
                                    <EyeSlashIcon
                                        className={clsx(
                                            'w-4',
                                            'h-4',
                                            'text-slate-400'
                                        )}
                                    />
                                ) : (
                                    <EyeIcon
                                        className={clsx(
                                            'w-4',
                                            'h-4',
                                            'text-slate-400'
                                        )}
                                    />
                                )}
                            </button>
                        }
                        error={errors.password}
                        errorMessage={
                            errors.password && errors.password.message
                        }
                        useLabel
                        ref={null}
                    />
                </div>
                <Button
                    className={clsx('block', 'grid-cols-1', 'mt-4')}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SignUpComponents;
