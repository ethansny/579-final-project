import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
const Filters = ({ setFilters, filters, filter }) => {
    const [checked, setChecked] = useState(false);
  return (
    <div className="filters">
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value={filter}
        onChange={(e) => {
        setChecked(e.currentTarget.checked);
        if (e.currentTarget.checked) {
            setFilters(filters => [...filters, `${filter}`]);
        } else {
            setFilters(filters => filters.filter(f => f !== filter));
        }
        }}
        >
        {filter}
        </ToggleButton>
    </div>
  );
}

export default Filters;