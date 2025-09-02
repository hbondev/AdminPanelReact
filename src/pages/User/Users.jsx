import Table from '../../components/Table.jsx'

export default function Users() {
	const columns = [
		{ key: 'id', title: 'شناسه' },
		{ key: 'name', title: 'نام' },
		{ key: 'email', title: 'ایمیل' },
		{ key: 'role', title: 'نقش' },
	]

	const data = [
		{ id: 'U-1', name: 'حسین بنیادی', email: 'hossein@example.com', role: 'مدیر' },
		{ id: 'U-2', name: 'علی رضایی', email: 'ali@example.com', role: 'کاربر' },
		{ id: 'U-3', name: 'نگار موسوی', email: 'negar@example.com', role: 'نویسنده' },
		{ id: 'U-4', name: 'محمد کاظمی', email: 'mk@example.com', role: 'ویرایشگر' },
	]

	return (
		<div className="space-y-4">
			<h2 className="text-lg font-semibold">کاربران</h2>
			<Table columns={columns} data={data} />
		</div>
	)
}


