import { useTranslation } from "react-i18next"

const SecondHeader = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className={'bg-[url("/public/header_backdround.png")]'}>
            <menu >
                <ul className={'flex flex-row items-center justify-around g-x-5 h-[40px]'}>
                    <li>
                        <a href="#">{t('menu-depot')}</a>
                    </li>
                    <li>
                        <a href="#">{t('menu-houses')}</a>
                    </li>
                    <li>
                        <a href="#">{t('menu-church')}</a>
                    </li>
                    <li>
                        <a href="#">{t('menu-hospital')}</a>
                    </li>
                    <li>
                        <a href="#">{t('menu-railway')}</a>
                    </li>
                    <li>
                        <a href="#">{t('menu-water-tower')}</a>
                    </li>
                </ul>
            </menu>
        </div>
        // <header className={s.SecondHeader}>
        //     <div className={s.header__background}>
        //         <div className={s.header__container}>
        //             <nav className={`${s.header__menu} ${s.menu}`}>
        //                 <ul className={s.menu__list}>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Депо</a></li>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Дома</a></li>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Церковь</a></li>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Больница</a></li>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Вокзал</a></li>
        //                     <li className={s.menu__item}><a href="" className={s.menu__link}>Водонапорная башня</a></li>
        //                 </ul>
        //             </nav>
        //         </div>
        //     </div>
        // </header>
    )
}

export default SecondHeader