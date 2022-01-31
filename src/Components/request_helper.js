export const POST = 'POST';
export const GET = 'GET'

export const StatusOK = 200;
export const StatusUnauthorized = 401;
export const StatusBadRequest = 400;
export const StatusInternalServerError = 500;

export async function request(method, path, body) {
    return fetch(`http://localhost:8080${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null,
        credentials: 'include'

    }).then(response => {
        if (response.status === StatusUnauthorized) {
            localStorage.removeItem('user');
        }
        return response;
    })
}
