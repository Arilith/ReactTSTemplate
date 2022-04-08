module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-300' : '#111111',
                'dark-400' : '#333333',
                'dark-200' : '#222222',
                'dark-150' : '#1E1E1E',
                'dark-100' : '#1A1A1A',
                'light-100': '#ffffff',
                'accent'   : '#4d80ee',
                'secondary': '#6B9AFF',
                'tertiary' : '#234BA1',
                'alert-100': '#FF4136',
                'alert-200': '#e3261b',
                'success-100': '#01FF70',
            },
            borderRadius: {
                'mobile-small': '.5rem',
                'mobile-medium': '1rem',
                'mobile-big': '2rem'
            }
        },
        fontFamily: {
            'display': ['Nunito Sans'],
        }
    },
    plugins: [
        require('tailwindcss-safe-area')
    ]
}