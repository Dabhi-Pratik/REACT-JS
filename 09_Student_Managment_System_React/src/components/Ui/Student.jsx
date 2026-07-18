import React, { useEffect, useState } from 'react'
import { Alert, Table } from 'react-bootstrap'
import students from '../../../utils/DummyStudentData'
import StudentList from './StudentList'
import { getStudent } from '../../api/studentFetch'
import Spinner from 'react-bootstrap/Spinner';


const Student = () => {

    const [studentData, setStudentData] = useState([])

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)



    async function LoadData() {
        try {

            setLoading(true)
            setError("")

            const data = await getStudent()

            setStudentData(data)

            if (!data) {
                setError("something went Wrong")
            }

            setStudentData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        LoadData();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <Alert variant='danger' className='m-auto'><h4>{error}</h4></Alert>
    //     )
    // }



    return (
        <>

            <Table striped hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((s, index) => {
                        return (
                            <StudentList student={s} key={s.id} index={index} />
                        )
                    })}
                </tbody>
            </Table>

        </>
    )
}

export default Student