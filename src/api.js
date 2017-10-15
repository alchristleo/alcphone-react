import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user),
    confirm: token =>
      axios.post("/api/auth/confirmation", { token }).then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: token =>
      axios.post("/api/auth/validate_token", { token }),
    resetPassword: data =>
      axios.post("/api/auth/reset_password", { data })
  },

  admin: {
    adminLogin: credentials =>
      axios.post("/api/auth/admin", { credentials }).then(res => res.data.admin),
    adminSignup: admin =>
      axios.post("/api/admin", { admin }).then(res => res.data.admin),
    adminConfirm: token =>
      axios.post("/api/auth/admin/confirmation", { token }).then(res => res.data.admin),
  },

  books: {
    fetchAll: () => axios.get('/api/books').then(res => res.data.books),
    create: book => axios.post('/api/books', { book }).then(res => res.data.book) 
  }
};
