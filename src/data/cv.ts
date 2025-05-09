import { link } from "framer-motion/client";

export const experiences = [
	{
		company: '',
		time: '',
		title: '',
		location: '',
		description: '',
	},
	// {
	// 	company: 'Radium Institute (Institut du Radium)',
	// 	time: '1914 - 1934',
	// 	title: 'Director',
	// 	location: 'Paris, France',
	// 	description: 'Led groundbreaking studies on radioactivity and mentored future Nobel Prize laureates.',
	// },
];

export const education = [
	{
		school: '',
		time: '',
		degree: '',
		location: '',
		description: '',
	},
	// {
	// 	school: 'University of Paris',
	// 	time: '1891 - 1895',
	// 	degree: 'Master’s in Physics and Mathematics',
	// 	location: 'Paris, France',
	// 	description: 'uated at the top of her class in physics and second in mathematics.',
	// },
];

export const skills = [
	{
		title: '',
		description: '',
	},
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const publications = [
	{
	  title: "GRAD",
	  image: `${import.meta.env.BASE_URL}images/GRAD.png`,
	  description:
		"Site vitrine d'une entreprise de création de terrasse, ce site est fait en HTML, CSS, JS ainsi que bootstrap dans le cadre d'un devoir de première année de BTS.",
	  link: "https://github.com/BBaptiste22/GRAD",
	  competence: [
		"Répondre aux incidents et aux demandes d’assistance et d’évolution",
		"Développer la présence en ligne de l’organisation",
		"Travailler en mode projet",
	  ],
	  showButton: true,
	},
	{
		title: "GLPI",
		image: `${import.meta.env.BASE_URL}images/glpi.png`,
		description: "Création d'un script Python afin de gerer l'envoi et la reception de ticket GLPI dans le cadre d'un projet de premiére année.",
		link: "",
		competence: [
			"Gérer le patrimoine informatique",
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Travailler en mode projet",
			"Mettre à disposition des utilisateurs un service informatique",
		  ],
	},
	{
		title: "Tournois de pétanque",
		image: `${import.meta.env.BASE_URL}images/petanque.png`,
		description: "Réalisation d'un site web pour la gestion de tournois de pétanque dans le cadre de mon premier stage de BTS dans l'association Aunis Freeware. Ce site est développé en PHP, JavaScript, Bootstrap et Ajax.",
		link: "https://github.com/BBaptiste22/GDT",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
			"Travailler en mode projet",
			"Organiser son développement professionnel"
		  ],
		showButton: true,
	},
	{
		title: "SIOCINE",
		image: `${import.meta.env.BASE_URL}images/siocine.png`,
		description: "Application Android en Java de gestion de cinéma affichant les films et séries récents via une requête API, avec des informations détaillées. Réalisée dans le cadre d’un projet de deuxième année de BTS.",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
		  ],
		link: "https://github.com/BBaptiste22/SIOCINE",
		showButton: true,
	},
	
	{
		title: "Lioran",
		image: `${import.meta.env.BASE_URL}images/lioran.png`,
		description: "Lioran est une application Android développée en Java pour la gestion d’une station de ski, avec une API Symfony pour la gestion des données. Ce projet a été réalisé dans le cadre de ma deuxième année de BTS SIO.",
		competence: [
			"Gérer le patrimoine informatique",
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
			"Travailler en mode projet",
			"Mettre à disposition des utilisateurs un service informatique",
		  ],
		link: "",
	},
	{
		title: "G-Bien Formé",
		image: `${import.meta.env.BASE_URL}images/formation.png`,
		description: "G-Bien Formé est une application web développée en Symfony avec une base de données PostgreSQL, elle facilite l’inscription des salariés à plusieurs formations. Ce projet a été réalisé dans le cadre de ma deuxième année de BTS SIO. ",
		competence: [
			"Gérer le patrimoine informatique",
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
			"Travailler en mode projet",
			"Mettre à disposition des utilisateurs un service informatique",
		  ],
		link: "https://github.com/BBaptiste22/Formationapp",
		showButton: true,
	},
	
	{
		title: "GAIA",
		image: `${import.meta.env.BASE_URL}images/GAIA.png`,
		description: "Réalisation du site internet GAIA, dédié à la présentation du hackathon du Salon de l'Agriculture 2025, dans le cadre de mon stage de deuxième année au sein de l'entreprise Ekylibre. Ce site a été entièrement développé en HTML, CSS, JavaScript et Markdown.",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
			"Travailler en mode projet",
			"Mettre à disposition des utilisateurs un service informatique",
			"Organiser son développement professionnel",
		  ],
		link: "https://www.gaia-ia.org/",
		showButton: true,
	},
	{
		title: "ChatBot GAIA",
		image: `${import.meta.env.BASE_URL}images/bot.png`,
		description: "Réalisation d’un ChatBot GAIA pour la démo d’un projet du hackathon du Salon de l’Agriculture 2025, projet réalisé lors de mon stage de deuxième année au sein de l’entreprise Ekylibre. Ce ChatBot a été développé en Python, en utilisant les outils Hugging Face et l’API Llama.",
		competence: [
			"Gérer le patrimoine informatique",
			"Travailler en mode projet",
			"Mettre à disposition des utilisateurs un service informatique",
			"Organiser son développement professionnel",
		  ],
		link: "https://huggingface.co/spaces/gaia-mistral/gaia-chat",
		showButton: true,
	},


	{
		title: "Veille informationnelle",
		image: `${import.meta.env.BASE_URL}images/veille.png`,
		description: "Réalisation d'une veille informationnelle sur l'evolution du développement mobile afin de se tenir informé des dernières tendances et technologies dans le domaine du développement mobile.",
		competence: [
			"Organiser son développement professionnel",
		  ],
		link: `${import.meta.env.BASE_URL}images/Veille.pdf`,
		showButton: true,
	},
	{
		title: "Jeu Othello",
		image: `${import.meta.env.BASE_URL}images/othello.png`,
		description: "Création d'un jeu Othello en Java, développé dans le cadre d'un projet de première année de BTS SIO.",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
		  ],
		link: "https://github.com/BBaptiste22/Othello",
		showButton: true,
	},


	{
		title: "Pierre-papier-ciseaux ",
		image: `${import.meta.env.BASE_URL}images/ppc.png`,
		description: "Application mobile Java de Pierre Papier Ciseaux permettant à deux utilisateurs proches de jouer ensemble grâce au service Nearby. Réalisée dans le cadre d’un projet de deuxième année de BTS.",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
			"Mettre à disposition des utilisateurs un service informatique",
		  ],
		link: "https://github.com/BBaptiste22/PierrePapierCiseaux",
		showButton: true,
	},

	{
		title: "Pronote",
		image: `${import.meta.env.BASE_URL}images/pronote.png`,
		description: "Création d’une application Android en Java simulant le principe de Pronote, avec gestion des cours, des notes... Réalisée dans le cadre d’un projet de deuxième année de BTS.",
		competence: [
			"Répondre aux incidents et aux demandes d’assistance et d’évolution",
			"Développer la présence en ligne de l’organisation",
		  ],
		link: "https://github.com/BBaptiste22/Pronote",
		showButton: true,
	},

	{
		title: "Portfolio ",
		image: `${import.meta.env.BASE_URL}images/portfolio.png`,
		description: "Création de mon portfolio pour l’épreuve E4 du BTS-SIO, développé avec Astro et hébergé sur GitHub",
		competence: [
			"Développer la présence en ligne de l’organisation",
			"Travailler en mode projet",
			"Organiser son développement professionnel",
		  ],
		link: "https://github.com/BBaptiste22/Portfolio",
		showButton: true,
	},
	
	
	

];
  
