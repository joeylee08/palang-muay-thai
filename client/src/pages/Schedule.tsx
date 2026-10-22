const Schedule = () => {
	
	
	return (
		<div className='mainPage schedule'>
			<img className='glovesoutline' src="/images/glovesoutline.png" alt="Boxing gloves outline" />
			<div className='child child1'>
				<h2 className='sectionHeading'>Monday</h2>
				<div className='scheduleCard'>
					<p>6:30 PM - 7:30 PM Strength and Conditioning</p>
					<p>7:30 PM - 8:30 PM Muay Thai</p>
				</div>
				<h2 className='sectionHeading'>Tuesday</h2>
				<div className='scheduleCard'>
					<p>6:30 PM - 7:30 PM Muay Thai</p>
					<p>7:30 PM - 8:30 PM Advanced Muay Thai</p>
				</div>
				<h2 className='sectionHeading'>Wednesday</h2>
				<div className='scheduleCard'>
					<p>6:30 PM - 7:30 PM Strength and Conditioning</p>
					<p>7:30 PM - 8:30 PM Muay Thai</p>
				</div>
				<h2 className='sectionHeading'>Thursday</h2>
				<div className='scheduleCard'>
					<p>6:30 PM - 7:30 PM Muay Thai</p>
					<p>7:30 PM - 8:30 PM Advanced Muay Thai</p>
				</div>
				<h2 className='sectionHeading'>Friday</h2>
				<div className='scheduleCard'>
					<p>7:00 PM - 8:30 PM Sparring</p>
				</div>
				<h2 className='sectionHeading'>Saturday</h2>
				<div className='scheduleCard'>
					<p>10:00 AM - 12:00 PM Open Gym</p>
				</div>
				<h2 className='sectionHeading'>Sunday</h2>
				<div className='scheduleCard'>
					<p>No Classes Sunday</p>
				</div>
			</div>
		</div>
	)
}

export default Schedule