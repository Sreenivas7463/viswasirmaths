import { FaRocket, FaShieldAlt, FaCogs, FaMobileAlt, FaPaintBrush, FaUsers } from "react-icons/fa";

const features = [
  { icon: FaRocket, title: "SSC", text: "STAFF SELECTION COMMISSION" },
  { icon: FaShieldAlt, title: "RRB", text: "RAILWAY RECRUITMENT BOARD" },
  { icon: FaCogs, title: "BANKS", text: "BANK EXAMS" },
  { icon: FaMobileAlt, title: "DSC", text: "DISTRICT SELECTION COMMITTEE" },
  { icon: FaPaintBrush, title: "SI / CONSTABLE ", text: "SUB-INSPECTOR / CONSTABLE" },
  { icon: FaUsers, title: "CRT", text: "CAMPUS RECRUIT TRAINING" },
];

export default function Features() {
  return (
    <section id="courses" className="py-16 bg-blue-50 dark:bg-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-1 text-gray-900 dark:text-gray-100">Courses</h2>
        <p className="text-xs font-semibold text-center mb-12 text-gray-900 dark:text-gray-100">We Offer</p>
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