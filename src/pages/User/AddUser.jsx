export default function AddUser({title}) {
	return (
		<div>
			<h1>{title}</h1>
            <form>

            <div className="flex gap-4">
                <div>
                    <label className="block" htmlFor="name"> نام  و نام خانوادگی</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label className="block"  htmlFor="name">نام کاربری</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <label className="block" htmlFor="name">تاریخ تولد</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label className="block"  htmlFor="name">ایمیل</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <label className="block" htmlFor="name">رمز عبور</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
              
              
               

               
            </form>
		</div>
	)
}