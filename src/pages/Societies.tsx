import React from 'react';
import { Radio, Computer, Heart, Users } from 'lucide-react';

interface Society {
  name: string;
  acronym: string;
  description: string;
  focus: string[];
  activities: string[];
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const Societies: React.FC = () => {
  const societies: Society[] = [
    {
      name: 'Communication Society',
      acronym: 'ComSoc',
      description: 'The IEEE Communications Society promotes the advancement of science, technology, and applications in communications and related disciplines.',
      focus: ['Wireless Communications', '5G/6G Technologies', 'Network Security', 'IoT Communications'],
      activities: [
        'Technical workshops on emerging communication technologies',
        'Guest lectures by industry experts',
        'Research paper presentations and competitions',
        'Industry collaboration projects'
      ],
      icon: Radio,
      color: 'text-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      name: 'Computer Society',
      acronym: 'CS',
      description: 'IEEE Computer Society is the world\'s leading membership organization dedicated to computer science and technology.',
      focus: ['Artificial Intelligence', 'Machine Learning', 'Software Engineering', 'Cybersecurity'],
      activities: [
        'Coding competitions and hackathons',
        'AI/ML workshops and bootcamps',
        'Open source project contributions',
        'Technical certification programs'
      ],
      icon: Computer,
      color: 'text-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      name: 'Special Interest Group on Humanitarian Technology',
      acronym: 'SIGHT',
      description: 'IEEE SIGHT leverages technology for humanitarian purposes and sustainable development.',
      focus: ['Sustainable Technology', 'Community Development', 'Social Impact', 'Environmental Solutions'],
      activities: [
        'Community service projects',
        'Technology for social good initiatives',
        'Environmental awareness campaigns',
        'Rural technology outreach programs'
      ],
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      name: 'Women in Engineering',
      acronym: 'WIE',
      description: 'IEEE Women in Engineering facilitates the recruitment and retention of women in technical disciplines.',
      focus: ['Gender Diversity', 'Leadership Development', 'Mentorship', 'Career Advancement'],
      activities: [
        'Women in tech leadership seminars',
        'Mentorship programs for female students',
        'Career development workshops',
        'Networking events and panel discussions'
      ],
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IEEE Societies</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Specialized communities fostering innovation and collaboration in diverse technical fields
            </p>
          </div>
        </div>
      </section>

      {/* Societies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Active Societies</h2>
            <p className="text-xl text-gray-600">Explore our diverse technical communities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {societies.map((society, index) => (
              <div key={index} className={`bg-gradient-to-br ${society.bgColor} rounded-lg overflow-hidden shadow-lg`}>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4`}>
                      <society.icon className={`w-8 h-8 ${society.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{society.name}</h3>
                      <p className={`text-lg font-semibold ${society.color}`}>IEEE {society.acronym}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{society.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {society.focus.map((area, idx) => (
                        <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities</h4>
                    <ul className="space-y-2">
                      {society.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`w-2 h-2 ${society.color.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Society Impact</h2>
            <p className="text-xl text-gray-600">Our societies are making a real difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Active Societies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">120+</div>
              <div className="text-gray-600">Society Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600">Society Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Collaborative Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Society Membership Benefits</h2>
            <p className="text-xl text-gray-600">Join our societies and unlock exclusive opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Computer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Expertise</h3>
              <p className="text-gray-700">Access to cutting-edge technical knowledge and specialized resources</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Networking</h3>
              <p className="text-gray-700">Connect with like-minded professionals and industry experts</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Development</h3>
              <p className="text-gray-700">Opportunities to lead projects and develop professional skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Societies</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of specialized technical communities and advance your career in your field of interest
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Societies;