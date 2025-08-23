import api from "@/lib/api";

export const createEmergency = async (data: any) => {
  const res = await api.post("contact/emergency", data);
  return res.data.data;
};
export const getEmergencyContacts = async () => {
  const res = await api.get("contact/emergency");
  return res.data.data;
};

export const getEmergencyRequest = async (id: string) => {
  const res = await api.get(`contact/emergency/${id}`);
  return res.data.data;
};
export const updateEmergencyRequest = async (id: string, data: any) => {
  const res = await api.put(`contact/emergency/${id}`, data);
  return res.data.data;
};

export const deleteEmergencyRequest = async (id: string) => {
  const res = await api.delete(`contact/emergency/${id}`);
  return res.data.data;
};

export const createQuote = async (data: any) => {
  const res = await api.post("contact/quotes", data);
  return res.data.data;
};

export const getQuoteRequests = async () => {
  const res = await api.get("contact/quotes");
  return res.data.data;
};

export const getQuote = async (id: string) => {
  const res = await api.get(`contact/quotes/${id}`);
  return res.data.data;
};

export const updateQuote = async (id: string, data: any) => {
  const res = await api.put(`contact/quotes/${id}`, data);
  return res.data.data;
};

export const deleteQuote = async (id: string) => {
  const res = await api.delete(`contact/quotes/${id}`);
  return res.data.data;
};
