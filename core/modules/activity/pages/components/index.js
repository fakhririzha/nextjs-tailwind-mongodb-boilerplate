import { clsx } from 'clsx/lite';

const HomeComponents = (props) => {
    const { activityData } = props;

    return (
        <div
            className={clsx(
                'grid',
                'grid-cols-1',
                'desktop:max-w-screen-desktop',
                'mx-auto',
                'p-10'
            )}
        >
            <h1>Tabel Activity Tracker</h1>
            <table className={clsx('mt-4', 'border-2', 'border-slate-700')}>
                <thead className={clsx('bg-slate-400')}>
                    <tr>
                        <th className={clsx('text-left', 'p-4')}>No.</th>
                        <th className={clsx('text-left', 'p-4')}>Nama</th>
                        <th className={clsx('text-left', 'p-4')}>Lokasi</th>
                        <th className={clsx('text-left', 'p-4')}>Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {activityData &&
                        activityData.length > 0 &&
                        activityData.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={clsx(
                                        'odd:bg-white',
                                        'even:bg-slate-200'
                                    )}
                                >
                                    <td className={clsx('p-4')}>{index + 1}</td>
                                    <td className={clsx('p-4')}>{item.name}</td>
                                    <td className={clsx('p-4')}>
                                        {item.location}
                                    </td>
                                    <td className={clsx('p-4')}>
                                        {item.createdAt}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeComponents;
