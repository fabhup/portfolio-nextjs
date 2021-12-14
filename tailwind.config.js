module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        sans: ['KoHo', 'sans-serif'],
      },
      colors: {
        success: 'green',
        cyan: '#79FFE1',
        gray: {
          darkest: "var(--gray-darkest)",
          dark: "var(--gray-dark)",
          DEFAULT: "var(--gray)",
          light: "var(--gray-light)",
          lightest: "var(--gray-lightest)",
        },
        theme: {
          bg: {
            DEFAULT: "var(--background)",
            hover: "var(--background-hover)",
            light: "var(--background-light)",
            dark: "var(--background-dark)",
            '1': "var(--background-1)",
            '2': "var(--background-2)",
          },
          text: {
            DEFAULT: "var(--text)",
            hover: "var(--text-hover)",
            '1': "var(--text-1)",
            '2': "var(--text-2)",
          },
          border: {
            '1': "var(--border-1)",
            '2': "var(--border-2)",
          },
          headings: {
            DEFAULT: "var(--headings)",
            hover: "var(--headings-hover)",
          },
          button: {
            DEFAULT: "var(--button-bg)",
            hover: "var(--button-hover)",
          },
          header: {
            bg:{
              DEFAULT: "var(--header-bg)",
            },
            text: {
              DEFAULT: "var(--header-text)",
            },
          },
          footer: {
            bg:{
              DEFAULT: "var(--footer-bg)",
            },
            text: {
              DEFAULT: "var(--footer-text)",
              hover: "var(--footer-text-hover)",
            },
          },
          primary: {
            DEFAULT: "var(--primary)",
            dark: "var(--primary-dark)",
            darkest: "var(--primary-darkest)",
            light: "var(--primary-light)",
            lightest: "var(--primary-lightest)",
          },
          secondary: {
            DEFAULT: "var(--secondary)",
            dark: "var(--secondary-dark)",
            darkest: "var(--secondary-darkest)",
            light: "var(--secondary-light)",
            lightest: "var(--secondary-lightest)",
          },
          tertiary: {
            DEFAULT: "var(--tertiary)",
            dark: "var(--tertiary-dark)",
            darkest: "var(--tertiary-darkest)",
            light: "var(--tertiary-light)",
            lightest: "var(--tertiary-lightest)",          }, 
          }
      },

      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      outline: {
        '1': '2px solid var(--background)',
      },
      minHeight: {
        'mobile':'calc(100vh - 11.5rem)',
        'desktop':'calc(100vh - 8rem)',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '50vh': '50vh',

        '3/4': '75%',
        '75vh': '75vh',
        '80vh': '80vh',
        '9/10': '90%',
        '90vh': '90vh',
        'full': '100%',
       },
      screens: {
        'xs': '380px',
      },
      keyframes: {
        footer: {
          '0%': { transform: 'translateY(200px)' },
          '20%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200px)' },
        },
        'footer-mobile': {
          '0%': { transform: 'translateY(100px)' },
          '20%': { transform: 'translateY(0)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        }
       },
       animation: {
        footer: 'footer 3s ease-in-out',
        'footer-mobile': 'footer-mobile 2s ease-in-out',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
