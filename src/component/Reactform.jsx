import { useState } from "react";
import { useForm ,Controller } from "react-hook-form"

function ReactForm (){
  const {register ,
    setValue ,
      handleSubmit,
      reset,
      control,
      formState:{errors}    
    } = useForm({
      defaultValues: {
        name: "bijesh",
        address: "ss",
        email:"bijesh@ss"
      },
    })
    const [persons ,setPersons] = useState([]);

    const [editIndex, setEditIndex] = useState(null);
    const onSubmit = data =>{
     
       
        setPersons([...persons, data]);
      
      reset();
    
      console.log(data)
      console.log("errors",errors)
    }
    
    const remove = index => {
      setData([...data.splice( index,1)]);
    };
  
  
    console.log(persons);
  return (
  <div className={``}>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

<div >
  <label > Name : </label>
  <Controller render={({field}) => <input {...field}/>}
      name="name"
      control={control}
      defaultValue="hello world"/>

</div>
<div >
  <label > Address : </label>
  <Controller render={({field}) => <input {...field}/>}
      name="address"
      control={control}
      defaultValue="hello world"/>

</div>
<div >
  <label >Email : </label>
  <Controller render={({field}) => <input {...field} type="email"/>}
      name="email"
      control={control}
      defaultValue="hello world"/>

</div>



<input type="submit"></input><br/>

<button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>

      </form>
    <div className="bg-amber-300 fl justify-center items-start rounded my-12">
      <div>
      {persons.map((person, index) => (
<div key={index} className=" ">
 <ul>
 <li> <h2>{person.name}</h2></li>
 <li> <h2>{person.email}</h2></li>
 <li> <h2>{person.address}</h2></li>
 </ul>
 <button onClick={() => handleEdit(index)}>Edit</button>
 <button onClick={() => remove(index)}>Delete</button>
</div>
      ))}
    </div>
    </div>
    </div>
  </div>
  )
}
export default ReactForm