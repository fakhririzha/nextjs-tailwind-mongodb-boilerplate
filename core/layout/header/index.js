import cx from 'classnames';

import { signOut, useSession } from 'next-auth/react';

import Link from 'next/link';

const Header = () => {
    const { data: session, status } = useSession();

    return (
        <header className={cx('bg-green-700', 'sticky', 'z-40', 'top-0')}>
            <nav
                className={cx(
                    'desktop:max-w-screen-desktop',
                    'py-4',
                    'px-10',
                    'mx-auto'
                )}
            >
                <ul className={cx('flex', 'flex-row', 'justify-between')}>
                    <li className={cx('flex', 'flex-row')}>
                        <Link
                            href="/"
                            className={cx(
                                'px-4',
                                'py-2',
                                'text-base',
                                'text-white',
                                'hover:cursor-pointer'
                            )}
                            prefetch={false}
                        >
                            <h1>Webdev IDA - Activity Tracker</h1>
                        </Link>
                    </li>
                    {status === 'authenticated' && session ? (
                        <>
                            <li className={cx('flex', 'flex-row')}>
                                <h1
                                    className={cx(
                                        'px-4',
                                        'py-2',
                                        'text-base',
                                        'text-white'
                                    )}
                                >
                                    {`Hello, ${session.user.name}!`}
                                </h1>
                                <button
                                    onClick={() => signOut()}
                                    className={cx(
                                        'px-4',
                                        'py-2',
                                        'text-base',
                                        'text-white',
                                        'hover:bg-yellow-400',
                                        'active:bg-yellow-500',
                                        'focus:bg-yellow-500',
                                        'hover:text-green-800',
                                        'transition-all',
                                        'duration-300',
                                        'ease-in-out',
                                        'rounded-md',
                                        'cursor-pointer'
                                    )}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('flex', 'flex-row')}>
                                <Link
                                    href="/auth/login"
                                    className={cx(
                                        'px-4',
                                        'py-2',
                                        'text-base',
                                        'text-white',
                                        'hover:bg-yellow-400',
                                        'active:bg-yellow-500',
                                        'focus:bg-yellow-500',
                                        'hover:text-green-800',
                                        'transition-all',
                                        'duration-300',
                                        'ease-in-out',
                                        'rounded-md'
                                    )}
                                >
                                    <h1>Login</h1>
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className={cx(
                                        'px-4',
                                        'py-2',
                                        'text-base',
                                        'text-white',
                                        'hover:bg-yellow-400',
                                        'active:bg-yellow-500',
                                        'focus:bg-yellow-500',
                                        'hover:text-green-800',
                                        'transition-all',
                                        'duration-300',
                                        'ease-in-out',
                                        'rounded-md'
                                    )}
                                >
                                    <h1>Register</h1>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
