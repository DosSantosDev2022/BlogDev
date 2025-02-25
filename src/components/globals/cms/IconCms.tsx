type CMSIconProps = {
	icon: string
	className?: string
}

const CMSIcon = ({ icon, className }: CMSIconProps) => {
	return (
		<div
			className={className}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: `<i class="${className}">${icon}</i>`,
			}}
		/>
	)
}

export { CMSIcon }
