'use client';

// import { useRouter } from 'next/router';
import { createEmployee } from '@/app/actions/todoActions';
import Navbar from "@/components/shared/Navbar";
import Button from '@/components/ui/Button';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
//import NewEmployeeTable from '../shared_results/newEmployeeTable';


const NewEmployee = async () => {
  return (
    <div>
      <section className=''>
        <div className="mb-5">
          <Navbar />
        </div>
      </section>


      <div className="px-5 grid grid-cols-12 gap-4">

        <label className= "text-color-black text-right self-center col-start-1 col-end-3 ">
            Employee Number
        </label>
        
        <div className="col-start-3 col-end-12">
          <Form action={createEmployee} className="">
              <Input name="emp_num" type="Int" placeholder="Employee Number" />
          </Form>
        </div>

        <label className= "text-color-black text-right self-center col-start-1 col-end-3">
            Name
        </label>

        <div className="col-start-3 col-end-6">
          <Form action={createEmployee} className="">
            <Input name="lastName" type="text" placeholder="Last Name" />
          </Form>
        </div>

        <div className="col-start-6 col-end-9">
          <Form action={createEmployee} className="">
            <Input name="middleName" type="text" placeholder="Middle Name" />
          </Form>
        </div>

        <div className="col-start-9 col-end-12">
          <Form action={createEmployee} className="">
            <Input name="firstName" type="text" placeholder="First Name" />
          </Form>
        </div>

        <label className= "text-color-black text-right self-center col-start-1 col-end-3">
            Address
        </label>

        <div className="col-start-3 col-end-10">
          <Form action={createEmployee} className="">
            <Input name="address_line" type="text" placeholder="Address Line" />
          </Form>
        </div>

        <div className="col-start-10 col-end-12">
          <Form action={createEmployee} className="">
            <Input name="brgy" type="text" placeholder="Barangay" />
          </Form>
        </div>

        <div className="col-start-3 col-end-6">
          <Form action={createEmployee} className="">
            <Input name="province" type="text" placeholder="Province" />
          </Form>
        </div>

        <div className="col-start-6 col-end-9">
          <Form action={createEmployee} className="">
            <Input name="country" type="text" placeholder="Country" />
          </Form>
        </div>

        <div className="col-start-9 col-end-12">
          <Form action={createEmployee} className="">
            <Input name="zip_code" type="Int" placeholder="Zip Code" />
          </Form>
        </div>

        <div className="col-start-10 col-end-12 justify-end flex-auto">
          <Form action={createEmployee} className="">
            <Button type="submit" text="Add"/>
          </Form>
        </div>



      </div>
    </div>
  );
};

export default NewEmployee;


// insert at line 96
  // <div>
  //<NewEmployeeTable />
  //</div>

  //----------------------------------------------------------------------------------------------------
  
  //const router = useRouter();



  //   const [emp_num, setEmpNum] = useState('');
  //   const [firstName, setFirstName] = useState('');
  //   const [middleName, setMiddleName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [address_line, setAddressLine] = useState('');
  //   const [brgy, setBrgy] = useState('');
  //   const [province, setProvince] = useState('');
  //   const [country, setCountry] = useState('');
  //   const [zip_code, setZipCode] = useState('');

  //   const handleeEmpNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setEmpNum(e.target.value);
  //   }
  //   const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setFirstName(e.target.value);
  //   }
  //   const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setMiddleName(e.target.value);
  //   }
  //   const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setLastName(e.target.value);
  //   }
  //   const handleAddressLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setAddressLine(e.target.value);
  //   }
  //   const handleBrgyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setBrgy(e.target.value);
  //   }
  //   const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setProvince(e.target.value);
  //   }
  //   const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setCountry(e.target.value);
  //   }
  //   const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       setZipCode(e.target.value);
  //   }

  // const addEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     fetch('/api/employee', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //           emp_num: emp_num,
  //           first_name: firstName,
  //           middle_name: middleName,
  //           last_name: lastName,
  //           address_line: address_line,
  //           brgy: brgy,
  //           province: province,
  //           country: country,
  //           zip_code: zip_code
  //       })
  //   }) 
  //   setEmpNum('');
  //   setFirstName('');
  //   setMiddleName('');
  //   setLastName('');
  //   setAddressLine('');
  //   setBrgy('');
  //   setProvince('');
  //   setCountry('');
  //   setZipCode('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // return (
  //   <div>
  //     <h1>Add Employee</h1>
  //     <form onSubmit={addEmployee}>
  //       <input
  //         type="Int"
  //         placeholder="Employee Number"
  //         value={emp_num}
  //         onChange={(e) => {handleeEmpNumChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="First Name"
  //         value={firstName}
  //         onChange={(e) => {handleFirstNameChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Middle Name"
  //         value={middleName}
  //         onChange={(e) => {handleMiddleNameChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Last Name"
  //         value={lastName}
  //         onChange={(e) => {handleLastNameChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Address Line"
  //         value={address_line}
  //         onChange={(e) => {handleAddressLineChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Barangay"
  //         value={brgy}
  //         onChange={(e) => {handleBrgyChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Province"
  //         value={province}
  //         onChange={(e) => {handleProvinceChange}}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Country"
  //         value={country}
  //         onChange={(e) => {handleCountryChange}}
  //       />
  //       <input
  //         type="Int"
  //         placeholder="Zip Code"
  //         value={zip_code}
  //         onChange={(e) => {handleZipCodeChange}}
  //       />
  //       <button>Add</button>
  //     </form>
  //   </div>
  // );