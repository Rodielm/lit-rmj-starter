import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";
import { presetWebFonts } from "unocss";
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({

    server: {
        open: "/",
        port: 3000,
        watch: ["src"]
    },
    plugins: [
        Unocss({
            mode: "shadow-dom",
            shortcuts: [
                { "selected-circle": "border-theme bg-theme" }
            ],
            presets: [
                presetWind(),
            ],
            transformers: [
                transformerDirective(),
            ],
            theme: {
                colors: {
                    'body': '#17171F',
                    'selectedText': '#A3A3FF',
                    'theme': '#3F3FFF',
                    'nav': '#404053',
                    'secondary': '#9191A4',
                    'badge': '#3F3F51',
                    'inputBorder': '#565666',
                    'input': '#2A2A35'
                },
                fontFamily: {
                    "poppins": ["Poppins", "sans-serif"]
                }
            },
        }),
        presetWebFonts({
            provider: "google",
            fonts: {
                poppins: [
                    {
                        name: "Poppins",
                        weights: [400, 600, 700]
                    },
                    {
                        name: "sans-serif",
                        provider: "none",
                    }
                ]
            }
        })
    ]


})
