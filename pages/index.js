import Head from 'next/head';

export default function BuildCircleLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <Head>
        <title>BuildCircle</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      </Head>

      <h1 className="text-5xl font-press-start text-center mb-4">Welcome to BuildCircle</h1>
      <p className="text-lg font-press-start text-center max-w-2xl mb-6">
        The project-first social platform for engineers who ship.
      </p>

      <div id="mc_embed_signup">
        <form
          action="https://outlook.us19.list-manage.com/subscribe/post?u=32e32670f50492130d881b96f&amp;id=0093053c8d&amp;f_id=0080aae6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 font-press-start"
          target="_blank"
        >
          <h2 className="text-xl mb-4">Subscribe</h2>
          <div className="mb-4">
            <label htmlFor="mce-EMAIL">Email Address *</label>
            <input type="email" name="EMAIL" id="mce-EMAIL" required className="p-2 border w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-FNAME">First Name</label>
            <input type="text" name="FNAME" id="mce-FNAME" className="p-2 border w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-LNAME">Last Name</label>
            <input type="text" name="LNAME" id="mce-LNAME" className="p-2 border w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="mce-COMPANY">Company</label>
            <input type="text" name="COMPANY" id="mce-COMPANY" className="p-2 border w-full" />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_32e32670f50492130d881b96f_0093053c8d" tabIndex="-1" value="" />
          </div>
          <div className="text-center">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" />
          </div>
        </form>
      </div>

      <div className="mt-10 text-center text-gray-600 font-press-start">
        <p>🚀 Showcase your skills</p>
        <p>🤝 Meet engineering collaborators</p>
        <p>🏆 Win monthly build challenges</p>
      </div>
    </div>
  );
}
