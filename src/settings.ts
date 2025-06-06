export const profile = {
	fullName: 'BERNARD Baptiste',
	title: '',
	institute: '',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'bernard.baptiste08@gmail.com',
	linkedin: '',
	x: '',
	github: 'https://github.com/BBaptiste22',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	cv: `${import.meta.env.BASE_URL}images/cv.pdf`
}

export const template = {
	website_url: 'https://bbaptiste22.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/Portfolio/' // Repository name starting with /
}

export const seo = {
	default_title: 'Portfolio | BERANRD Baptiste',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
