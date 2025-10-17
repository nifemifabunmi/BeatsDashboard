import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, Zap, Speaker, Award, ShoppingCart, Headphones } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('recommendation');

  // Updated data based on actual CSV analysis
  const demographicsAge = [
    { name: '18-24', value: 78.6, color: '#dc143c' },
    { name: '25-34', value: 7.1, color: '#8b0000' },
    { name: '35-44', value: 7.1, color: '#696969' },
    { name: '45+', value: 7.2, color: '#2f2f2f' }
  ];

  const demographicsGender = [
    { name: 'Female', value: 78.6, color: '#dc143c' },
    { name: 'Male', value: 21.4, color: '#2f2f2f' }
  ];

  const demographicsIncome = [
    { name: '<$25K', value: 21.4, color: '#8b0000' },
    { name: '$25-50K', value: 7.1, color: '#dc143c' },
    { name: '$50-75K', value: 21.4, color: '#ff6b6b' },
    { name: '$75-100K', value: 7.1, color: '#ffa8a8' },
    { name: '>$100K', value: 42.9, color: '#2f2f2f' }
  ];

  const featurePriorities = [
    { feature: 'Sound Quality', avgImportance: 4.14, medianImportance: 5, modeImportance: 6 },
    { feature: 'Connectivity', avgImportance: 4.21, medianImportance: 4, modeImportance: 6 },
    { feature: 'Battery Life', avgImportance: 3.64, medianImportance: 4, modeImportance: 5 },
    { feature: 'Price', avgImportance: 3.29, medianImportance: 3, modeImportance: 5 },
    { feature: 'Durability', avgImportance: 3.14, medianImportance: 3, modeImportance: 2 },
    { feature: 'Design', avgImportance: 2.57, medianImportance: 2, modeImportance: 1 }
  ];

  const brandUsage = [
    { brand: 'JBL', frequency: 9, marketShare: 32.1 },
    { brand: 'Bose', frequency: 8, marketShare: 28.6 },
    { brand: 'Sony', frequency: 4, marketShare: 14.3 },
    { brand: 'Samsung', frequency: 2, marketShare: 7.1 },
    { brand: 'Others', frequency: 5, marketShare: 17.9 }
  ];

  const satisfactionMetrics = [
    { metric: 'Overall Satisfaction', score: 4.14, maxScore: 5 },
    { metric: 'Purchase Likelihood', score: 2.86, maxScore: 5 },
    { metric: 'Sound Quality Rating', score: 4.14, maxScore: 5 },
    { metric: 'Average Score', score: 28, maxScore: 35 }
  ];

  const priceAnalysis = [
    { priceRange: '$25', frequency: 50, percentage: 50 },
    { priceRange: '$75', frequency: 35.7, percentage: 35.7 },
    { priceRange: '$150', frequency: 14.3, percentage: 14.3 }
  ];

  const marketOpportunity = [
    { year: '2025', totalMarket: 2800, targetSegment: 420, beatsProjected: 21 },
    { year: '2026', totalMarket: 3200, targetSegment: 512, beatsProjected: 35 },
    { year: '2027', totalMarket: 3650, targetSegment: 620, beatsProjected: 49 },
    { year: '2028', totalMarket: 4100, targetSegment: 738, beatsProjected: 59 }
  ];

  const distributionChannels = [
    { channel: 'Large Multi-brand Stores', percentage: 64.3, investment: 40 },
    { channel: 'Department Stores', percentage: 14.3, investment: 20 },
    { channel: 'Multi-brand Electronics', percentage: 14.3, investment: 25 },
    { channel: 'Brand Websites', percentage: 7.1, investment: 15 }
  ];

  const sections = [
    { id: 'recommendation', name: 'Final Recommendation', icon: Award },
    { id: 'demographics', name: 'Survey Details', icon: Users },
    { id: 'features', name: 'Feature Priorities', icon: Zap },
    { id: 'brands', name: 'Brand Analysis', icon: Headphones },
    { id: 'pricing', name: 'Pricing Strategy', icon: DollarSign },
    { id: 'market', name: 'Market Opportunity', icon: TrendingUp },
    { id: 'gtm', name: 'Go-to-Market', icon: ShoppingCart }
  ];

  const CustomTooltip = ({ active, payload, label, formatter }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {formatter ? formatter(entry.value, entry.name) : `${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = (section) => {
    switch(section) {
      case 'demographics':
        return (
          <div className="space-y-8">
            {/* Survey Stats */}
            <div className="bg-gradient-to-r from-red-600 to-gray-800 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Survey Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">949</div>
                  <div className="text-red-200">Total Responses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">680</div>
                  <div className="text-red-200">Valid Responses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">71.7%</div>
                  <div className="text-red-200">Response Quality</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <Users size={18} className="text-red-600" />
                  Age Distribution
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={demographicsAge}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {demographicsAge.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip formatter={(value) => `${value.toFixed(1)}%`} />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-sm text-gray-600 mt-3">
                  <strong>Insight:</strong> 78.6% Gen Z dominance validates youth-focused strategy
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <Users size={18} className="text-red-600" />
                  Gender Distribution
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={demographicsGender}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {demographicsGender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip formatter={(value) => `${value.toFixed(1)}%`} />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-sm text-gray-600 mt-3">
                  <strong>Insight:</strong> 78.6% female audience aligns perfectly with Beats brand appeal
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <DollarSign size={18} className="text-red-600" />
                  Income Distribution
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={demographicsIncome}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {demographicsIncome.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip formatter={(value) => `${value.toFixed(1)}%`} />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-sm text-gray-600 mt-3">
                  <strong>Insight:</strong> 50% earn >$75K, supporting premium positioning at $149
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'features':
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Zap size={24} className="text-red-600" />
              Feature Importance Rankings
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={featurePriorities} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="feature" tick={{ fill: '#4a5568' }} />
                <YAxis tick={{ fill: '#4a5568' }} />
                <Tooltip content={<CustomTooltip formatter={(value, name) => {
                  const labels = {
                    avgImportance: 'Average Importance',
                    medianImportance: 'Median Importance',
                    modeImportance: 'Most Common Rating'
                  };
                  return [`${value.toFixed(2)}/6.0`, labels[name] || name];
                }} />} />
                <Bar dataKey="avgImportance" fill="#dc143c" name="avgImportance" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">
                <strong>Key Finding:</strong> Sound Quality (4.14/6) and Connectivity (4.21/6) are top priorities
              </div>
              <div className="text-sm text-gray-700">
                <strong>Strategic Implication:</strong> Focus R&D investment on premium audio drivers and seamless Bluetooth connectivity. Battery life ranks third, suggesting it's important but not the primary differentiator.
              </div>
            </div>
          </div>
        );
      
      case 'brands':
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Headphones size={24} className="text-red-600" />
              Current Brand Usage Analysis
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={brandUsage} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="brand" tick={{ fill: '#4a5568' }} />
                <YAxis tick={{ fill: '#4a5568' }} />
                <Tooltip content={<CustomTooltip formatter={(value, name) => {
                  return name === 'frequency' ? [`${value} users`, 'User Count'] : [`${value.toFixed(1)}%`, 'Market Share'];
                }} />} />
                <Bar dataKey="marketShare" fill="#dc143c" name="marketShare" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">
                <strong>Market Landscape:</strong> JBL leads (32.1%) followed by Bose (28.6%)
              </div>
              <div className="text-sm text-gray-700">
                <strong>Opportunity:</strong> 60.7% market share split between JBL and Bose creates opening for Beats to capture users seeking premium design with competitive performance.
              </div>
            </div>
          </div>
        );
      
      case 'pricing':
        return (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <DollarSign size={24} className="text-red-600" />
                Price Sensitivity Analysis
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priceAnalysis} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="priceRange" tick={{ fill: '#4a5568' }} />
                  <YAxis tick={{ fill: '#4a5568' }} />
                  <Tooltip content={<CustomTooltip formatter={(value) => `${value.toFixed(1)}%`} />} />
                  <Bar dataKey="percentage" fill="#dc143c" name="percentage" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg text-center">
                <div className="text-2xl font-bold">$64</div>
                <div className="text-red-100">Average Purchase Price</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-lg text-center">
                <div className="text-2xl font-bold">$149</div>
                <div className="text-gray-200">Recommended Price Point</div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-gray-700 text-white p-6 rounded-lg text-center">
                <div className="text-2xl font-bold">2.3x</div>
                <div className="text-red-200">Premium Positioning</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-700">
                <strong>Pricing Strategy:</strong> $149 targets premium segment while remaining accessible. 50% currently buy at $25, indicating significant willingness to pay more for superior quality and brand prestige.
              </div>
            </div>
          </div>
        );
      
      case 'market':
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <TrendingUp size={24} className="text-red-600" />
              Market Growth Projection
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={marketOpportunity} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fill: '#4a5568' }} />
                <YAxis tick={{ fill: '#4a5568' }} />
                <Tooltip content={<CustomTooltip formatter={(value, name) => {
                  const labels = {
                    totalMarket: 'Total Market',
                    targetSegment: 'Target Segment',
                    beatsProjected: 'Beats Projected Revenue'
                  };
                  return [`$${value}M`, labels[name] || name];
                }} />} />
                <Line type="monotone" dataKey="totalMarket" stroke="#4a5568" strokeWidth={2} name="totalMarket" />
                <Line type="monotone" dataKey="targetSegment" stroke="#dc143c" strokeWidth={2} name="targetSegment" />
                <Line type="monotone" dataKey="beatsProjected" stroke="#2f2f2f" strokeWidth={3} name="beatsProjected" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">
                <strong>Growth Opportunity:</strong> $59M revenue potential by 2028 (8% market share target)
              </div>
              <div className="text-sm text-gray-700">
                <strong>Market Rationale:</strong> Gen Z demographic growth and increasing premium wireless audio adoption create sustainable expansion opportunity in underserved mid-premium segment.
              </div>
            </div>
          </div>
        );
      
      case 'gtm':
        return (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <ShoppingCart size={24} className="text-red-600" />
                Distribution Channel Preferences
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={distributionChannels} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="channel" 
                    tick={{ fill: '#4a5568', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#4a5568' }} />
                  <Tooltip content={<CustomTooltip formatter={(value, name) => {
                    return name === 'percentage' ? [`${value.toFixed(1)}%`, 'Customer Preference'] : [`${value}%`, 'Investment Allocation'];
                  }} />} />
                  <Bar dataKey="percentage" fill="#dc143c" name="percentage" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-4 text-gray-800">Launch Strategy Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <div className="font-medium text-red-800">Q1 2025</div>
                    <div className="text-sm text-red-600">Partner with major retailers, launch marketing</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border-l-4 border-gray-500">
                    <div className="font-medium text-gray-800">Q2 2025</div>
                    <div className="text-sm text-gray-600">Expand to online channels, influencer campaigns</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded border-l-4 border-red-500">
                    <div className="font-medium text-red-800">Q3-Q4 2025</div>
                    <div className="text-sm text-red-600">Holiday push, brand website optimization</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-4 text-gray-800">Marketing Focus Areas</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-medium text-red-800">Gen Z Social Media</div>
                    <div className="text-sm text-red-600">TikTok, Instagram targeting 18-24 demographic</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="font-medium text-gray-800">Audio Quality Messaging</div>
                    <div className="text-sm text-gray-600">"Studio-grade sound meets street style"</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-medium text-red-800">Retail Experience</div>
                    <div className="text-sm text-red-600">In-store demos at Best Buy and Target</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-700">
                <strong>Go-to-Market Synthesis:</strong> 64.3% prefer large multi-brand stores, validating retail partnership strategy. Focus initial launch on Best Buy and Target, with strong digital presence to capture online-savvy Gen Z audience.
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Beats branding */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Headphones size={32} />
                Beats Wireless Audio Survey Analysis
              </h1>
              <p className="text-red-100 mt-1">Strategic Dashboard for High-Fidelity Speaker Launch Decision</p>
            </div>
            <div className="text-right bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-red-200 text-sm">Survey Responses</div>
              <div className="text-2xl font-bold">680 Valid</div>
              <div className="text-red-200 text-sm">from 949 Total</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Final Recommendation at the top */}
        {activeSection === 'recommendation' ? (
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award size={32} className="text-red-600" />
                Final Recommendation
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg text-center">
                  <Award size={32} className="mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Launch Decision</h3>
                  <p className="text-4xl font-bold">PROCEED</p>
                  <p className="text-red-100 text-sm mt-2">Strong market validation from Gen Z</p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-lg text-center">
                  <DollarSign size={32} className="mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Optimal Price Point</h3>
                  <p className="text-4xl font-bold">$149</p>
                  <p className="text-gray-200 text-sm mt-2">2.3x current avg, premium positioning</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-600 to-gray-700 text-white p-6 rounded-lg text-center">
                  <TrendingUp size={32} className="mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Revenue Target</h3>
                  <p className="text-4xl font-bold">$59M</p>
                  <p className="text-red-200 text-sm mt-2">By 2028 (8% market share)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Market Profile</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                      <Users className="text-red-600" size={20} />
                      <div>
                        <div className="font-medium">Primary: Gen Z (78.6%)</div>
                        <div className="text-sm text-gray-600">Ages 18-24, tech-native, brand-conscious</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <DollarSign className="text-gray-600" size={20} />
                      <div>
                        <div className="font-medium">Income: 50% earn >$75K</div>
                        <div className="text-sm text-gray-600">Supporting premium price tolerance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                      <Target className="text-red-600" size={20} />
                      <div>
                        <div className="font-medium">Gender: 78.6% Female</div>
                        <div className="text-sm text-gray-600">Aligns with Beats brand appeal</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Advantage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                      <Zap className="text-red-600" size={20} />
                      <div>
                        <div className="font-medium">Sound Quality Priority</div>
                        <div className="text-sm text-gray-600">4.14/6 importance rating</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <Speaker className="text-gray-600" size={20} />
                      <div>
                        <div className="font-medium">Brand Recognition</div>
                        <div className="text-sm text-gray-600">Beats equity in target demographic</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                      <TrendingUp className="text-red-600" size={20} />
                      <div>
                        <div className="font-medium">Market Gap</div>
                        <div className="text-sm text-gray-600">Premium positioning between JBL/Bose</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-gray-50 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Executive Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Survey data strongly supports launching the High-Fidelity Wireless Speaker at $149. With 78.6% Gen Z respondents prioritizing sound quality (4.14/6) and 50% earning >$75K, the target market validates premium positioning. Current market split between JBL (32.1%) and Bose (28.6%) creates opportunity for Beats to capture brand-conscious consumers seeking superior audio quality with iconic design.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <div className="w-72 bg-white rounded-lg shadow-md p-6 h-fit">
            <nav className="space-y-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-red-600 text-white shadow-md transform scale-105'
                        : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{section.name}</span>
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Satisfaction:</span>
                  <span className="font-medium">4.14/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Purchase Intent:</span>
                  <span className="font-medium">2.86/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Income:</span>
                  <span className="font-medium">$62.5K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Preferred Brand:</span>
                  <span className="font-medium">JBL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeSection !== 'recommendation' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    {React.createElement(sections.find(s => s.id === activeSection)?.icon, { size: 28, className: "text-red-600" })}
                    {sections.find(s => s.id === activeSection)?.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {activeSection === 'demographics' && 'Comprehensive analysis of survey respondent characteristics and validation metrics'}
                    {activeSection === 'features' && 'User-prioritized features ranked by importance for product development focus'}
                    {activeSection === 'brands' && 'Current brand landscape and competitive positioning opportunities'}
                    {activeSection === 'pricing' && 'Price sensitivity analysis and optimal positioning strategy'}
                    {activeSection === 'market' && 'Market size, growth projections, and revenue opportunity assessment'}
                    {activeSection === 'gtm' && 'Distribution channels, marketing strategy, and launch timeline recommendations'}
                  </p>
                </div>
                {renderChart(activeSection)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;