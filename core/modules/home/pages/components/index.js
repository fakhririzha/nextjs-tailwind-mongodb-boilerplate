import { clsx } from 'clsx/lite';

import { Button } from '@shadcn/components/ui/button';

import InputComponents from '@lib/components/input';

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
                            ...register('location', { required: true }),
                        }}
                        className={clsx('rounded-lg')}
                        type="text"
                        label="Location"
                        error={errors.location}
                        errorMessage={
                            errors.location && errors.location.message
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

export default HomeComponents;
