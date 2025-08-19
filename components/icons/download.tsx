'use client'

import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes, MouseEventHandler, Ref } from 'react'
import { useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'

const DownloadIcon = ({
	onMouseEnter,
	onMouseLeave,
	className,
	size = 28,
	ref,
	...props
}: {
	size?: number
	ref?: Ref<{
		startAnimation: () => void
		stopAnimation: () => void
	}>
} & HTMLAttributes<HTMLDivElement>) => {
	const controls = useAnimation()
	const isControlledRef = useRef(false)

	// Set up the ref with the animation controls
	if (ref) {
		const handle = {
			startAnimation: () => {
				void controls.start('animate')
			},
			stopAnimation: () => {
				void controls.start('normal')
			},
		} satisfies {
			startAnimation: () => void
			stopAnimation: () => void
		}

		isControlledRef.current = true

		// In React 19, we can directly assign to the ref
		if (typeof ref === 'function') {
			ref(handle)
		} else if ('current' in ref) {
			ref.current = handle
		}
	}

	const handleMouseEnter = useCallback<MouseEventHandler<HTMLDivElement>>(
		(e) => {
			if (!isControlledRef.current) {
				void controls.start('animate')
			} else {
				onMouseEnter?.(e)
			}
		},
		[controls, onMouseEnter],
	)

	const handleMouseLeave = useCallback<MouseEventHandler<HTMLDivElement>>(
		(e) => {
			if (!isControlledRef.current) {
				void controls.start('normal')
			} else {
				onMouseLeave?.(e)
			}
		},
		[controls, onMouseLeave],
	)

	return (
		<div
			className={cn(className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
				<motion.g
					variants={{
						normal: { y: 0 },
						animate: {
							y: 2,
							transition: {
								type: 'spring',
								stiffness: 200,
								damping: 10,
								mass: 1,
							},
						},
					}}
					animate={controls}
				>
					<polyline points="7 10 12 15 17 10" />
					<line
						x1="12"
						x2="12"
						y1="15"
						y2="3"
					/>
				</motion.g>
			</svg>
		</div>
	)
}

DownloadIcon.displayName = 'DownloadIcon'

export { DownloadIcon }
