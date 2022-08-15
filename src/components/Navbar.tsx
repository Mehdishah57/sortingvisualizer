import React from 'react'
import { Center, Text } from '@chakra-ui/react'

const Navbar = () => {
	return (
		<Center
			padding="10px"
			width="100%"
		>
			<Text
				fontWeight="hairline"
				fontSize="25px"
				transition="all 0.2s ease-in-out"
				cursor="pointer"
				className='border-text'
			>
				Sorting Algorithm Visualizer
			</Text>
		</Center>
	)
}

export default Navbar