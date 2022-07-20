import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const links = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Services',
		link: '/services',
	},

	{
		name: 'About',
		link: '/about',
	},

	{
		name: 'Contact',
		link: '/contact',
	},
];

export const icons = [
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jchademwiri/',
		icon: <FaLinkedinIn />,
	},
	{
		name: 'Github',
		link: 'https://www.github.com/jchademwiri/',
		icon: <FaGithub />,
	},
	{
		name: 'Email',
		link: 'mailto:info@playhousemedia.net',
		icon: <AiOutlineMail />,
	},
	{
		name: 'Phone',
		link: 'tel:+27740491433',
		icon: <BsFillTelephoneFill />,
	},
];
