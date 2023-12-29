import s from './Main.module.css'
const Main = () => {
    return (
        <div className={s.Main}>
            <div className={s.imgContainer}>
                <img className={s.image} src={process.env.PUBLIC_URL + "/photo.svg"} alt={"Фото"} />
            </div>
            <div className={s.imgContainer}>
                <img className={s.image} src={process.env.PUBLIC_URL + "/map.png"} alt={"Карта"} />
            </div>
            <div className={s.body__container}>
                <div className={s.body__title}>История </div>
                <div className={s.body__description}>Китайско-Восточная железная дорога (КВЖД) — железнодорожная магистраль, проходившая по территории Маньчжурии и соединявшая Читу с Владивостоком и Порт-Артуром. Дорога построена в 1897–1903 годах как южная ветка Транссибирской магистрали (de facto). КВЖД принадлежала Российской империи и обслуживалась её подданными. Строительство дороги было шагом по увеличению влияния Российской империи на Дальнем Востоке, укреплению российского военного присутствия на берегах Жёлтого моря на фоне экспансии Японии в Корее и Китае.</div>
            </div>

        </div>
    )
}
export default Main