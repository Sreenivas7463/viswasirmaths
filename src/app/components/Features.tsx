import { FaRocket, FaShieldAlt, FaCogs, FaMobileAlt, FaPaintBrush, FaUsers } from "react-icons/fa";

const features = [
  { icon: FaRocket, title: "Fast", text: "Optimized for speed and performance." },
  { icon: FaShieldAlt, title: "Secure", text: "Built with security best practices." },
  { icon: FaCogs, title: "Customizable", text: "Easily extend and modify." },
  { icon: FaMobileAlt, title: "Responsive", text: "Looks great on any device." },
  { icon: FaPaintBrush, title: "Beautiful", text: "Clean and modern UI." },
  { icon: FaUsers, title: "User-First", text: "Designed with users in mind." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-blue-50 dark:bg-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-start space-x-4">
                <feature.icon className="text-4xl text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-gray-100">{feature.title}</h3>
                  <p className="text-black dark:text-gray-400">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}