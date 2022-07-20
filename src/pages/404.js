import Link from 'next/link';
const notFound = () => {
	return (
		<div className='grid min-h-[70vh] place-items-center '>
			<div className='text-center'>
				<p className='px-10 py-5 m-5 text-3xl text-gray-400'>Page Not found</p>
				<Link href={'/'}>
					<a className='px-10 py-5 m-5 text-2xl hover:underline text-accent hover:text-secondary'>
						Go to Home
					</a>
				</Link>
			</div>
		</div>
	);
};

export default notFound;
