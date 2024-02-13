function convertPriceToKRW(amount: number) {
  return `₩${amount.toLocaleString()}`;
}
export const productUtils = {
  convertPriceToKRW,
};

export default productUtils;
