import React from 'react'
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g3 from "../../assets/donation/g3.jpg"
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
  ]
  const temp2 = [
    { title: "Register", img: "https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=600", text: "To register for the blood donation camp, you need to fill out a simple online form with your personal details, such as name, age, gender, blood group, contact number, and email address. You will also need to answer some questions about your medical history and lifestyle habits. " },
    { title: "Checkup", img: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=600", text: "You will undergo a quick physical checkup by our medical staff, who will measure your blood pressure, pulse, temperature, and hemoglobin level. They will also ask you some additional questions to ensure that you are fit and healthy to donate blood." },
    { title: "Donate", img: g3, text: "A trained technician will insert a sterile needle into your arm and collect your blood in a sealed bag. The whole process will take about 10 to 15 minutes, and you will donate about 350 ml of blood. You will not feel any pain or discomfort during the donation" },
    { title: "Get Certificate", img: "https://signagemart.in/wp-content/uploads/2021/02/BLOOD-DONATION-CAMP-CERTIFICATE-1-1.jpg", text: "After you donate blood, you will be given a snack and a drink to replenish your energy. You will also receive a certificate of appreciation from us, which will acknowledge your generous contribution to saving lives. You can keep the certificate as a souvenir or share it on social media to inspire others to donate blood. " },
  ]
  return (
    <div className="dark:text-white-900">
      <img src="https://zeevector.com/wp-content/uploads/Azadi-Ka-Amrit-Mahotsav-Logo-PNG@zeevector.png" alt="amrutkal logo" className=' flex h-[180px] mx-auto w-[200px] justify-center items-center ' />
      <img src={bg} alt="" />
      <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
        <div>
          <img draggable={false} src={bg2} width="100%" alt="" />
        </div>
        <div>
          <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
            Donate blood today <br /> and <br /> save a life tomorrow.
          </p>
        </div>
      </div>
      <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1>
      <div className='flex px-20'>
        <div>
          <img src={donationFact} width="90%" alt="" />
          {/* <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p> */}
        </div>
        <div>
          <table className='w-max' cellPadding={5}>
            <tr>
              <td colSpan={3} className="border bg-purple text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
            </tr>
            <tr>
              <th className='border w-max text-lg'>Blood Type</th>
              <th className='border w-max text-lg'>Donate Blood To</th>
              <th className='border w-max text-lg'>Receives Blood From</th>
            </tr>
            {temp.map((e) => {
              return (
                <tr>
                  <td className='border w-max text-lg'>{e.blood}</td>
                  <td className='border w-max text-lg'>{e.donate}</td>
                  <td className='border w-max text-lg'>{e.recieve}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      <p className='text-xl underline font-bold text-blood text-center mt-5 mb-5'>
        Blood Donation Process
      </p>
      <div className='grid grid-cols-2 place-items-center'>
        {temp2.map((e, i) =>
          <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
            <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
            <div className='m-4'>
              <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
              <p className='text-justify'> {e.text} </p>
            </div>
          </div>
        )}
      </div>
      <br />
      <footer class="flex justify-center w-full bg-[#f0dbc0] px-6">
        <div class="w-full mt-12 max-w-8xl">
          <div class="flex flex-col md:flex-row text-center md:text-left">
            <div
              class="flex flex-col items-center md:items-start w-full md:w-2/6 border-b pb-8 md:pb-0 md:border-none border-gray-600">
              <a href="/">
              </a>
              <p class="mt-2 text-2xl font-light text-gray-100">
                Every Drop Counts: Be a Lifesaver, Be a Blood Donor.
              </p>
              <img class="hidden md:block my-10 w-16" src="https://th.bing.com/th/id/OIP.gb_xW25ZeejLNFhlhpFCVAHaE8?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt='donation' />
            </div>
            <div class="flex flex-col w-full md:w-1/6 md:ml-8">
              <p class="mt-6 md:mt-0 text-md text-white">Features</p>
              <a href="/" class="mt-4 text-sm font-light text-gray-600 hover:text-gray-300">Help Desk</a>
              <a href="/" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Reports</a>
              <a href="/" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Announcements
                <span class="ml-1 px-1 font-semibold text-white text-xs bg-blue-500 rounded">COMING SOON</span></a>
              <a href="/" class="mt-2 text-sm font-light text-gray-600 hover:text-gray-300">Contact Us</a>
            </div>
          
          </div>
          
        </div>
      </footer>
      {/* <img src="" className='flex h-[180px] mx-auto w-[200px] justify-center items-center'alt='donation img' /> */}

      <div className='w-full bg-purple text-white-900 h-max text-sm text-center font-bold'>
        {/* <code> LifeBank @ {new Date().getFullYear()} || Made with ❤️ by Hemant Gaur</code> */}
        &copy; {new Date().getFullYear()} <a href="/" class="copyright-link">LifeBank- Saving Lives One Drop at a Time</a>. Made By Hemant Gaur
      </div>
    </div>
  )
}

export default Home