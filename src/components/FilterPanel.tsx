import React, { useState } from 'react';
import { X } from 'lucide-react';

const FilterPanel: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState('');

  const statusOptions = ['Opened', 'Clicked', 'Bounced', 'Pending'];
  const campaignOptions = ['Summer Sale 2024', 'Product Launch', 'Newsletter #47', 'Welcome Series', 'Webinar Invite'];

  const handleStatusChange = (status: string) => {
    setSelectedStatus(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleCampaignChange = (campaign: string) => {
    setSelectedCampaign(prev =>
      prev.includes(campaign)
        ? prev.filter(c => c !== campaign)
        : [...prev, campaign]
    );
  };

  const clearFilters = () => {
    setSelectedStatus([]);
    setSelectedCampaign([]);
    setDateRange('');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
          <div className="space-y-2">
            {statusOptions.map(status => (
              <label key={status} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedStatus.includes(status)}
                  onChange={() => handleStatusChange(status)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Campaign Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Campaign</label>
          <div className="space-y-2">
            {campaignOptions.map(campaign => (
              <label key={campaign} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCampaign.includes(campaign)}
                  onChange={() => handleCampaignChange(campaign)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{campaign}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Date Range</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="input"
          >
            <option value="">All time</option>
            <option value="today">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="quarter">This quarter</option>
            <option value="year">This year</option>
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedStatus.length > 0 || selectedCampaign.length > 0 || dateRange) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {selectedStatus.map(status => (
              <span
                key={status}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                Status: {status}
                <button
                  onClick={() => handleStatusChange(status)}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedCampaign.map(campaign => (
              <span
                key={campaign}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                Campaign: {campaign}
                <button
                  onClick={() => handleCampaignChange(campaign)}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {dateRange && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Date: {dateRange}
                <button
                  onClick={() => setDateRange('')}
                  className="ml-2 text-orange-600 hover:text-orange-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;