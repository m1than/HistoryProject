import s from './SecondHeader.module.css'
const SecondHeader = () => {
    return (
        <header className={s.SecondHeader}>
            <div className={s.header__background}>
                <div className={s.header__container}>
                    <nav className={`${s.header__menu} ${s.menu}`}>
                        <ul className={s.menu__list}>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Депо</a></li>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Дома</a></li>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Церковь</a></li>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Больница</a></li>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Вокзал</a></li>
                            <li className={s.menu__item}><a href="" className={s.menu__link}>Водонапорная башня</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default SecondHeader