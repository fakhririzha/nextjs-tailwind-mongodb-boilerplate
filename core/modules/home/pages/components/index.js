import cx from 'classnames';

import { Button } from '@shadcn/components/ui/button';
import { Input } from '@shadcn/components/ui/input';
import { Label } from '@shadcn/components/ui/label';

const HomeComponents = (props) => {
    const { register, handleSubmit, errors, submitHandler } = props;

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
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <Label
                        className={cx(
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
                        placeholder="Enter your activity name"
                        {...register('name')}
                    />
                    {errors && errors.name && (
                        <p
                            className={cx(
                                errors.name.message && 'text-red-500'
                            )}
                        >
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label
                        className={cx(
                            errors &&
                                errors.location &&
                                errors.location.message &&
                                'text-red-500'
                        )}
                        htmlFor="location"
                    >
                        Location
                    </Label>
                    <Input
                        placeholder="Enter your activity location"
                        {...register('location')}
                    />
                    {errors && errors.location && (
                        <p
                            className={cx(
                                errors.location.message && 'text-red-500'
                            )}
                        >
                            {errors.location.message}
                        </p>
                    )}
                </div>
                <Button
                    className={cx('block', 'grid-cols-1', 'mt-4')}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default HomeComponents;
