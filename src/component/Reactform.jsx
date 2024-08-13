import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Bijesh",
      address: "Sindupalchow",
      email: "bijesh@ktmbees.com",
    },
  });
  const [persons, setPersons] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const onSubmit = (data) => {
    setPersons([...persons, data]);
    setFilteredItems([...persons,data])
    reset();
    // console.log(data);
    // console.log("errors", errors);
  };
  const filterItems = (query) => {
    if (query) {
      const lowerCaseQuery = query?.toLowerCase();    
      setFilteredItems(
        persons?.filter((item) =>
          item?.name?.toLowerCase().includes(lowerCaseQuery)       
      )
      );
      // console.log(filterItems)
    } else {
      setFilteredItems(persons);
    }

    console.log("errors", errors);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
   
  };
  const remove = (index) => {
console.log("bijesh")
    const updatedItems = [...filteredItems];
    updatedItems.splice(index, 1);
    setFilteredItems(updatedItems);

  };
  return (
    <div  className="flex lg:h-screen  lg:w-full flex-col items-center justify-between lg:pt-24 bg-blue-100 m-0 pt-14 h-screen">
      
      <div className="bg-red-50 rounded-lg lg:w-4/12 h-3/5 md:w-3/5 text-center  pt-14 shadow-cyan-500/50 shadow-2xl w-80 mt-14 lg:mt-0">
      <div >
           
            <input
            className="border border-black lg:h-12 lg:w-96 lg:rounded-lg text-center text-black h-8 w-48 rounded md:h-10 md:w-72 md:rounded lg:text-xl"
              type="text"
              name="search"
              placeholder="Search items..."
              onChange={(e) => filterItems(e.target.value)}
            />  
            <button type="submit" className="border-1 lg:rounded-lg border-black size-12 lg:w-24  ml-4 bg-red-300 w-16 h-8 rounded md:h-10 md:w-24 hover:bg-sky-300 ">Search</button>
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
          <div  className="mt-8">
            <label className=" lg:text-2xl text-lg md:text-xl"> Name :  </label>
            <Controller
            rules={
              {required:true,
                maxLength:15,
              minLength:4,}
            }
              render={({ field }) => <input {...field} className=" border border-black lg:h-12 lg:w-96 lg:rounded-lg text-center text-black ml-4 h-8 rounded md:w-72 md:h-10 md:rounded-md md:text-xl"
              placeholder="Enter Firstname" />}
              name="name"
              control={control}
              defaultValue="hello world"
           
             
            />
            {errors.name && <h1 className="text-red-600 text-2xl">Address is required.</h1>}
          </div>
          <div className="mt-8">
            <label className="lg:text-2xl text-lg md:text-xl"> Address : </label>
            <Controller
            rules={{
              required: true,
              maxLength:10,
              minLength:4,
            }}
              render={({ field }) => <input {...field}  className=" border border-black lg:h-12 lg:w-96 lg:rounded-lg text-center text-black rounded h-8  md:w-72 md:h-10 md:rounded-md md:text-xl" 
              placeholder="Enter Address" />}
              name="address"
              control={control}
              defaultValue="hello world"
            />
            {errors.address && <h1 className="text-red-600 text-2xl">Address is required.</h1>}
          </div>
          <div className="mt-8">
            <label className=" lg:text-2xl text-lg md:text-xl">Email :</label>
            <Controller
            rules={{
              required:true,
              minLength:4,
              maxLength:30,
            }}
              render={({ field }) => <input {...field} type="email" className=" border border-black lg:h-12 lg:w-96 lg:rounded-lg text-center text-black ml-4 rounded h-8  md:w-72 md:h-10 md:rounded-md md:text-xl"
              placeholder="Enter Email" />}
              name="email"
              control={control}
              defaultValue="hello world"
            />
            {/* {errors.email && <h1 className="text-red-400 text-2xl">Email is required</h1>} */}
          </div>
           
          <input type="submit" className="lg:w-96 border bg-blue-200 lg:h-12 mt-8 lg:text-3xl text-xl lg:rounded-lg w-48 h-8 rounded md:rounded-md md:w-72 md:h-10 hover:bg-purple-400"></input>
          <br />
     
          <button type="submit" className="lg:w-96 border bg-blue-200 lg:h-12  mt-8 lg:text-3xl lg:rounded-md h-8 w-48 text-xl md:rounded-md md:w-72 md:h-10 hover:bg-purple-400">{editIndex !== null ? "Update" : "Add"}</button>
          </div>
        </form>
        </div>
        
          <div className=" flex flex-wrap items-start rounded gap-8 m-auto">
            {filteredItems?.map((person, index) => (
              <div key={index} className="bg-slate-400  lg:h-36 pt-4 rounded text-center  flex-row shadow-2xl  text-xs lg:text-lg">
                <ul>
                  <li>
                    <h2>{person.name}</h2>
                  </li>
                  <li>
                    <h2>{person.email}</h2>
                  </li>
                  <li>
                    <h2>{person.address}</h2>
                  </li>
                </ul>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => remove(index)}>Delete</button>
                <div>       
                </div>
              </div>
            ))}
          </div>
       
     
    </div>
  );
}

