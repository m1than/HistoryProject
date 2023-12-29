import s from "./Header.module.css"
const Header = ({isBackground}) => {
    const header = isBackground ? `${s.Header} ${s.Header__background}`: `${s.Header}` ;
    return (
        <header className={`${header}`}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <img src={process.env.PUBLIC_URL + "/Logo.svg"} alt="Logo"></img>
                </div>
                <nav className={`${s.header__menu} ${s.menu}`}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Главная</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Достопримечательности</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>О проекте</a></li>
                    </ul>
                </nav>
                <div className={s.header__button}>
                    <a href="" className={s.button}>EN</a>
                </div>
            </div>
        </header>
    )
}

export default Header