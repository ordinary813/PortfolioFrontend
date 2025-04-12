import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
	return (
		<section
			id="hero"
			className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 md:px-20"
		>
			<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Text */}
				<div className="text-left">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						<TypeAnimation
							sequence={[
								'Hi,',
								750,
								'Hi, I\'m '
							]}
							wrapper="span"
							speed={50}
							style={{ display: 'inline' }}
							repeat={0}
							cursor={false}
						/>
						<span className="text-amber-500">
							<TypeAnimation
								sequence={[
									'',
									1250,
									'Or.'
								]}
								wrapper="span"
								speed={50}
								style={{ display: 'inline' }}
								repeat={0}
								cursor={false}
							/>
						</span>
					</h1>
					<p className="text-4xl text-gray-700 mb-6">
						A Software Developer and Machine Learning Enthusiast.
					</p>
					<button
						onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
						className="bg-amber-500 text-white px-6 py-3 rounded-md shadow hover:bg-amber-600 transition hover:cursor-pointer"
					>
						View My Projects
					</button>
				</div>

				{/* Image */}
				<div className="flex justify-end">
					<img
						src='../../public/images/pic.JPEG'
						alt="Profile image"
						className="w-125 h-125 scale-110 rounded-full object-cover shadow-lg
						transform transition-transform duration-500 hover:scale-115"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
