export const publicFileUrl = (path: string) => {
  return `${process.env.PUBLIC_URL}${path}`;
};

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
