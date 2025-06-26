import { TfiArrowTopRight } from "react-icons/tfi";


interface CardsProps {
    title: string
    quantity: string
}

function Card(props: CardsProps) {
  return (
    <div
      className="p-2 px-4 py-3 rounded-3 d-flex align-items-start justify-content-start w-100 flex-column text-start"
      style={{ backgroundColor: "#F2F2F7" }}
    >
      <span>{props.title}</span>{" "}
      <h3 className="fw-bold mt-2">{props.quantity}</h3>
      <div className="ms-auto py-2 px-3 rounded-circle text-center text-white" style={{backgroundColor:'#344CB7', cursor:'pointer'}}>
        <TfiArrowTopRight/>
      </div>
    </div>
  );
}

export default Card;
