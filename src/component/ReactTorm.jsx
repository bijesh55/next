// import { useState } from 'react';
// import { useForm } from 'react-hook-form';


// const initialItems = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Cherry' },
//   { id: 4, name: 'Date' },
//   { id: 5, name: 'Elderberry' },
// ];

// export default function ReactTorm() {
//   const { register, handleSubmit, watch } = useForm();
//   const [filteredItems, setFilteredItems] = useState(initialItems);

//   const searchQuery = watch('search');

//   const filterItems = (query) => {
//     if (query) {
//       const lowerCaseQuery = query.toLowerCase();
//       setFilteredItems(
//         initialItems.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery)
//         )
//       );
//     } else {
//       setFilteredItems(initialItems);
//     }
//   };

//   return (
//     <div >
//       <h1>Search Filter in Next.js</h1>

//       <form
//         onSubmit={handleSubmit((data) => filterItems(data.search))}
      
//       >
//         <input
//           type="text"
//           name="search"
//           placeholder="Search items..."
//           {...register('search')}
//           onChange={(e) => filterItems(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       <div >
//         {filteredItems.map((item) => (
//           <div key={item.id} >
//             <h2>{item.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
