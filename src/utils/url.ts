export const url = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return path === '/' ? `${base}/` : `${base}${path}`;
};
