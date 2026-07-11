import React from 'react';
import { User, Mail, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  department: string;
  email: string;
  image?: string;
  type: 'faculty' | 'student';
}

const Team: React.FC = () => {
  const facultyCoordinators: TeamMember[] = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Faculty Coordinator',
      department: 'Computer Science & Engineering',
      email: 'rajesh.kumar@smvitm.edu.in',
      type: 'faculty',
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Co-Faculty Coordinator',
      department: 'Electronics & Communication',
      email: 'priya.sharma@smvitm.edu.in',
      type: 'faculty',
    },
  ];

  const studentOfficeBearers: TeamMember[] = [
    {
      name: 'Arjun Nair',
      position: 'Chairperson',
      department: 'Computer Science & Engineering',
      email: 'arjun.nair@student.smvitm.edu.in',
      type: 'student',
    },
    {
      name: 'Sneha Patel',
      position: 'Vice Chairperson',
      department: 'Electronics & Communication',
      email: 'sneha.patel@student.smvitm.edu.in',
      type: 'student',
    },
    {
      name: 'Rohit Mehta',
      position: 'Secretary',
      department: 'Information Technology',
      email: 'rohit.mehta@student.smvitm.edu.in',
      type: 'student',
    },
    {
      name: 'Ananya Singh',
      position: 'Treasurer',
      department: 'Electrical & Electronics',
      email: 'ananya.singh@student.smvitm.edu.in',
      type: 'student',
    },
    {
      name: 'Karthik Rao',
      position: 'Technical Head',
      department: 'Computer Science & Engineering',
      email: 'karthik.rao@student.smvitm.edu.in',
      type: 'student',
    },
    {
      name: 'Divya Kamath',
      position: 'Events Coordinator',
      department: 'Electronics & Communication',
      email: 'divya.kamath@student.smvitm.edu.in',
      type: 'student',
    },
  ];

  const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <User className="w-24 h-24 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-1">{member.position}</p>
        <p className="text-gray-600 text-sm mb-4">{member.department}</p>
        <div className="flex items-center space-x-3">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Mail size={16} className="mr-1" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="#"
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={16} className="mr-1" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet the dedicated faculty and student leaders driving IEEE SB SMVITM forward
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Faculty Coordinators</h2>
            <p className="text-xl text-gray-600">Guiding our branch with expertise and vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Office Bearers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Office Bearers</h2>
            <p className="text-xl text-gray-600">Leading by example and inspiring innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentOfficeBearers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to join our executive team and contribute to our mission
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;