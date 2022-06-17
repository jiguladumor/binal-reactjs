import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import InputBox from '../Componets/Input/InputBox';
function BookAppointment(props) {

    const history = useHistory()
    
    const handleInsert = () =>{
        history.push("/listappointment");
    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.number().required("please enter number"),
        date: yup.string().required("please select date"),
        department: yup.string().required("please select department"),
        message: yup.string().required("please select message")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleInsert(values)
            const {
                name,
                email,
                phone,
                date,
                department,
                message
            } = values;
            let Data = {
                name,
                email,
                phone,
                date,
                department,
                message
            }
            let appoinData = JSON.parse(localStorage.getItem("appointment"));

            if(appoinData == null){
                localStorage.setItem("appointment", JSON.stringify([Data]))
            }else{
                appoinData.push(Data)
                localStorage.setItem("appointment", JSON.stringify(appoinData))
            }
            console.log(Data);
        },
    });
    const{handleSubmit, errors, handleChange}=formik; 

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row text-center'>
                        <div className='col-6 pb-4'>
                        <NavLink to={"/bookappointment"} activeClassName={"actbtn"}>BookAppointment</NavLink>
                        </div>
                        <div className='col-6 pb-4'>
                        <NavLink to={"/listappointment"} activeClassName={"actbtn"}>ListAppointment</NavLink>
                        </div>
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <InputBox
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        error={Boolean(errors.name)}
                                        errorMessage={errors.name}
                                        onChange={handleChange}/>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        error={Boolean(errors.email)}
                                        errorMessage={errors.email}
                                        onChange={handleChange}/>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength={10}
                                        placeholder="Your Phone"
                                        error={Boolean(errors.phone)}
                                        errorMessage={errors.phone}
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox
                                        type="datetime"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        error={Boolean(errors.date)}
                                        errorMessage={errors.date}
                                        onChange={handleChange}/>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox
                                        type="select"
                                        name="department" 
                                        id="department" 
                                        className="form-select" 
                                        onChange={handleChange}
                                        error={Boolean(errors.department)}
                                        errorMessage={errors.department}
                                        value={formik.values.select}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </InputBox>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <InputBox
                                    type="textarea"
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message (Optional)"
                                    defaultValue={""}
                                    error={Boolean(errors.message)}
                                    errorMessage={errors.message}
                                    onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type='submit'>Submit</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default BookAppointment;

