
export default function CardComponent({ card }) {
  return (
    <div>
      <img src={card.image} alt='#' style={{ "height": "60px", "width": '45px' }} />
    </div>
  )
};