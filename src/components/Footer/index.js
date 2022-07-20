import Image from 'next/image';
import styles from './Footer.module.scss';
import { consulting, sociallinks } from './data';
import { links } from '../Navbar/data';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.container__content}>
				{consulting.map((consulting, index) => (
					<div key={index} className={styles.container__content__item}>
						<Image
							src={consulting.image}
							alt={consulting.name}
							width={36}
							height={36}
						/>
						<h3 className='text-2xl'>{consulting.name}</h3>
						<p className='py-3'>{consulting.description}</p>
						<a
							className='text-xl  hover:text-secondary'
							target='_blank'
							rel='noopener noreferrer'
							href={consulting.href}>
							{consulting.link}
						</a>
					</div>
				))}

				<div className={styles.container__content__links}>
					<h3 className={styles.container__content__links__menu}>
						Our Services
					</h3>
					<ul>
						{links.map((link, index) => (
							<li key={index}>
								<Link href={link.link}>
									<a>{link.name}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.container__content__links}>
					<h3 className={styles.container__content__links__social}>
						Social Links
					</h3>

					<ul>
						{sociallinks.map((link, index) => (
							<li key={index}>
								<a target='_blank' rel='noopener noreferrer' href={link.link}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* </div> */}
		</footer>
	);
};

export default Footer;
