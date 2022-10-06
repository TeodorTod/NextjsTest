import { CardComponent } from '../../components/CardComponent/CardComponent';

export const Card = () => {
    const cardProps = [
        {
            title: "opaa",
            subtitle: 'meee',
            img: 'https://cdn-icons-png.flaticon.com/512/3940/3940154.png'
        },
        {
            title: "sadasd",
            subtitle: 'measdasdee',
            img: 'https://cdn-icons-png.flaticon.com/512/2170/2170024.png'
        },
        {
            title: "asd",
            subtitle: 'asdasd',
            img: 'https://cdn-icons-png.flaticon.com/512/5128/5128950.png'
        }
    ]

    return (
        <div>
            <CardComponent cardProps={cardProps} />
        </div>
    );
}
