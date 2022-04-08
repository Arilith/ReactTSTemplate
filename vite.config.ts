import { defineConfig } from 'vite'
import createExternal from 'vite-plugin-external'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import ViteFonts from 'vite-plugin-fonts'
import path from 'path'

const DEV = '"dev"'
const DEBUG = '"debug"'
const PROD = '"prod"'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias:{
            '@Assets' : path.resolve(__dirname, './src/Assets/'),
            '@Components' : path.resolve(__dirname, './src/Components/'),
            '@Services' : path.resolve(__dirname, './src/Services/'),
            '@Styles' : path.resolve(__dirname, './src/Styles/'),
        }
    },
    server: {
        https: true
    },
    define: {
        _MODE: DEV
    },
    publicDir: 'src/Assets/',
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
                dimensions: false
            }
        }),
        ViteFonts({
            google: {
                families: [{
                    name:'Nunito Sans',
                    styles: 'ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900'
                }]
            },
        })
    ],
    optimizeDeps: {
      exclude: [
        './src/Shared'
      ]
    }
})
