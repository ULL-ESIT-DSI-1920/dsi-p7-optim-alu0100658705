import FontAwesome from '@fortawesome/fontawesome-free/js/all.js';
import markdownReport from '../../REPORT.md';
import VanillaTilt from 'vanilla-tilt';

// Nombres de usuario (rellenar)
const SOCIAL = {
	GITHUB: 'alu0100658705',
	CODEPEN: 'alu0100658705',
	STEAM: '76561198019449070',
	YOUTUBE: 'UCv_HZvEICaD2IhrYxShP-NA/featured?view_as=subscriber',
};

const URL_PRACTICES = [
	'dsi-p1-parcel-',
	'dsi-p2-jspotify-',
	'dsi-p3-synth-',
	'dsi-p4-pokedex-',
	'dsi-p5-mkart-',
	'dsi-p6-win311-',
	'dsi-p7-optim-',
	'dsi-p8-docker-',
];

// Update user links
const links = Array.from(document.querySelectorAll('.practices.gallery a'));
const social = document.querySelectorAll('.social a');

const names = Array.from(document.querySelectorAll('.name'));

names.forEach((a) => (a.textContent = SOCIAL.GITHUB));

links.forEach(
	(a, i) =>
		(a.href = `https://github.com/ULL-ESIT-DSI-1920/${URL_PRACTICES[i]}${SOCIAL.GITHUB}`)
);
social[0].href = 'https://github.com/' + SOCIAL.GITHUB;
social[1].href = 'https://codepen.com/' + SOCIAL.CODEPEN;
social[2].href = 'https://steamcommunity.com/profiles/' + SOCIAL.STEAM;
social[3].href = 'https://www.youtube.com/channel/' + SOCIAL.YOUTUBE;

// Tilt card effect
const cards = document.querySelectorAll('.practices.gallery figure');
VanillaTilt.init(cards, { glare: true });

document.querySelector('.report').innerHTML = markdownReport;
