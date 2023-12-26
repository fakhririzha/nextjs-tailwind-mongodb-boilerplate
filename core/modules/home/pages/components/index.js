import cx from 'classnames';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

const HomeComponents = (props) => {
    const { formik } = props;

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
            <h1>Form Activity Tracker</h1>
            <form
                className={cx('grid', 'grid-cols-1', 'gap-y-4', 'pt-4')}
                onSubmit={formik.handleSubmit}
            >
                <Input
                    placeholder="Name"
                    name="name"
                    onChange={formik.handleChange}
                    values={formik.values.name}
                    color="success"
                />
                <Input
                    placeholder="Location"
                    name="location"
                    onChange={formik.handleChange}
                    values={formik.values.location}
                    color="success"
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

export default HomeComponents;
