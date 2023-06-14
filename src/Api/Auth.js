export const saveUser = user => {
    const currentUser = {
        email: user.email,
        role: 'student',
        name: user.displayName,
        image: user.photoURL,
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data => {
    })
}


//Make Instructor
export const instructor = email => {
    const currentUser = {
        role: 'instructor',
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data => {
       
    })
}

// getUser
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
}