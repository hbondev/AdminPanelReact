import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Products from './pages/Products.jsx'
import Users from './pages/User/Users.jsx'
import Blog from './pages/Blog.jsx'
import Tasks from './pages/Tasks.jsx'
import AddUser from './pages/User/AddUser.jsx'

function ThemeToggle() {
	const [isDark, setIsDark] = useState(() => {
		return localStorage.getItem('theme') === 'dark'
	})

	useEffect(() => {
		const root = document.documentElement
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	return (
		<button
			onClick={() => setIsDark((v) => !v)}
			className="px-3 py-2 rounded-md text-sm bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
		>
			{isDark ? 'تم روشن' : 'تم تیره'}
		</button>
	)
}

function Sidebar({ isOpen, onClose }) {
	const linkClass = ({ isActive }) =>
		`block px-3 py-2 rounded-md text-sm transition ${
			isActive
				? 'bg-indigo-600 text-white'
				: 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
		}`

	return (
		<>
			{/* Mobile drawer */}
			<div
				className={`fixed inset-0 z-40 md:hidden ${
					isOpen ? 'pointer-events-auto' : 'pointer-events-none'
				}`}
			>
				{/* Backdrop */}
				<div
					onClick={onClose}
					className={`absolute inset-0 bg-black/40 transition-opacity ${
						isOpen ? 'opacity-100' : 'opacity-0'
					}`}
				/>
				{/* Panel on the right (RTL) */}
				<aside
					className={`absolute right-0 top-0 h-full w-64 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
						<h1 className="font-bold">پنل مدیریت</h1>
						<button onClick={onClose} className="text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
							بستن
						</button>
					</div>
					<nav className="p-4 space-y-2">
						<NavLink to="/" end className={linkClass} onClick={onClose}>
							کالاها
						</NavLink>
						<NavLink to="/users" className={linkClass} onClick={onClose}>
							کاربران
						</NavLink>
						<NavLink to="/blog" className={linkClass} onClick={onClose}>
							وبلاگ
						</NavLink>
						<NavLink to="/tasks" className={linkClass} onClick={onClose}>
							وظایف
						</NavLink>
					</nav>
				</aside>
			</div>
			{/* Desktop persistent sidebar */}
			<aside className="hidden md:block w-64 shrink-0 h-screen sticky top-0 border-l border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
				<div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
					<h1 className="font-bold">پنل مدیریت</h1>
					<ThemeToggle />
				</div>
				<nav className="p-4 space-y-2">
					<NavLink to="/" end className={linkClass}>
						کالاها
					</NavLink>
					<NavLink to="/users" className={linkClass}>
						کاربران
					</NavLink>
					<NavLink to="/blog" className={linkClass}>
						وبلاگ
					</NavLink>
					<NavLink to="/tasks" className={linkClass}>
						وظایف
					</NavLink>
				</nav>
			</aside>
		</>
	)
}

export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
			{/* Main content on left, sidebar on right (RTL). On mobile, sidebar is a drawer. */}
			<main className="flex-1 order-2">
				<header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
					<div className="flex items-center gap-2">
						<span className="font-medium">خوش آمدید</span>
						<span className="text-sm text-gray-500">به پنل مدیریت</span>
					</div>
					{/* Mobile controls */}
					<div className="flex items-center gap-2 md:hidden">
						<ThemeToggle />
						<button
							onClick={() => setSidebarOpen(true)}
							className="px-3 py-2 rounded-md text-sm bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
						>
							منو
						</button>
					</div>
				</header>
				<section className="p-4 md:p-6 max-w-[100vw]">
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/users" element={<Users />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/users/add" element={<AddUser />} />
					</Routes>
				</section>
			</main>
			<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
		</div>
	)
}


