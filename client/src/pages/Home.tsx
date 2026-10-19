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
						<div className='valuesCardIcon'>
							<Dumbbell size={45}/>
							Strength
						</div>
						<p>Physical and mental strength are inseparable.</p>
						<p>Pushing through physical discomfort strengthens our resolve and fighting spirit.</p>
						<p>A strong body and spirit give us the confidence to stand up for ourselves and others.</p>
						</div>
					<div className='valuesCard'>
						<div className='valuesCardIcon'>
							<Sword size={45}/>
							Courage
						</div>
						<p>Courage isn't simply stepping into the ring against a skilled fighter.</p>
						<p>Muay Thai teaches us to embrace uncertainty and persevere through self-doubt.</p>
						<p>Through these experiences, we become more courageous and steadfast individuals.</p>
					</div>
					<div className='valuesCard'>
						<div className='valuesCardIcon'>
							<HeartHandshake size={45}/>
							Respect
						</div>
						<p>A fighter without respect is like a ship without a rudder.</p>
						<p>True strength is not measured by our ability to overpower others, but by our willingness to protect and empower them.</p>
						<p>Our true power is seen in the respect we consistently show to others.</p>
					</div>
					<div className='valuesCard'>
						<div className='valuesCardIcon'>
							<TreePine size={45}/>
							Humility
						</div>
						<p>Our journeys are never finished.</p>
						<p>We continue to learn and grow throughout our lives.</p>
						<p>Humility allows us to recognize wisdom in unexpected places, learn from those around us, and transform ourselves in ways we never thought possible.</p>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Home