export default function BuildCircleLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-press-start text-center mb-4">The project-first/talk-second social platform for engineers.</h1>
      <p className="text-lg font-press-start text-center max-w-2xl mb-6">
        Show off your builds, find collaborators, and get recognized for what you create — not where you work.
      </p>

      <div id="mc_embed_signup" className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 font-press-start">
        <h2 className="text-2xl mb-6 font-bold text-center">Subscribe</h2>
        <form
          action="https://outlook.us19.list-manage.com/subscribe/post?u=32e32670f50492130d881b96f&amp;id=0093053c8d&amp;f_id=0080aae6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="space-y-4"
          target="_blank"
        >
          <div>
            <label htmlFor="mce-EMAIL" className="block mb-1">Email Address *</label>
            <input type="email" name="EMAIL" id="mce-EMAIL" required className="p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="mce-FNAME" className="block mb-1">First Name</label>
            <input type="text" name="FNAME" id="mce-FNAME" className="p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="mce-LNAME" className="block mb-1">Last Name</label>
            <input type="text" name="LNAME" id="mce-LNAME" className="p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="mce-COMPANY" className="block mb-1">Company</label>
            <input type="text" name="COMPANY" id="mce-COMPANY" className="p-2 w-full border rounded" />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_32e32670f50492130d881b96f_0093053c8d" tabIndex="-1" defaultValue="" />
          </div>
          <div className="text-center">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded cursor-pointer" />
          </div>
        </form>
      </div>

      <div className="mt-10 text-left text-gray-800 font-press-start space-y-4">
        <p>🚀 Showcase your skills</p>
        <p>🤝 Meet and collaborate with other engineers</p>
        <p>🏆 Promote your availability and get placement</p>
      </div>
    </div>
  );
}
