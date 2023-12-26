import cx from 'classnames';

const HomeComponents = (props) => {
    const { activityData } = props;

    return (
        <div
            className={cx(
                'grid',
                'grid-cols-1',
                'desktop:max-w-screen-desktop',
                'mx-auto',
                'p-10'
            )}
        >
            <h1>Tabel Activity Tracker</h1>
            <table className={cx('mt-4', 'border-2', 'border-slate-700')}>
                <thead className={cx('bg-slate-400')}>
                    <tr>
                        <th className={cx('text-left', 'p-4')}>No.</th>
                        <th className={cx('text-left', 'p-4')}>Nama</th>
                        <th className={cx('text-left', 'p-4')}>Lokasi</th>
                        <th className={cx('text-left', 'p-4')}>Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {activityData &&
                        activityData.length > 0 &&
                        activityData.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={cx(
                                        'odd:bg-white',
                                        'even:bg-slate-200'
                                    )}
                                >
                                    <td className={cx('p-4')}>{index + 1}</td>
                                    <td className={cx('p-4')}>{item.name}</td>
                                    <td className={cx('p-4')}>
                                        {item.location}
                                    </td>
                                    <td className={cx('p-4')}>
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
