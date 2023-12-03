// Filter.js
import React from 'react';

function Filter({ onFilterChange }) {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <label htmlFor="domainFilter">Domain:</label>
      <select id="domainFilter" name="domain" onChange={handleFilterChange}>
        <option value="">All</option>
        {/* Add other domain options */}
      </select>

      <label htmlFor="genderFilter">Gender:</label>
      <select id="genderFilter" name="gender" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="availabilityFilter">Availability:</label>
      <select id="availabilityFilter" name="availability" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </div>
  );
}

export default Filter;
