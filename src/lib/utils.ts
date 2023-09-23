import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function intersection(a: any[], b: any[]) {
  return a.filter((item1) => {
    return b.some((item2) => item2.name.official === item1.name.official);
  });
}
