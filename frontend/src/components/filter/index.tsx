import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import React, { useState } from 'react';
import { FilterData, Gender } from '../../types';
import Select from 'react-select';

flatpickrLib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    onFilterChange({ dates, gender: selectedGender });
  };

  return (
    <div className="filter-container base-card">
      <div className="select-gender-option">
        <Select options={options} />
      </div>
    </div>
  );
}

export default Filter;
