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
      name: "",
      address: "",
      email: "",
    },
  });
  const [persons, setPersons] = useState([]);

  const [filteredItems, setFilteredItems] = useState();
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
      console.log("persons",persons)
      console.log("query",query)
      console.log("filtered",persons?.filter((item) =>
        item?.name?.toLowerCase().includes(lowerCaseQuery)
      ))

      setFilteredItems(
        persons?.filter((item) =>
          item?.name?.toLowerCase().includes(lowerCaseQuery)
        )
      );
      console.log(filterItems)
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
    setPersons(filteredItems);

  };
  return (
    <div  className="flex h-screen flex-col items-center justify-between p-24 bg-blue-100">
      
      <div className="bg-red-50 rounded-lg w-4/12 h-4/6  text-center  pt-14 shadow-cyan-500/50 shadow-2xl">
      <div >
           
            <input
            className="border border-black h-12 w-96 rounded-lg text-center text-black"
              type="text"
              name="search"
              placeholder="Search items..."
              onChange={(e) => filterItems(e.target.value)}
            />  
            <button type="submit" className="border-1 rounded-lg border-black size-12 w-24 ml-4 bg-red-300">Search</button>
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
          <div  className="mt-8">
            <label className=" text-2xl"> Name :  </label>
            <Controller
              render={({ field }) => <input {...field} className=" border border-black h-12 w-96 rounded-lg text-center text-black ml-4"
              placeholder="firstname" />}
              name="name"
              control={control}
              defaultValue="hello world"
           
             
            />
          </div>
          <div className="mt-8">
            <label className="text-2xl"> Address : </label>
            <Controller
              render={({ field }) => <input {...field}  className=" border border-black h-12 w-96 rounded-lg text-center text-black" />}
              name="address"
              control={control}
              defaultValue="hello world"
            />
          </div>
          <div className="mt-8">
            <label className=" text-2xl">Email :</label>
            <Controller
              render={({ field }) => <input {...field} type="email" className=" border border-black h-12 w-96 rounded-lg text-center text-black ml-4"/>}
              name="email"
              control={control}
              defaultValue="hello world"
            />
          </div>
           
          <input type="submit" className="w-96 border bg-blue-200 h-12 mt-14 text-3xl rounded-md"></input>
          <br />
     
          <button type="submit" className="w-96 border bg-blue-200 h-12 mt-14 text-3xl rounded-md">{editIndex !== null ? "Update" : "Add"}</button>
          </div>
        </form>
        </div>
        
          <div className=" flex items-start rounded my-12 ">
            {filteredItems?.map((person, index) => (
              <div key={index} className="bg-slate-400 mt-8 w-40 h-36 pt-4 rounded text-center  flex-row">
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

