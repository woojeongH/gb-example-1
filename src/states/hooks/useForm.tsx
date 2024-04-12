import { useAtom } from 'jotai'

function useForm(formAtom: any) {
  const [values, setValues]: any = useAtom(formAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((values:any) => ({ ...values, [name]: value }));
  };

  return {
    values,
    handleChange,
  };
}

export default useForm;