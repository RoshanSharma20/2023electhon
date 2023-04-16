import React from 'react'

function Profile() {
    return (
        <div>
            <center>
                <br />
                <br />
                <div className="text-center w-5/6">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                        className="mx-auto mb-4 w-32 rounded-lg"
                        alt="Avatar" />
                    <h5 className="mb-2 text-xl font-medium leading-tight">Name : John Doe</h5>
                    {/* <p className="text-neutral-500 dark:text-neutral-400">Web designer</p> */}
                    <h5 className="mb-2 text-xl font-medium leading-tight">Email : John@gmail.com</h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight">TotalPoints : 30</h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight">Badge : Gold</h5>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </center>
        </div>
    )
}

export default Profile
