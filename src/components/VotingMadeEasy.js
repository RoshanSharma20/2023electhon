import React from 'react'

function VotingMadeEasy() {
    return (
        <center>
            <div className='w-5/6'>
                <br />
                <br />
                <h1 className='text-5xl font-serif text-bold'>Voting Made Simple</h1>
                <div className='text-xl'>
                    <div>
                        <p>
                            The voter enters the polling booth and is verified by an election official using a secure login system, which may include biometric authentication.
                        </p>

                        <p className='pt-2'> The voter selects their preferred candidate or party on the interactive EVM display. The display is designed with tamper-evident features to ensure that the vote cannot be changed or manipulated.</p>

                        <p className='pt-2'>   The vote is encrypted and digitally signed to ensure the security of the data.
                        </p>
                        <p className='pt-2'>
                            The encrypted vote is transmitted securely to the central server via a secure communication protocol.
                        </p>
                    </div>


                    <div>
                        <p className='pt-2'>
                            The central server stores the encrypted vote in a secure database, which is protected with encryption and digital signatures.</p>
                        <p className='pt-2'>
                            The real-time secure counting system uses tamper-evident features to prevent unauthorized access and manipulation of the vote count. The system also uses encryption and digital signatures to ensure that the vote count cannot be changed or manipulated.</p>
                        <p className='pt-2'>
                            Once the voting period has ended, the vote count is displayed on the EVM display and the central server. The display and server are secured with encryption and digital signatures to prevent unauthorized access and manipulation.</p>

                    </div>
                    <div>
                        <p className='pt-2'>
                            The election results are verified and certified by election officials and/or an independent auditor.</p>
                        <p className='pt-2'>
                            The voter record is secured with encryption and digital signatures to prevent any unauthorized access or manipulation. Access to the voter record is restricted to authorized personnel only.</p>

                        <p className='pt-2'>
                            Regular security audits are conducted to identify and mitigate any vulnerabilities in the system.</p>

                        <p className='pt-2'>
                            By following these steps, you can ensure the security and integrity of the election process with your electronic voting machine system.</p>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default VotingMadeEasy
