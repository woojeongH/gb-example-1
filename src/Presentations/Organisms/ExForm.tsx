import ExFieldset from "@views/Molecules/ExFieldset";
import ExTextInput from "@views/Atoms/ExTextInput";
import useForm from "@/states/hooks/useForm";
import { formAtom } from "@/states/store";



const ExForm = () => {

  const {values, handleChange} = useForm(formAtom);
  return <form>
      <ExFieldset>
        <ExTextInput name="a" value={values["a"]} onChange={handleChange}></ExTextInput>
        <ExTextInput name="b" value={values["b"]} onChange={handleChange}></ExTextInput>
      </ExFieldset>
  </form>
};


export default ExForm;