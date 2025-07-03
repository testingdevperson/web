import React, { useState } from 'react';
import { Mail, Users, TrendingUp, Calendar, Search, Filter, Download, Plus } from 'lucide-react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import EmailTable from './components/EmailTable';
import FilterPanel from './components/FilterPanel';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const stats = [
    {
      title: 'Total Leads',
      value: '2,847',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Email Opens',
      value: '1,234',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Mail,
      color: 'green'
    },
    {
      title: 'Click Rate',
      value: '24.8%',
      change: '+3.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'This Month',
      value: '456',
      change: '-2.4%',
      trend: 'down' as const,
      icon: Calendar,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Email Dashboard */}
        <div className="card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Lead Email Dashboard</h2>
              <p className="text-gray-600">Manage and track your email campaigns</p>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <button className="btn-secondary px-4 py-2">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="btn-primary px-4 py-2">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary px-4 py-2 whitespace-nowrap"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && <FilterPanel />}

          {/* Email Table */}
          <EmailTable searchTerm={searchTerm} />
        </div>
      </main>
    </div>
  );
}

export default App;