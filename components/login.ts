export const login = async (login_name: string, password: string) => {
    try {
        let response = await fetch('http://192.168.0.128:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login_name: login_name,
                password: password
            })
        })
        let responseJson = await response.json();
        return responseJson.message;
    }catch(error) {
        console.error(error);
    }
}


export async function getUsers() {
    try {
      let response = await fetch('http://192.168.0.128:3000/users')
      let responseJson = await response.json()
      console.log(responseJson)
      
    } catch (error) {
      console.error(error);
    }
  }