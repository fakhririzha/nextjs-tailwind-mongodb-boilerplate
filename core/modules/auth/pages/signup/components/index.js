import { useState } from 'react';

import { Button } from '@shadcn/components/ui/button';
import { Input } from '@shadcn/components/ui/input';
import { Label } from '@shadcn/components/ui/label';

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
                'py-4',
            )}
        >
            <h1>Register</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <Label
                        className={clsx(
                            errors &&
                                errors.name &&
                                errors.name.message &&
                                'text-red-500'
                        )}
                        htmlFor="name"
                    >
                        Name
                    </Label>
                    <Input
                        placeholder="Enter your name"
                        {...register('name')}
                    />
                    {errors && errors.name && (
                        <p
                            className={clsx(
                                errors.name.message && 'text-red-500'
                            )}
                        >
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label
                        className={clsx(
                            errors &&
                                errors.email &&
                                errors.email.message &&
                                'text-red-500'
                        )}
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        placeholder="Enter your email"
                        {...register('email')}
                    />
                    {errors && errors.email && (
                        <p
                            className={clsx(
                                errors.email.message && 'text-red-500'
                            )}
                        >
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label
                        className={clsx(
                            errors &&
                                errors.password &&
                                errors.password.message &&
                                'text-red-500'
                        )}
                        htmlFor="password"
                    >
                        Password
                    </Label>
                    <div
                        className={clsx(
                            'flex',
                            'w-full',
                            'items-center',
                            'gap-x-4'
                        )}
                    >
                        <Input
                            className={clsx('w-full')}
                            placeholder="Enter your password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            {...register('password')}
                        />
                        <Button
                            type="button"
                            onClick={() =>
                                togglePasswordVisibility(!isPasswordVisible)
                            }
                        >
                            {isPasswordVisible ? (
                                <EyeSlashIcon className={clsx('w-4', 'h-4')} />
                            ) : (
                                <EyeIcon className={clsx('w-4', 'h-4')} />
                            )}
                        </Button>
                    </div>
                    {errors && errors.password && (
                        <p
                            className={clsx(
                                errors.password.message && 'text-red-500'
                            )}
                        >
                            {errors.password.message}
                        </p>
                    )}
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
