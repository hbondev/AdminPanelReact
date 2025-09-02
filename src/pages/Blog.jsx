import Table from '../components/Table.jsx'

export default function Blog() {
	const columns = [
		{ key: 'id', title: 'شناسه' },
		{ key: 'title', title: 'عنوان' },
		{ key: 'author', title: 'نویسنده' },
		{ key: 'status', title: 'وضعیت' },
	]

	const data = [
		{ id: 'B-10', title: 'معرفی نسخه جدید محصول', author: 'تحریریه', status: 'منتشر شده' },
		{ id: 'B-11', title: 'راهنمای خرید لپ‌تاپ', author: 'نگار موسوی', status: 'پیش‌نویس' },
		{ id: 'B-12', title: 'نکات سئو برای وبلاگ', author: 'علی رضایی', status: 'در حال بررسی' },
	]

	return (
		<div className="space-y-4">
			<h2 className="text-lg font-semibold">وبلاگ</h2>
			<Table columns={columns} data={data} />
		</div>
	)
}


