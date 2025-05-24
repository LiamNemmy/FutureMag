export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  imageUrl: string;
  featured?: boolean;
  trending?: boolean;
}

export type Category = {
  id: string;
  name: string;
  color: string;
};