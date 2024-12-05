export const formatGhanaCedis = (amount: number): string => {
  return `GH₵${amount.toFixed(2)}`;
};

export const GHANA_REGIONS = [
  'Greater Accra',
  'Ashanti',
  'Western',
  'Eastern',
  'Central',
  'Northern',
  'Volta',
  'Bono',
  'Upper East',
  'Upper West',
  'Oti',
  'Bono East',
  'Western North',
  'Ahafo',
  'Savannah',
  'North East'
] as const;

export type GhanaRegion = typeof GHANA_REGIONS[number];