const config = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',

				primary: 'var(--primary)',
				'primary-hover': 'var(--primary-hover)',
				'primary-foreground': 'var(--primary-foreground)',
				secondary: 'var(--secondary)',
				'secondary-hover': 'var(--secondary-hover)',
				'secondary-foreground': 'var(--secondary-foreground)',
				muted: 'var(--muted)',
				'muted-hover': 'var(--muted-hover)',
				'muted-foreground': 'var(--muted-foreground)',
				accent: 'var(--accent)',
				'accent-hover': 'var(--accent-hover)',
				'accent-foreground': 'var(--accent-foreground)',

				danger: 'var(--danger)',
				'danger-hover': 'var(--danger-hover)',
				'danger-foreground': 'var(--danger-foreground)',
				warning: 'var(--warning)',
				'warning-hover': 'var(--warning-hover)',
				'warning-foreground': 'var(--warning-foreground)',
				success: 'var(--success)',
				'success-hover': 'var(--success-hover)',
				'success-foreground': 'var(--success-foreground)',

				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',

				'chart-1': 'var(--chart-1)',
				'chart-2': 'var(--chart-2)',
				'chart-3': 'var(--chart-3)',
				'chart-4': 'var(--chart-4)',
				'chart-5': 'var(--chart-5)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
}

export default config
