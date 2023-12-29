import s from "./BodyElement.module.css"
const BodyElement = ({ title, description, imageSrc, background }) => {
    return (
        <div className={s.BodyElement}>
            <div className={s.body__container}>
                <div className={s.body__title}>{title}</div>
                <div className={s.body__description}>{description}</div>
                <img className={s.image} src={imageSrc} alt="Здание" />
            </div>
        </div>
    );
}

export default BodyElement