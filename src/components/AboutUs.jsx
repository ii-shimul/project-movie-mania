import logo from "./../assets/logo.png"

const AboutUs = () => {

  return (
    <div id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={logo}
            alt="About us"
            className="rounded-xl shadow-lg"
          />
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Welcome to <span className="font-semibold">MovieMania</span>, your
              ultimate destination for all things movies! Our platform is
              dedicated to bringing movie enthusiasts together, offering curated
              lists, insightful reviews, and personalized recommendations to
              enhance your viewing experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Whether you're a casual viewer or a cinephile, we've got something
              for everyone. At MovieMania, we believe that every movie has a
              story to tell, and we’re here to help you discover the ones that
              resonate with you the most.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Join us on this cinematic journey, and let's explore the world of
              movies together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;