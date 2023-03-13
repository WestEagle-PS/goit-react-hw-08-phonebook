import instance from './auth';

export const getAllContacts = () => instance.get('/contacts');

export const addContacts = data => {
  return instance.post('/contacts', data);
};

export const deleteContactById = id => {
  return instance.delete(`/contacts/${id}`);
};
