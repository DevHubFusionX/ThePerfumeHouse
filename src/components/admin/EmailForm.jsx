import React from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const EmailForm = ({ 
  emailData, 
  setEmailData, 
  onSubmit, 
  onCancel, 
  loading 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <FaEdit className="text-white text-sm" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Change Email</h2>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Current Password</label>
          <input
            type="password"
            value={emailData.currentPassword}
            onChange={(e) => setEmailData({...emailData, currentPassword: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">New Email</label>
          <input
            type="email"
            value={emailData.newEmail}
            onChange={(e) => setEmailData({...emailData, newEmail: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button 
            type="submit" 
            disabled={loading} 
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors"
          >
            <FaSave className={loading ? 'animate-spin' : ''} /> 
            <span>{loading ? 'Changing...' : 'Change Email'}</span>
          </button>
          <button 
            type="button" 
            onClick={onCancel} 
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors"
          >
            <FaTimes /> <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;