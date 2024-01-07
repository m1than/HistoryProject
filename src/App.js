import "react-responsive-carousel/lib/styles/carousel.min.css";
import PageLayout from './Components/layouts/PageLayout';
import MainPage from './Components/pages/MainPage/index';
import { useSelector } from 'react-redux';
import './i18n';
import AttractionsPage from './Components/pages/AttractionsPage';
import AboutPage from './Components/pages/AboutPage';

function App() {
    const page = useSelector((state) => state.page.currentPage);
    switch (page) {
        case 'main':
            return <PageLayout><MainPage /> </PageLayout>
        case 'attractions':
            return <PageLayout><AttractionsPage /></PageLayout>
        case 'project':
            return <PageLayout><AboutPage /></PageLayout>
        default:
            return <PageLayout><div>Undefined Page</div></PageLayout>
    }
}

export default App;
