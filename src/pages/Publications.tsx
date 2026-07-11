import React from 'react';
import { BookOpen, FileText, Calendar, Users, ExternalLink, Download } from 'lucide-react';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: 'journal' | 'conference' | 'newsletter';
  abstract: string;
  link?: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: 'Machine Learning Applications in IoT-Based Smart Agriculture Systems',
      authors: ['Arjun Nair', 'Dr. Rajesh Kumar', 'Sneha Patel'],
      venue: 'IEEE International Conference on Smart Technologies',
      year: '2024',
      type: 'conference',
      abstract: 'This paper presents a comprehensive study on implementing machine learning algorithms in IoT-based agricultural systems to optimize crop yield and resource management.',
      link: '#',
    },
    {
      title: 'Sustainable Energy Management in Smart Cities Using AI',
      authors: ['Rohit Mehta', 'Prof. Priya Sharma', 'Ananya Singh'],
      venue: 'IEEE Transactions on Sustainable Computing',
      year: '2024',
      type: 'journal',
      abstract: 'An innovative approach to managing energy consumption in smart cities using artificial intelligence and predictive analytics.',
      link: '#',
    },
    {
      title: 'Blockchain-Based Secure Data Transmission in Wireless Networks',
      authors: ['Karthik Rao', 'Divya Kamath', 'Dr. Rajesh Kumar'],
      venue: 'IEEE Conference on Network Security',
      year: '2023',
      type: 'conference',
      abstract: 'A novel blockchain-based protocol for ensuring secure and efficient data transmission in wireless communication networks.',
      link: '#',
    },
    {
      title: 'Deep Learning for Medical Image Analysis: A Comprehensive Survey',
      authors: ['Sneha Patel', 'Prof. Priya Sharma'],
      venue: 'IEEE Journal of Biomedical Engineering',
      year: '2023',
      type: 'journal',
      abstract: 'A detailed survey of deep learning techniques applied to medical image analysis, covering recent advances and future directions.',
      link: '#',
    },
  ];

  const newsletters = [
    {
      title: 'IEEE SB SMVITM Newsletter - Spring 2024',
      date: 'March 2024',
      description: 'Quarterly newsletter covering recent events, achievements, and upcoming activities.',
    },
    {
      title: 'IEEE SB SMVITM Newsletter - Winter 2024',
      date: 'December 2023',
      description: 'Year-end special edition highlighting major accomplishments and future plans.',
    },
    {
      title: 'IEEE SB SMVITM Newsletter - Fall 2023',
      date: 'September 2023',
      description: 'Academic year kickoff newsletter with new initiatives and team introductions.',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal': return 'bg-green-100 text-green-800';
      case 'conference': return 'bg-blue-100 text-blue-800';
      case 'newsletter': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal': return BookOpen;
      case 'conference': return Users;
      case 'newsletter': return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Showcasing our research contributions and knowledge sharing initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Journal Articles</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
              <div className="text-gray-600">Newsletters</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
              <div className="text-gray-600">Conference Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Papers</h2>
            <p className="text-xl text-gray-600">Our latest contributions to the scientific community</p>
          </div>
          
          <div className="space-y-6">
            {publications.map((publication, index) => {
              const TypeIcon = getTypeIcon(publication.type);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <TypeIcon className="w-5 h-5 text-blue-600 mr-2" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
                          {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                        </span>
                        <div className="flex items-center ml-4 text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">{publication.authors.join(', ')}</span>
                      </div>
                      
                      <p className="text-blue-600 font-medium text-sm mb-3">{publication.venue}</p>
                      <p className="text-gray-700 leading-relaxed">{publication.abstract}</p>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 md:mt-0 md:ml-6">
                      <a
                        href={publication.link}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View
                      </a>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Newsletters</h2>
            <p className="text-xl text-gray-600">Stay updated with our quarterly publications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="text-sm text-purple-600 font-medium">{newsletter.date}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{newsletter.title}</h3>
                <p className="text-gray-700 mb-4">{newsletter.description}</p>
                <div className="flex space-x-2">
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm">
                    <Download size={16} className="mr-1" />
                    Download PDF
                  </button>
                  <button className="flex items-center px-4 py-2 border border-purple-300 text-purple-700 rounded-md hover:bg-purple-50 transition-colors text-sm">
                    <ExternalLink size={16} className="mr-1" />
                    View Online
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Publications Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're working on exciting new research projects and publications. Stay tuned for updates!
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Research</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a research paper or article to share? We welcome contributions from our student community.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Paper
          </a>
        </div>
      </section>
    </div>
  );
};

export default Publications;