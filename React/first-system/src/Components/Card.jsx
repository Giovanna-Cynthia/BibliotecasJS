import "./card.css";

const Card = () => {
    const cardData = [
        {
            titulo: "Card 1",
            description: "Este é o meu primeiro card.",
            link: "#"
        },
        {
            titulo: "Card 2",
            description: "Este é o meu segundo card.",
            link: "#"
        },
        {
            titulo: "Card 3",
            description: "Este é o meu terceiro card.", 
            link: "#"
        },
        {
            titulo: "Card 4",
            description: "Este é o meu quarto card.",
            link: "#"
        },
    ];

    console.log(cardData);

    return(
        <div className="card-container">
            {cardData.map((card, index) => {
                console.log(index)
                return(
                    <div className="card" key={index}>
                    <h2>{card.titulo}</h2>
                    <p>{card.description}</p>
                    <a href={card.link}>Saiba mais</a>
                </div>
                );
            })}
        </div>
    );
}

export default Card;