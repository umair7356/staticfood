export interface Category {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
}

export interface Recipe {
  id: string;
  category_id: string;
  title: string;
  description: string;
  image_url: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  author: string;
  date: string;
  read_time: number;
  slug: string;
}
