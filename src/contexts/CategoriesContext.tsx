import { createContext, ReactNode, useState } from "react";
import { categories } from "../data/categoris";
import { Category } from "../types/  categori";

type CategoriesContextType = {
  categoriesList: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesList: [],
  setCategories: () => {},
});

type CategorieProviderProps = {
  children: ReactNode;
};

export const CategorieProvider = ({ children }: CategorieProviderProps) => {
  const [categoriesList, setCategories] = useState<Category[]>(categories);

  return (
    <CategoriesContext.Provider value={{ categoriesList, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
