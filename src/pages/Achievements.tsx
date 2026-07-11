import React from 'react';
import { Award, Trophy, Star, Users, Calendar, Target } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  category: string;
  icon: React.ElementType;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Outstanding Student Branch Award',
      description: 'Recognized as one of the top 10 IEEE Student Branches in India for exceptional activities and member engagement.',
      year: '2024',
      category: 'Branch Recognition',
      icon: Trophy,
    },
    {
      title: 'Best Technical Paper Award',
      description: 'Our student research team won the best technical paper award at the IEEE International Conference on Technology.',
      year: '2024',
      category: 'Research Excellence',
      icon: Star,
    },
    {
      title: 'Community Service Award',
      description: 'IEEE SIGHT chapter received recognition for outstanding community service and social impact projects.',
      year: '2023',
      category: 'Social Impact',
      icon: Users,
    },
    {
      title: 'Innovation Challenge Winner',
      description: 'First place in the IEEE Region 10 Student Innovation Challenge for developing sustainable technology solutions.',
      year: '2023',
      category: 'Innovation',
      icon: Target,
    },
    {
      title: 'Membership Growth Award',
      description: 'Achieved 200% growth in student membership, making us one of the fastest-growing branches in the region.',
      year: '2023',
      category: 'Growth',
      icon: Users,
    },
    {
      title: 'Best Event Organization',
      description: 'Successfully organized the Regional IEEE Student Congress with over 500 participants from across South India.',
      year: '2022',
      category: 'Event Management',
      icon: Calendar,
    },
  ];

  const stats = [
    { label: 'Awards Won', value: '15+', color: 'bg-blue-600' },
    { label: 'Research Papers', value: '25+', color: 'bg-green-600' },
    { label: 'Conferences Attended', value: '30+', color: 'bg-purple-600' },
    { label: 'Recognition Letters', value: '50+', color: 'bg-orange-600' },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Celebrating excellence in technology, innovation, and community service
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} text-white p-6 rounded-lg text-center`}>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Major Achievements</h2>
            <p className="text-xl text-gray-600">Our journey of excellence and recognition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{achievement.category}</p>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievement Timeline</h2>
            <p className="text-xl text-gray-600">Milestones in our journey of excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {achievements.slice(0, 4).map((achievement, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-3">
                      <achievement.icon className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium text-sm">{achievement.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-700 text-sm">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking Ahead</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We continue to strive for excellence and set new benchmarks in technical education and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
              <p className="text-blue-100">Expanding our research initiatives and publications</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-blue-100">Achieving international acclaim for our innovations</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-blue-100">Creating sustainable solutions for societal challenges</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;