const handleFilter = (inputValue: string, option: any) => {
  const pattern = new RegExp(`${inputValue.trim()}`, 'gi');
  return pattern.test(option.label);
};

export default handleFilter;
