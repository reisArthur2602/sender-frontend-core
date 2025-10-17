export const useAuth = () => {
  const user = {
    image: "https://avatar.vercel.sh/rauchg",
    name: "Arthur",
    email: "arthurdesouzareis222@gmail.com",
  };
  const logout = () => {};
  return { user, logout };
};
