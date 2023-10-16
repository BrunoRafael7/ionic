import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'livro-de-visitas',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
