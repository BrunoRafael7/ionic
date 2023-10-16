import { IonButton, IonImg } from '@ionic/react';
import './FormContainer.css';

interface ContainerProps { }

const FormContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <h1>Bem vindo ao formulário de visitas de cabaceiras</h1>
      <div className="container form-container">
        <IonButton fill='solid' size='large' color="success"> Entrar </IonButton>
      </div>
    </>
  );
};

export default FormContainer;
