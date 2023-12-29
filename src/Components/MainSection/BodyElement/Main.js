import s from './Main.module.css'
const Main = () => {
    return (
        <div className={s.Main}>
            <div className={s.imgContainer}>
                <img className={s.image} src={process.env.PUBLIC_URL + "/photo.svg"} alt={"Фото"} />
            </div>

        </div>
    )
}
export default Main