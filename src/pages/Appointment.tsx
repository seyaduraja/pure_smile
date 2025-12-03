import Button from "../Components/Button"
import WavePattern from "../Components/WavePattern"

const Appointment = () => {
  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen bg-[#FDFBF7] overflow-hidden px-6">
        <WavePattern />
        <div className="container mx-auto bg-white rounded-3xl p-8 text-[#3E2723] z-10 shadow-xl ">
          <h3 className="text-2xl font-serif mb-6">Request Appointment</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full bg-[#FDFBF7] border border-[#E5E0D5] p-3 rounded-xl focus:outline-none focus:border-[#C5A059]" />
              <input type="text" placeholder="Last Name" className="w-full bg-[#FDFBF7] border border-[#E5E0D5] p-3 rounded-xl focus:outline-none focus:border-[#C5A059]" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-[#FDFBF7] border border-[#E5E0D5] p-3 rounded-xl focus:outline-none focus:border-[#C5A059]" />
            <select className="w-full bg-[#FDFBF7] border border-[#E5E0D5] p-3 rounded-xl focus:outline-none focus:border-[#C5A059] text-[#3E2723]/60">
              <option>Select Service</option>
              <option>Root Canal</option>
              <option>Cosmetic</option>
              <option>General Checkup</option>
            </select>
            <textarea rows={3} placeholder="Message (Optional)" className="w-full bg-[#FDFBF7] border border-[#E5E0D5] p-3 rounded-xl focus:outline-none focus:border-[#C5A059]"></textarea>
            <Button variant="primary" className="w-full justify-center">Submit Request</Button>
          </form>
        </div>
      </div>

    </>

  )
}

export default Appointment