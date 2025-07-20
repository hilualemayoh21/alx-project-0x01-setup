// For post display
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Geo data type
export interface Geo {
  lat: string;
  lng: string;
}

// Address data type
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Company data type
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// ✅ User object for display and form handling
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
// ✅ Modal for adding/editing users
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (newUser: UserProps) => void;
}

// ✅ Post creation/editing
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// ✅ Modal for adding/editing posts
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// ✅ Used in PostCard or PostList
export interface PostProps extends PostData {}
