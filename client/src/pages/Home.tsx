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
			</div>
			<div className='child child2 '>
				<h2 className='sectionHeading'>Traditional Muay Thai Training</h2>
				<p>Palang Muay Thai is a traditional Thai-style boxing gym with a strong emphasis on technique, conditioning, and fight preparation.</p>
				<p>PMT was founded in 2026 by Kru Lee, who spent 7 years training and fighting professionally in Chiang-Mai, Bangkok, and Phuket.</p>
				<p>Throughout his years of training, Kru Lee developed a deep and enduring passion for Thai Boxing.</p>
				<p>He founded Palang Muay Thai in order to help others experience the joy of training and growing alongside a community of competent, humble, and supportive individuals.</p>
				<br/>
				<h2 className='sectionHeading'>What is Muay Thai?</h2>
				<p>Muay Thai simply means Thai Boxing.</p>
				<p>Muay Thai is a highly-effective striking art that utilizes punches, kicks, knees, and elbow strikes. It is commonly referred to as the Art of Eight Limbs.</p>
				<p>Muay Thai's roots extend back centuries into the fighting traditions of ancient Siam.</p>
				<p>While it has undergone many changes that have made it safer and more accessible, the fighting spirit associated with ancient Muay Thai remains unchanged.</p>
				<br/>
				<h2 className='sectionHeading'>Our Core Values</h2>
				<div className='valuesBox'>
					<div className='valuesCard'>
						<Dumbbell size={45}/>
							Strength
						</div>
					<div className='valuesCard'>
						<Sword size={45}/>
						Courage
					</div>
					<div className='valuesCard'>
						<HeartHandshake size={45}/>
						Respect
					</div>
					<div className='valuesCard'>
						<TreePine size={45}/>
						Humility
					</div>
				</div>
			</div>
		</div>
	);
}


export default Home