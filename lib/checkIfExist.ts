export const productAlreadyInCart = (id: string, array: []): boolean => {
  return array.some(
    (elem: { id: string; price: string; name: string; desc: string }) =>
      elem.id === id
  );
};
