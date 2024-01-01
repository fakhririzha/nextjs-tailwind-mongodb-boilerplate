import { clsx } from 'clsx/lite';

import { Button } from '@shadcn/components/ui/button';
import { Input } from '@shadcn/components/ui/input';
import { Label } from '@shadcn/components/ui/label';

const HomeComponents = (props) => {
    const { register, handleSubmit, errors, submitHandler } = props;

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
            <h1>Form Activity Tracker</h1>
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
                        placeholder="Enter your activity name"
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
                            className={clsx(
                                errors.location.message && 'text-red-500'
                            )}
                        >
                            {errors.location.message}
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

export default HomeComponents;
