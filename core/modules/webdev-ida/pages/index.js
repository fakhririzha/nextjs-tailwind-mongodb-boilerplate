import Layout from '@layout';
import Components from '@modules/webdev-ida/pages/components';

const Home = (props) => {
    const pageConfig = {
        title: 'Webdev IDA',
    };

    return (
        <Layout pageConfig={pageConfig}>
            <Components {...props} />
        </Layout>
    );
};

export default Home;
