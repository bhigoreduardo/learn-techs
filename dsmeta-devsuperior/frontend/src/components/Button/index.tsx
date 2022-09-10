import axios from "axios";
import { toast } from "react-toastify";

import icon from "../../assets/icons/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleId: number;
};

function sendNotification(saleId: number) {
  axios.get(`${BASE_URL}/sales/sms/${saleId}`).then((response) => {
    toast.info("Mensagem enviada com sucesso");
  });
}

function Button({ saleId }: Props) {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" onClick={() => sendNotification(saleId)} />
      </div>
    </>
  );
}

export default Button;
