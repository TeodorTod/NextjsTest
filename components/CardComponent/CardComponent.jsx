
export const CardComponent = ({ cardProps }) => {

  return (
    <div>
      {
        cardProps.map(card => (
          <>
            <h1>{card.title}</h1>
            <h2>{card.subtitle}</h2>
            <img src={card.img} alt="" />
          </>
        )
        )
      }

    </div>
  )
}