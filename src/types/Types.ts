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

export interface Blogs {
  id: string;
  title: string;
  description: string;
  status: string;
  createDate: string;
  updateDate: string;
  content: string;
}


export interface ModalBlogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleCreate: (newBlog: Blogs) => void;
}

export interface ModalUpdateProps {
  isUpdateOpen: boolean;
  setIsUpdateOpen: (isUpdateOpen: boolean) => void;
  handleUpdate: (updatedBlog: Blogs) => void;
  selectedBlog: Blogs | null; // The selected blog to update
}
