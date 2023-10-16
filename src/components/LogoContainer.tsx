import { IonImg } from "@ionic/react"
import './LogoContainer.css';

const LogoContainer = () => {
  return (
    <div className="container img-container">
        <IonImg className='logo' src="bode_rei.png" alt="Livro de Visitas" />
    </div>
  )
}

export default LogoContainer