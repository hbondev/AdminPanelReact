import Table from '../components/Table.jsx'

export default function Products() {
	const columns = [
		{ key: 'id', title: 'شناسه' },
		{ key: 'name', title: 'نام کالا' },
		{ key: 'price', title: 'قیمت (تومان)' },
		{ key: 'stock', title: 'موجودی' },
	]

	const data = [
		{ id: 'P-1001', name: 'گوشی هوشمند', price: '۱۲,۵۰۰,۰۰۰', stock: 32 },
		{ id: 'P-1002', name: 'لپ‌تاپ', price: '۴۵,۰۰۰,۰۰۰', stock: 5 },
		{ id: 'P-1003', name: 'هدفون بی‌سیم', price: '۳,۲۰۰,۰۰۰', stock: 120 },
		{ id: 'P-1004', name: 'نمایشگر ۲۷ اینچ', price: '۱۸,۹۰۰,۰۰۰', stock: 11 },
	]

	return (
		<div className="space-y-4">
			<h2 className="text-lg font-semibold">کالاها</h2>
			<Table columns={columns} data={data} />
		</div>
	)
}


