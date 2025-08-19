'use client'

import { DownloadIcon } from '@/components/icons/download'
import LinkButton from '@/components/ui/link-button'
import { useRef } from 'react'

const DownloadResumeButton = () => {
	const controlRef = useRef<{
		startAnimation: () => void
		stopAnimation: () => void
	}>(null)

	const handleMouseEnter = () => {
		controlRef.current?.startAnimation()
	}

	const handleMouseLeave = () => {
		controlRef.current?.stopAnimation()
	}

	return (
		<LinkButton
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			label="Download Resume"
			iconRight={
				<DownloadIcon
					ref={controlRef}
					size={16}
					className="text-gray-400"
				/>
			}
			href="/jamie_taylor_resume.pdf"
            target='_blank'
		/>
	)
}

export default DownloadResumeButton
