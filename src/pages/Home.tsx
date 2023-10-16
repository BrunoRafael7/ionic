import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
import FormContainer from '../components/FormContainer';
import LogoContainer from '../components/LogoContainer';
import SponsorsContainer from '../components/SponsorsContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="container">
        <LogoContainer/>
        <FormContainer />
        <SponsorsContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
