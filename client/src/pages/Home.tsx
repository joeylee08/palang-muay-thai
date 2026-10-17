import { Dumbbell, Sword, HeartHandshake, TreePine } from "lucide-react"

const Home = () => {
	return (
		<div className='mainPage home'>
			<div className='child child1'>
				<img className='palangmtlogo' src="/images/palangmtlogo.png" alt="Palang Muay Thai logo" />
				<h2 className='thaiHeading'>พลังมวยไทย</h2>
			</div>
			<div className='subHeading'>
				<span>Strength</span>
				<span>·</span>
				<span>Courage</span>
				<span>·</span>
				<span>Respect</span>
				<span>·</span>
				<span>Humility</span>
				{/* <div className='valuesCard'>
					<Dumbbell />
					Strength
				</div>
				<div className='valuesCard'>
					<Sword />
					Courage
				</div>
				<div className='valuesCard'>
					<HeartHandshake />
					Respect
				</div>
				<div className='valuesCard'>
					<TreePine />
					Humility
				</div> */}
			</div>
			<div className='child child2 '></div>
		</div>
	);
}


export default Home