import React from 'react'
import g3 from "../../assets/donation/g3.jpg"
 
const AboutDonation = () => {
    // const data = [
    //     { title: "Registration", img: g1 },
    //     { title: "Seeing", img: g2 },
    //     { title: "Donation", img: g3 },
    //     { title: "Save Life", img: g4 },
    // ]
    const data = [
        { title: "Register", img: "https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=600", text: "To register for the blood donation camp, you need to fill out a simple online form with your personal details, such as name, age, gender, blood group, contact number, and email address. You will also need to answer some questions about your medical history and lifestyle habits. " },
        { title: "Checkup", img: "https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=600", text: "You will undergo a quick physical checkup by our medical staff, who will measure your blood pressure, pulse, temperature, and hemoglobin level. They will also ask you some additional questions to ensure that you are fit and healthy to donate blood." },
        { title: "Donate", img: g3, text: "A trained technician will insert a sterile needle into your arm and collect your blood in a sealed bag. The whole process will take about 10 to 15 minutes, and you will donate about 350 ml of blood. You will not feel any pain or discomfort during the donation" },
        { title: "Get Certificate", img: "https://signagemart.in/wp-content/uploads/2021/02/BLOOD-DONATION-CAMP-CERTIFICATE-1-1.jpg", text: "After you donate blood, you will be given a snack and a drink to replenish your energy. You will also receive a certificate of appreciation from us, which will acknowledge your generous contribution to saving lives. You can keep the certificate as a souvenir or share it on social media to inspire others to donate blood. " },
      ]
    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The donation process from the time you arrive center until the time you leave</code><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center'>
                    {data.map((e, i) =>
                        <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>{e.text}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutDonation
