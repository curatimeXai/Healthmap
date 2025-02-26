type SubLinks = {
  path: string;
  label: string;
  target?: string;
};

type MenuLinks = {
  path: string;
  label: string;
  target?: string;
  subLinks?: SubLinks[];
};

export const MenuLinks: MenuLinks[] = [
  { 
    path: "/", label: "Home" 
  },
  {  
    path: "/pollutionmaphome", 
    label: "Pollution map",
  },
  {  
    path: "https://worldheartmap.nightingale.uni-mainz.de", 
    label: "World heart map",
    target: "_blank",
  },
  {  
    path: "/faq", 
    label: "FAQ",
  },
 
];

