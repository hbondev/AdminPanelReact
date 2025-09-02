import Table from '../components/Table.jsx'

export default function Tasks() {
	const columns = [
		{ key: 'id', title: 'شناسه' },
		{ key: 'title', title: 'عنوان وظیفه' },
		{ key: 'assignee', title: 'مسئول' },
		{ key: 'due', title: 'موعد' },
		{ key: 'status', title: 'وضعیت' },
	]

	const data = [
		{ id: 'T-201', title: 'طراحی صفحه اصلی', assignee: 'نگار', due: '۱۴۰۳/۰۶/۱۵', status: 'در حال انجام' },
		{ id: 'T-202', title: 'رفع باگ پرداخت', assignee: 'علی', due: '۱۴۰۳/۰۶/۲۰', status: 'باز' },
		{ id: 'T-203', title: 'مستندسازی API', assignee: 'محمد', due: '۱۴۰۳/۰۶/۲۲', status: 'انجام شده' },
	]

	return (
		<div className="space-y-4">
			<h2 className="text-lg font-semibold">وظایف</h2>
			<Table columns={columns} data={data} />
		</div>
	)
}


