'use client'
import type { ComponentPropsWithRef, ReactNode } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import {
	createContext,
	useContext,
	useState,
	forwardRef,
	cloneElement,
	useEffect,
	useRef,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'

interface NavigationContextProps {
	openDropdown: string | null
	setOpenDropdown: (id: string | null) => void
	closeDropDown: () => void
}

const NavigationContext = createContext<
	NavigationContextProps | undefined
>(undefined)

const useNavigationContext = () => {
	const context = useContext(NavigationContext)
	if (!context) {
		throw new Error(
			'Navigation components must be used within a Navigation provider',
		)
	}
	return context
}

const NavigationProvider = ({ children }: { children: ReactNode }) => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)

	const closeDropDown = () => {
		setOpenDropdown(null)
	}

	return (
		<NavigationContext.Provider
			value={{ openDropdown, setOpenDropdown, closeDropDown }}
		>
			{children}
		</NavigationContext.Provider>
	)
}

const Navigation = forwardRef<HTMLElement, ComponentPropsWithRef<'nav'>>(
	({ className, ...props }, ref) => (
		<NavigationProvider>
			<nav
				aria-label='navigation'
				className={twMerge(
					'h-full w-full space-y-1 flex',
					'sm:space-y-2 lg:space-y-4',
					className,
				)}
				{...props}
				ref={ref}
			/>
		</NavigationProvider>
	),
)

Navigation.displayName = 'Navigation'

const NavigationList = forwardRef<
	HTMLUListElement,
	ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
	<ul
		className={twMerge(
			'flex flex-col p-2 lg:flex-row gap-2 sm:gap-4',
			className,
		)}
		{...props}
		ref={ref}
	/>
))

NavigationList.displayName = 'NavigationList'

interface NavigationItemProps extends ComponentPropsWithRef<'li'> {
	isDrop?: boolean
	dropdownItems?: ReactNode[]
	id?: string
	onLinkClick?: () => void
}

const NavigationItem = forwardRef<HTMLLIElement, NavigationItemProps>(
	(
		{
			className,
			isDrop,
			dropdownItems,
			id,
			children,
			onLinkClick,
			...props
		},
		ref,
	) => {
		const { openDropdown, setOpenDropdown, closeDropDown } =
			useNavigationContext()
		const isOpen = openDropdown === id
		const dropdownRef = useRef<HTMLUListElement>(null)

		const handleToggleDropdown = (event: React.MouseEvent) => {
			event.stopPropagation()
			if (isDrop && id) {
				setOpenDropdown(isOpen ? null : id)
			}
		}

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (
					isOpen &&
					dropdownRef.current &&
					!dropdownRef.current.contains(event.target as Node)
				) {
					closeDropDown()
				}
			}

			document.addEventListener('mousedown', handleClickOutside)
			return () => {
				document.removeEventListener('mousedown', handleClickOutside)
			}
		}, [isOpen, closeDropDown])

		return (
			<li
				className={twMerge(
					'flex items-center justify-start lg:justify-center rounded-md px-2 py-1.5 relative',
					'sm:min-w-24 cursor-pointer transition-all duration-300 ',
					' text-primary-foreground hover:bg-primary-hover',
					className,
				)}
				{...props}
				ref={ref}
				onClick={handleToggleDropdown}
			>
				{children}
				{isDrop && (
					<LuChevronDown
						className={twMerge(
							'ml-1 duration-300 transition-all',
							`${isOpen ? 'rotate-180' : ''}`,
						)}
					/>
				)}
				{isDrop && isOpen && dropdownItems && (
					<ul
						ref={dropdownRef}
						aria-label='dropdown-content'
						id={id}
						className={twMerge(
							'absolute top-full left-0 bg-primary shadow-md',
							' z-50 w-full mt-1 rounded-md shadow-md p-4',
							'ease-in transition-all duration-300',
						)}
					>
						{dropdownItems.map((item) => (
							<li
								key={uuidv4()}
								className={twMerge(
									'flex items-center justify-start lg:justify-center rounded-md px-2 py-1.5 relative',
									'sm:min-w-24 cursor-pointer transition-all duration-300 ',
									'text-sm font-light text-primary-foreground hover:bg-primary-hover',
									className,
								)}
							>
								{cloneElement(item as React.ReactElement)}
							</li>
						))}
					</ul>
				)}
			</li>
		)
	},
)

NavigationItem.displayName = 'NavigationItem'

interface NavigationLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	asChild?: boolean
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
	({ className, asChild, children, ...props }, ref) => {
		if (asChild) {
			return cloneElement(children as React.ReactElement, {
				...props,
				ref,
			})
		}

		return (
			<a className={twMerge('', className)} {...props} ref={ref}>
				{children}
			</a>
		)
	},
)

NavigationLink.displayName = 'NavigationLink'

const NavigationIcon = forwardRef<
	HTMLSpanElement,
	ComponentPropsWithRef<'span'>
>(({ className, ...props }, ref) => (
	<span
		className={twMerge('text-muted', className)}
		{...props}
		ref={ref}
	/>
))

NavigationIcon.displayName = 'NavigationIcon'

export {
	Navigation,
	NavigationIcon,
	NavigationItem,
	NavigationLink,
	NavigationList,
}
