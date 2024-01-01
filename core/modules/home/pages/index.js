import Layout from '@layout';
import Components from '@modules/home/pages/components';

import { handleCreateActivity } from '@modules/home/services';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

const Home = (props) => {
    const pageConfig = {
        title: 'Dashboard',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            location: '',
        },
        resolver: zodResolver(
            object({
                name: string().min(1, { message: 'Name is required' }),
                location: string().min(1, { message: 'Location is required' }),
            })
        ),
    });

    const submitHandler = async (values) => {
        try {
            await handleCreateActivity(values);
            console.log('Berhasil membuat aktivitas baru!');
            reset();
        } catch (error) {
            console.log(error);
            console.log('Gagal membuat aktivitas baru');
        }
    };

    const componentProps = {
        register,
        handleSubmit,
        errors,
        submitHandler,
    };

    return (
        <Layout pageConfig={pageConfig}>
            <Components {...componentProps} {...props} />
        </Layout>
    );
};

export default Home;
