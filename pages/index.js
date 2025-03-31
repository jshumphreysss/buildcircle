export default function BuildCircleLanding() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-8 font-press text-black">
      <h1 className="text-6xl font-press text-center mb-4">BUILDCIRCLE</h1>
      <p className="text-xl font-press text-center mb-6">
        The project-first/talk-second social platform for engineers.
      </p>

      <h2 className="text-2xl font-press text-center font-bold mb-6">Request Early Access</h2>

      <div className="w-full max-w-md bg-white p-6 border-4 border-black">
        <form
          action="https://outlook.us19.list-manage.com/subscribe/post?u=32e32670f50492130d881b96f&amp;id=0093053c8d&amp;f_id=0080aae6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="space-y-4"
          target="_blank"
        >
          <div>
            <label htmlFor="mce-EMAIL">Email Address *</label>
            <input type="email" name="EMAIL" id="mce-EMAIL" required className="w-full p-2 border border-black" />
          </div>
          <div>
            <label htmlFor="mce-FNAME">First Name</label>
            <input type="text" name="FNAME" id="mce-FNAME" className="w-full p-2 border border-black" />
          </div>
          <div>
            <label htmlFor="mce-LNAME">Last Name</label>
            <input type="text" name="LNAME" id="mce-LNAME" className="w-full p-2 border border-black" />
          </div>
          <div>
            <label htmlFor="mce-COMPANY">Company</label>
            <input type="text" name="COMPANY" id="mce-COMPANY" className="w-full p-2 border border-black" />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_32e32670f50492130d881b96f_0093053c8d" tabIndex="-1" defaultValue="" />
          </div>
          <div className="text-center">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-gray-300 border border-black px-4 py-2 cursor-pointer" />
          </div>
        </form>
      </div>

      <div className="mt-10 text-left font-press space-y-4">
        <p>🚀 Showcase your skills</p>
        <p>🤝 Meet and collaborate with other engineers</p>
        <p>🏆 Promote your availability and get placement</p>
      </div>
    </div>
  );
}
