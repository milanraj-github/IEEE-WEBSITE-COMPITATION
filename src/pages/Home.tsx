import React, { useEffect, useState } from 'react';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image?: string;
}

const Home: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Load events from localStorage
    const events = JSON.parse(localStorage.getItem('ieee_events') || '[]');
    const upcoming = events
      .filter((event: Event) => new Date(event.date) >= new Date())
      .sort((a: Event, b: Event) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3);
    setUpcomingEvents(upcoming);
  }, []);

  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '25+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: BookOpen, label: 'Publications', value: '8+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-800 font-bold text-2xl">IEEE</span>
              </div>
              <div className="text-4xl font-bold text-white">×</div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-800 font-bold text-sm">SMVITM</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IEEE Student Branch
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              SMVITM, Bantakal
            </h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto">
              Advancing technology for humanity through innovation, collaboration, and professional development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events"
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Events
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for exciting events, workshops, and networking opportunities
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Users size={16} className="mr-2" />
                      <span>{event.venue}</span>
                    </div>
                    <p className="text-gray-700 line-clamp-3">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">Check back soon for new events and workshops!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="/events"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join IEEE?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of the world's largest technical professional organization
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;