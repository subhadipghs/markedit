import React from 'react'

function Emoji({ariaLabel, symbol}) {
	return (
		<span role="img" aria-label={ariaLabel}>
			{symbol}
		</span>
	)
}

export default Emoji;