import s from "./Attractions.module.css"
import Header from "../Header/Header";
import Main from "./BodyElement/Main";
import Footer from "../Footer/Footer";
const Attractions = () => {
    return (
        <div className={s.Wrapper}>
            <Header isBackground={true} />
            <Main />
            <Footer />
        </div>
    )
}
export default Attractions