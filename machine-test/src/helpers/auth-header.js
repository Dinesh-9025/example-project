export default function authHeader() {
    const user = localStorage.getItem('user');
    if (user & user.token) {
      return { Authorization: `Bearer ${user.token}` };
    } else {
      return {};
    }
}
