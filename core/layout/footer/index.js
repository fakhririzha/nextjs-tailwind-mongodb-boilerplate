import { clsx } from 'clsx/lite';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            className={clsx('bg-green-700', 'border-t-1', 'border-neutral-500')}
        >
            <nav
                className={clsx(
                    'desktop:max-w-screen-desktop',
                    'py-4',
                    'px-10',
                    'mx-auto'
                )}
            >
                <ul className={clsx('flex', 'flex-row', 'justify-between')}>
                    <li className={clsx('flex', 'flex-row')}>
                        <Link
                            href="https://fasilkom-ti.usu.ac.id/en/"
                            className={clsx(
                                'px-4',
                                'py-2',
                                'text-base',
                                'text-white',
                                'hover:cursor-pointer'
                            )}
                        >
                            {/* get year */}
                            <h1>&copy; 2023. PEMA Fasilkom-TI</h1>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
