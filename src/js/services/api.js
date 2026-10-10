import { API_BASE_URL } from "../config/env.js";

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`Erro na API (${response.status})`);
  if (response.status === 204) return null;
  return response.json();
}
