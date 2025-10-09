
import Banner from './Banner/Banner';
import HomeApps from './HomeApps/HomeApps';
import useApps from '../Hooks/UseApps';

const Home = () => {

    // const allData = useLoaderData();

    // const homeAllData = useLoaderData();
    const { apps } = useApps()
    const fetchApps = apps.slice(0, 8)
    console.log(fetchApps)

    return (

        <div className='w-12/12 mx-auto'>
            <Banner></Banner>
            <HomeApps fetchApps={fetchApps}></HomeApps>
        </div>
    );
};

export default Home;