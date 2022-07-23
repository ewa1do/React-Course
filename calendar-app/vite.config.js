// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': process.env,
//   },
// });

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // Carga el archivo env basado en el `modo` en el directorio de trabajo actual.
  // Coloca el tercer parámetro en '' para cargar todos los env independientemente del prefijo `VITE_`.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // configuración de vite
    define: {
      __APP_ENV__: env.APP_ENV,
      'process.env': process.env,
    },
  };
});
