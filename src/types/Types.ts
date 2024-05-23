export interface Order {
  id: number;
  title: string;
  quantity: number;
  discountedPrice: number;
}

export interface Inventory {
  id: number;
  name: string;
  quantity: number;
}

export interface Customer {
  id: number;
  name: string;
}

export interface Revenue {
  total: number;
  discountedTotal: number;
  carts: { userId: number; discountedTotal: number }[];
}

export interface DashboardCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}
