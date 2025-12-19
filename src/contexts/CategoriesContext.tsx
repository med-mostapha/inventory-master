import { createContext, ReactNode, useState } from "react";
import { categories } from "../data/categoris";
import { Categorie } from "../types/  categori";

type CategoriesContextType = {
  categoriesList: Categorie[];
  setCategories: React.Dispatch<React.SetStateAction<Categorie[]>>;
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesList: [],
  setCategories: () => {},
});

type CategorieProviderProps = {
  children: ReactNode;
};

export const CategorieProvider = ({ children }: CategorieProviderProps) => {
  const [categoriesList, setCategories] = useState<Categorie[]>(categories);

  return (
    <CategoriesContext.Provider value={{ categoriesList, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
