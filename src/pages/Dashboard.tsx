import React, { useState, useEffect } from 'react';
import { Calendar, Upload, Image, MapPin, FileText, Users, Bell, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  image?: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load events from localStorage
    const storedEvents = localStorage.getItem('ieee_events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.date || !formData.venue || !formData.description) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create new event
      const newEvent: Event = {
        id: Date.now().toString(),
        ...formData,
        image: selectedImage ? URL.createObjectURL(selectedImage) : undefined,
      };

      // Update events list
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      
      // Save to localStorage
      localStorage.setItem('ieee_events', JSON.stringify(updatedEvents));

      // Reset form
      setFormData({ title: '', date: '', venue: '', description: '' });
      setSelectedImage(null);
      setShowUploadForm(false);

      // Show success notification
      toast.success('Event uploaded successfully!');
      
      // Simulate email notification to members
      setTimeout(() => {
        toast('📧 Email notification sent to all IEEE members!', {
          icon: '✅',
          duration: 3000,
        });
      }, 1000);

    } catch (error) {
      toast.error('Failed to upload event. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { label: 'Total Events', value: events.length, icon: Calendar, color: 'bg-blue-500' },
    { label: 'This Month', value: events.filter(e => new Date(e.date).getMonth() === new Date().getMonth()).length, icon: Calendar, color: 'bg-green-500' },
    { label: 'Upcoming', value: events.filter(e => new Date(e.date) > new Date()).length, icon: Users, color: 'bg-purple-500' },
    { label: 'Notifications', value: events.length, icon: Bell, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}! Manage events and notifications.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Event Button */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Event Management</h2>
              <p className="text-gray-600">Upload new events and manage existing ones</p>
            </div>
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus size={20} className="mr-2" />
              {showUploadForm ? 'Cancel' : 'Upload Event'}
            </button>
          </div>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upload New Event</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                  Venue *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter event venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe the event details, objectives, and what attendees can expect..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Image (Optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    {selectedImage && (
                      <p className="text-sm text-green-600 mt-2">
                        Selected: {selectedImage.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload size={16} className="mr-2" />
                      Upload Event
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Recent Events */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Recent Events</h3>
            <p className="text-gray-600 mt-1">Manage and monitor uploaded events</p>
          </div>
          
          {events.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {events.slice(-5).reverse().map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1 text-blue-500" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1 text-blue-500" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm line-clamp-2">{event.description}</p>
                    </div>
                    <div className="ml-6 flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        new Date(event.date) > new Date()
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {new Date(event.date) > new Date() ? 'Upcoming' : 'Completed'}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Yet</h3>
              <p className="text-gray-600 mb-4">Upload your first event to get started</p>
              <button
                onClick={() => setShowUploadForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Upload Event
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;