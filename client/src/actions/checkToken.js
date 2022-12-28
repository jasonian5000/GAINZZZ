const checkToken = () => {
  let token = localStorage.getItem('supabase.auth.token');
  return token !== null
};

export default checkToken;
