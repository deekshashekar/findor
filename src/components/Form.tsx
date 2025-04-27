import { useForm } from 'react-hook-form';

const Form = () => {
  const { register } = useForm();
  return (
    <>
      <form>
        <label>Name</label>
        <input {...register('name')} type="text" placeholder="name" />
        <br />
      </form>
    </>
  );
};

export default Form;

// import {useForm, SubmitHandler} from 'react-hook-form';

// type FormInput = {
//     name:string
// }

// const Form = () => {
//     const {register, handleSubmit} = useForm<FormInput>()
//     const SubmitForm: SubmitHandler<FormInput> = (data) => {
//         console.log(data)
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit(SubmitForm)}>
//             <label>Name</label>
//             <input {...register("name")}type="text" placeholder="name" /><br/>
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }

// export default Form

// import {useForm, SubmitHandler} from 'react-hook-form';

// type FormValues = {
//     name: string;
//     email: string;
// }

// const Form = () => {
//     const { register, handleSubmit } = useForm<FormValues>();

//     const onSubmit: SubmitHandler<FormValues> = (data) => {
//         console.log(data);
//     };

//     return (
//         <>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>Name</label><br/>
//             <input {...register("name")} type="text" placeholder="name" /><br/>
//             <label>Email</label><br/>
//             <input {...register("email")} type="email" placeholder="email" /><br/>
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }

// export default Form
