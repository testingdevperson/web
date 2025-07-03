import React from 'react';
import { Mail, Eye, MousePointer, Calendar } from 'lucide-react';

interface EmailTableProps {
  searchTerm: string;
}

const EmailTable: React.FC<EmailTableProps> = ({ searchTerm }) => {
  const emailData = [
    {
      id: 1,
      email: 'john.doe@example.com',
      name: 'John Doe',
      campaign: 'Summer Sale 2024',
      status: 'Opened',
      openRate: '85%',
      clickRate: '12%',
      lastActivity: '2 hours ago',
      tags: ['VIP', 'Active']
    },
    {
      id: 2,
      email: 'jane.smith@company.com',
      name: 'Jane Smith',
      campaign: 'Product Launch',
      status: 'Clicked',
      openRate: '92%',
      clickRate: '28%',
      lastActivity: '1 day ago',
      tags: ['Enterprise', 'Hot Lead']
    },
    {
      id: 3,
      email: 'mike.johnson@startup.io',
      name: 'Mike Johnson',
      campaign: 'Newsletter #47',
      status: 'Bounced',
      openRate: '0%',
      clickRate: '0%',
      lastActivity: '3 days ago',
      tags: ['Bounced']
    },
    {
      id: 4,
      email: 'sarah.wilson@tech.com',
      name: 'Sarah Wilson',
      campaign: 'Welcome Series',
      status: 'Opened',
      openRate: '76%',
      clickRate: '8%',
      lastActivity: '5 hours ago',
      tags: ['New', 'Engaged']
    },
    {
      id: 5,
      email: 'david.brown@agency.net',
      name: 'David Brown',
      campaign: 'Webinar Invite',
      status: 'Pending',
      openRate: '0%',
      clickRate: '0%',
      lastActivity: 'Never',
      tags: ['Cold Lead']
    }
  ];

  const filteredData = emailData.filter(item =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Opened': return 'bg-blue-100 text-blue-800';
      case 'Clicked': return 'bg-green-100 text-green-800';
      case 'Bounced': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Campaign
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Performance
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Activity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tags
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors animate-slide-up">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.campaign}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-900">{item.openRate}</span>
                  </div>
                  <div className="flex items-center">
                    <MousePointer className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-900">{item.clickRate}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{item.lastActivity}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <Mail className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search terms or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailTable;