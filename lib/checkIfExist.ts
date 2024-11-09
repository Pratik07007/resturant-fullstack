export const productAlreadyInCart = (id: string, array:any):boolean => {
    return array.some((elem:any) => elem.id === id);
  };
  