import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Search, ListFilter as Filter, Image } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image?: string;
  type: 'workshop' | 'seminar' | 'competition' | 'social';
  status: 'upcoming' | 'ongoing' | 'completed';
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'workshop' | 'seminar' | 'competition' | 'social'>('all');

  // Sample events data
  const sampleEvents: Event[] = [
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      date: '2025-02-15',
      venue: 'Auditorium, SMVITM',
      description: 'A comprehensive workshop on machine learning fundamentals, covering algorithms, applications, and hands-on programming exercises.',
      type: 'workshop',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'IEEE Industry Connect 2025',
      date: '2025-02-20',
      venue: 'Conference Hall, SMVITM',
      description: 'Annual industry connect event featuring presentations from leading tech companies and networking opportunities.',
      type: 'seminar',
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'TechCode Hackathon',
      date: '2025-01-10',
      venue: 'Computer Lab, SMVITM',
      description: '48-hour hackathon focusing on innovative solutions for sustainable development and social impact.',
      type: 'competition',
      status: 'completed',
    },
    {
      id: '4',
      title: 'IEEE New Year Celebration',
      date: '2025-01-05',
      venue: 'Student Lounge, SMVITM',
      description: 'Welcome event for new IEEE members with team building activities and networking session.',
      type: 'social',
      status: 'completed',
    },
  ];

  useEffect(() => {
    // Load events from localStorage, fallback to sample data
    const storedEvents = localStorage.getItem('ieee_events');
    const allEvents = storedEvents ? JSON.parse(storedEvents) : sampleEvents;
    
    // Add sample events to localStorage if not present
    if (!storedEvents) {
      localStorage.setItem('ieee_events', JSON.stringify(sampleEvents));
    }
    
    // Determine event status based on date
    const eventsWithStatus = allEvents.map((event: Event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      let status: 'upcoming' | 'ongoing' | 'completed';
      if (eventDate < today) {
        status = 'completed';
      } else if (eventDate.toDateString() === today.toDateString()) {
        status = 'ongoing';
      } else {
        status = 'upcoming';
      }
      
      return { ...event, status };
    });
    
    setEvents(eventsWithStatus);
    setFilteredEvents(eventsWithStatus);
  }, []);

  useEffect(() => {
    let filtered = events;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(event => event.status === statusFilter);
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(event => event.type === typeFilter);
    }

    setFilteredEvents(filtered);
  }, [events, searchTerm, statusFilter, typeFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'seminar': return 'bg-blue-100 text-blue-800';
      case 'competition': return 'bg-orange-100 text-orange-800';
      case 'social': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us for exciting workshops, seminars, competitions, and networking opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
              >
                <option value="all">All Types</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="competition">Competition</option>
                <option value="social">Social</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center relative">
                    {event.image ? (
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    ) : (
                      <Image className="w-16 h-16 text-white" />
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm">9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Learn More →
                      </button>
                      {event.status === 'upcoming' && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Statistics</h2>
            <p className="text-xl text-gray-600">Our impact through events and activities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Total Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1500+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-600">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Competitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and activities. Join our community today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join IEEE SB SMVITM
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;