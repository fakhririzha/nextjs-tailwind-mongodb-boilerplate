import { useState } from 'react';

import cx from 'classnames';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import EyeSlashIcon from '@heroicons/react/24/solid/EyeSlashIcon';

const SignUpComponents = (props) => {
    const { formik } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () =>
        setIsPasswordVisible(!isPasswordVisible);

    return (
        <div
            className={cx(
                'signup-form',
                'mx-auto',
                'desktop:max-w-[1280px]',
                'px-10',
                'py-4'
            )}
        >
            <form
                onSubmit={formik.handleSubmit}
                className={cx('flex', 'flex-col', 'flex-nowrap', 'gap-4')}
            >
                <Input
                    className={cx('flex', 'basis-6/12')}
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    isRequired
                />
                <Input
                    className={cx('flex', 'basis-1/2')}
                    onChange={formik.handleChange}
                    type="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    isRequired
                />
                <Input
                    className={cx('basis-full')}
                    onChange={formik.handleChange}
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    isRequired
                    endContent={
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                <EyeSlashIcon
                                    className={cx(
                                        'w-6',
                                        'h-6',
                                        'pointer-events-none',
                                        'text-gray-500'
                                    )}
                                />
                            ) : (
                                <EyeIcon
                                    className={cx(
                                        'w-6',
                                        'h-6',
                                        'pointer-events-none',
                                        'text-gray-500'
                                    )}
                                />
                            )}
                        </button>
                    }
                />
                <Button
                    className={cx('block', 'grid-cols-1')}
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SignUpComponents;
