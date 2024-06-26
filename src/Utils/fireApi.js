export const baseURL = "http://localhost:3000/api/auth"


export const FireApi = async (endpoint, method, data = null) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    console.log(headers, 'HEADERS')

    const options = {
        method: method,
        headers,
        body: data ? JSON.stringify(data) : null
    }

    const response = await fetch(`${baseURL}/${endpoint}`, options)
    if (response.status >= 200 && response.status < 300) {
        console.log(response)
        return response.json()
    } else {
        return { code: response.status, message: response.statusText };
    }

}