import Image from 'next/image';

const About = () => {
  return (
    <section className="flex items-center my-10">
      <div className="mr-6">
        <Image 
          src="/path/to/image.jpg" 
          alt="About Image" 
          width={300} 
          height={300} 
          className="rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-lg">
          This is the about section where you can provide information about your project or yourself.
        </p>
      </div>
    </section>
  );
};

export default About;