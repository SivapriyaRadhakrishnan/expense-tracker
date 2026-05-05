const AUTH_USERS_KEY = 'flowfi_users';
const AUTH_SESSION_KEY = 'flowfi_currentUser';

export const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || '[]');
  } catch {
    return [];
  }
};

export const saveUsers = (users) => {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = () => localStorage.getItem(AUTH_SESSION_KEY);
export const setCurrentUser = (email) => localStorage.setItem(AUTH_SESSION_KEY, email);
export const clearCurrentUser = () => localStorage.removeItem(AUTH_SESSION_KEY);

export const registerUser = (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getUsers();
  if (users.some((user) => user.email === normalizedEmail)) {
    return { success: false, message: 'An account already exists with this email.' };
  }

  const newUser = {
    email: normalizedEmail,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(normalizedEmail);

  localStorage.setItem(`flowfi_transactions_${normalizedEmail}`, JSON.stringify([]));
  localStorage.setItem(`flowfi_categories_${normalizedEmail}`, JSON.stringify([]));
  localStorage.setItem(`flowfi_budget_${normalizedEmail}`, JSON.stringify(0));

  return { success: true };
};

export const authenticateUser = (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getUsers();
  const user = users.find((entry) => entry.email === normalizedEmail && entry.password === password);
  if (!user) {
    return { success: false, message: 'Invalid email or password.' };
  }

  setCurrentUser(normalizedEmail);
  return { success: true };
};

export const getTransactionsForUser = (email) => {
  try {
    return JSON.parse(localStorage.getItem(`flowfi_transactions_${email}`) || '[]');
  } catch {
    return [];
  }
};

export const saveTransactionsForUser = (email, transactions) => {
  localStorage.setItem(`flowfi_transactions_${email}`, JSON.stringify(transactions));
};

export const getCategoriesForUser = (email) => {
  try {
    return JSON.parse(localStorage.getItem(`flowfi_categories_${email}`) || '[]');
  } catch {
    return [];
  }
};

export const saveCategoriesForUser = (email, categories) => {
  localStorage.setItem(`flowfi_categories_${email}`, JSON.stringify(categories));
};

export const getBudgetForUser = (email) => {
  try {
    return Number(JSON.parse(localStorage.getItem(`flowfi_budget_${email}`)) || 0);
  } catch {
    return 0;
  }
};

export const saveBudgetForUser = (email, budget) => {
  localStorage.setItem(`flowfi_budget_${email}`, JSON.stringify(budget));
};
