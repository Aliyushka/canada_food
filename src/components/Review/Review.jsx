import ReactCardSlider from "../Slider/ReactSlider";

const Review = () => {
    const slides = [
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Сергей",
            comment: "Большое спасибо!",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Айжан",
            comment: "Очень вкусные роллы",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Алия",
            comment: "Коллеги довольны",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Бексултан",
            comment: "Хочу поблагодарить за бургер!",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Наргиза",
            comment: "Большое спасибо!",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Дамир",
            comment: "Очень вкусно",
            date: "02.07.2020"
        },
        {
            image: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
            user: "Aizhan",
            comment: "Delicious. Thanks:)",
            date: "02.07.2020"
        }
    ]
    return (
        <>
            <div className="review">
                <h2>Отзывы</h2>
            </div>
            <ReactCardSlider slides={slides}/>
        </>

    );
};

export default Review;