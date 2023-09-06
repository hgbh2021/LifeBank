import React from 'react'
// import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "Company related queries, feedback and suggestions", body: [
                "Center For Human resorces and health Mangement",
                "C-56/1, SBI Colony , Sector-6, Bhilai, Chhattisgarh",
                
            ]
        },
        {
            title: "Email and Mobile Number", body: [
                "Email: LifeBank@gov.in",
                "Ph-No: 9876543210"
            ]
        },
        { title: "For Corporate queries", body: ["LifeBank, National Health Mission", "Bhilai Nagar - near SBI Colony, SDA Complex, Bhilai, 491001, CHHATTISGARH"] }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src="https://zeevector.com/wp-content/uploads/Azadi-Ka-Amrit-Mahotsav-Logo-PNG@zeevector.png" draggable={false} width="90%" alt="" />
                </div>
            </div>
            <div className='w-full bg-purple text-white-900 h-max text-sm text-center font-bold'>
        {/* <code> LifeBank @ {new Date().getFullYear()} || Made with ❤️ by Hemant Gaur</code> */}
        &copy; {new Date().getFullYear()} <a href="/" class="copyright-link">LifeBank- Saving Lives One Drop at a Time</a>. Made By Hemant Gaur
      </div>
        </div>
    )
}

export default Contact