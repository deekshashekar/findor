import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
  name: string;
  age: number;
  dob: Date;
};
const NewForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('done', data);
  };
  console.log('isSubmitting', isSubmitting);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="name">Name</label>
        <br />
        <input
          {...register('name', { required: 'Name is mandatory' })}
          id="name"
          name="name"
          type="text"
          placeholder="enter name"
        />
        <br />
        {errors?.name && <p>{errors.name.message}</p>}
        <label htmlFor="age">Age</label>
        <br />
        <input
          {...register('age', {
            required: 'age is mandatory',
            valueAsNumber: true,
          })}
          id="age"
          name="age"
          type="number"
          placeholder="enter age"
        />
        <br />
        {errors?.age && <p>{errors?.age?.message}</p>}
        <br />
        <label htmlFor="dob">Date of birth</label>
        <br />
        <input
          type="date"
          {...register('dob', { valueAsDate: true })}
          id="dob"
          name="dob"
        />
        <br />
        <button disabled={!isDirty || !isValid || isSubmitting} type="submit">
          submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default NewForm;
