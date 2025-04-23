export default function ContactMe() {
  return (
    <section id="contact" className="bg-zinc-950 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Get in Touch</h2>
          <p className="text-gray-400">
            Got a message or idea? Drop it below — I’ll get back to you soon!
          </p>
        </div>

        {/* Right Side - Message Form */}
        <div className="w-full md:w-1/2">
          <form
            action="https://formsubmit.co/abhishekpant2024@gmail.com"
            method="POST"
            className="bg-zinc-900 p-6 rounded-xl shadow-lg"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thanks" // replace with your redirect URL
            />

            <textarea
              name="message"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 text-sm text-white bg-zinc-900 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />

            <button className="w-full p-[3px] relative z-100 ">
              <div className="w-full absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 w-full bg-zinc-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <a href="../public/Resume/Abhishek_Pant_Resume.pdf" download>
                  Sumbit
                </a>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
