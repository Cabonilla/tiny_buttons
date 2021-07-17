import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animation from '../lotties/data.json'
import './CelebrateButton.css'


const CelebrateButton = () => {
	const [isPlayed, setIsPlayed] = useState(true)

	const defaultOptions = {
		play: {isPlayed},
		loop: true,
		autoplay: false,
		animationData: animation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	
	return (
		<div className="lottie">
			<Lottie options={defaultOptions} height={200} width={200} isPaused={isPlayed}/>
			<button className="lottiebutton" onClick={() => setIsPlayed(!isPlayed)}>
				{isPlayed ? "Celebrate!" : "Enough."}
			</button>
		</div>
	)
}

export default CelebrateButton
