
import Banner from './Banner/Banner';
import HomeApps from './HomeApps/HomeApps';
import useApps from '../Hooks/UseApps';
import PageLoading from '../SkelationLoading/PageLoading';


const Home = () => {

    // const allData = useLoaderData();

    // const homeAllData = useLoaderData();
    const { apps, loading } = useApps()
    console.log(apps)
    const fetchApps = apps.slice(0, 8)
    // console.log(fetchApps)
    if (loading) { return <PageLoading></PageLoading> }
    return (

        <div className='w-12/12 mx-auto'>
            <Banner></Banner>
            <HomeApps fetchApps={fetchApps}></HomeApps>
        </div>
    );
};

export default Home;