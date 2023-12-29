import s from "../Attractions/Attractions.module.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "./BodyElement/Main";
import SecondHeader from "./SecondHeader/SecondHeder";
const MainSection = () => {
    return (
        <div className={s.Wrapper}>
            <Header isBackground={false}/>
            <SecondHeader/>
            <Main />
            <Footer />
        </div>
    )
}
export default MainSection