import React from 'react';
import { Target, Eye, History, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To foster technological innovation and excellence while nurturing the next generation of engineers and technologists.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading student organization in advancing technology for the betterment of humanity.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Part of the world\'s largest technical professional organization with over 400,000 student members globally.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About IEEE SB SMVITM</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering students to become tomorrow's technology leaders through innovation, collaboration, and professional growth
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <History className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
              </div>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  The IEEE Student Branch at SMVITM was established in 2015 with a vision to bridge the gap between 
                  academic learning and industry requirements. Since our inception, we have grown into one of the most 
                  active student branches in the region.
                </p>
                <p className="text-lg">
                  Over the years, we have organized numerous technical workshops, seminars, and competitions that have 
                  benefited thousands of students. Our initiatives have consistently promoted research, innovation, and 
                  professional development among the student community.
                </p>
                <p className="text-lg">
                  Today, we stand as a beacon of technological excellence, continuing to inspire and nurture the next 
                  generation of engineers and technologists who will shape the future of our world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">9+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-green-100">Active Members</div>
              </div>
              <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Events Organized</div>
              </div>
              <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-orange-100">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We organize various activities to enhance technical skills and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Workshops</h3>
              <p className="text-gray-700">
                Regular workshops on emerging technologies, programming languages, and industry tools to keep students updated with latest trends.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitions</h3>
              <p className="text-gray-700">
                Organizing and participating in technical competitions, hackathons, and project exhibitions to showcase innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <Globe className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Connect</h3>
              <p className="text-gray-700">
                Facilitating interactions with industry professionals through guest lectures, industrial visits, and networking events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-100">ieee@smvitm.edu.in</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">+91 8242 266 234</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-blue-100">SMVITM, Bantakal, Udupi, Karnataka 574115</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;