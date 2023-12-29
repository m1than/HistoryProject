import s from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.footer__container}>
                <div className={s.footer__items}>
                    <div className={s.footer__item}>
                        <img src={process.env.PUBLIC_URL + "/ITMO.svg"} alt={'ITMO'}/>
                    </div>
                    <div className={s.footer__politico}>
                        <a className={s.politico__link} href='https://itmo.ru/file/pages/79/personal_data_policy.pdf' target="_blank" rel="noopener noreferrer">Политика</a>&nbsp;по обработке Персональных данных
                    </div>
                    <div className={s.footer__item}>Информация Ⓒ 1993 - 2023</div>
                    <div className={s.footer__item}>Университет ИТМО</div>
                </div>
            </div>
        </div>
    )
}
export default Footer