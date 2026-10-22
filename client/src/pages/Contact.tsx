import { useState } from 'react'

const Contact = () => {
	const [messageData, setMessageData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSetMessageData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setMessageData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert("This is a demonstration form. No message was sent.");
		setMessageData({
			name: "",
			email: "",
			message: "",
		})
	};

	return (
		<div className='mainPage contact'>
			<img className='elephantoutline' style={{ width: "21rem", height: "auto" }}src="/images/elephantoutline.png" alt="Elephant outline" />
			<div className='child child1'>
				<h2 className='sectionHeading'>Attend a Free Trial Class</h2>
				<br/>
				<p>Feel free to drop in and join us for a free trial class.</p>
				<br/>
				<p>No appointment necessary. Just check out our schedule and find a scheduled Muay Thai session that works for you.</p>
				<br/>
				<p>Please show up 10 minutes early in comfortable shorts and a T-shirt.</p>
				<br/>
				<p>If you have your own gloves, great. If not, don't worry, we'll loan you a pair.</p>
				<br/>
				<p>We look forward to training with you.</p>
			</div>
			<br/>
			<br/>
			<div className='child child2'>
				<h2 className='sectionHeading'>Contact Us</h2>
				<br/>
				<form onSubmit={handleSendMessage}>
					<label htmlFor="messageName">Name: </label>
					<input
						type="text"
						id="messageName"
						name="name"
						value={messageData.name}
						onChange={handleSetMessageData}
						required
					></input>
					<label htmlFor="messageEmail">Email: </label>
					<input
						type="email"
						id="messageEmail"
						name="email"
						value={messageData.email}
						onChange={handleSetMessageData}
						required
					></input>
					<label htmlFor="messageNotes">Your Message: </label>
					<textarea
						id="messageNotes"
						name="message"
						rows={6}
						placeholder="Feel free to introduce yourself."
						value={messageData.message}
						onChange={handleSetMessageData}
						required
					></textarea>
					<br/>
					<button
						type="submit"
						className="pageBtn"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact