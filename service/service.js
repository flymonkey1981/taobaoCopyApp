export const fetchUsers =(accessToken)=> {
   return fetch('http://localhost:8080/api/v1/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
};
