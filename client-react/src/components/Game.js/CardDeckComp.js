
export default function CardComponent({ card }) {
  return (
    <div>
      <img src={card.image} className='card' alt='#'  />
    </div>
  )
};