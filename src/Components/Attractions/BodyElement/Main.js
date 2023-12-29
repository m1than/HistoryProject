import s from "./Main.module.css"
import BodyElement from "./BodyElement";
const Main = () => {
    return (
        <div className={s.Main}>
            <BodyElement
                title="Первый дом"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/house1.svg"}
            />
            <BodyElement
                title="Второй дом"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/house2.svg"}
            />
            <BodyElement
                title="Третий дом"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/house3.svg"}
            />
            <BodyElement
                title="Вокзал"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/vokzal.svg"}
            />
            <BodyElement
                title="Сарай"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/sarai.svg"}
            />
            <BodyElement
                title="Водонапорная башня"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/vodyanka.svg"}
            />
            <BodyElement
                title="Церковь"
                description="А также реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую резервов и ресурсов."
                imageSrc= {process.env.PUBLIC_URL + "/Church.svg"}
            />
        </div>
    )
}
export default Main