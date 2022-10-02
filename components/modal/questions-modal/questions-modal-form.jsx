import { selectServicesOptions } from "./constants";
import {ButtonMD, DropDownField, TextAreaField, InputField} from "components";
import { useFormContext } from "react-hook-form";
import { FormLabelGray, FormLabel, FormWrapper, ErrorField } from "./questions-modal";
import { withFormProvider } from "utils";
import { Checkbox } from "components";

export const Form =  withFormProvider(({ cost, discription, title }) => {

  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => {console.log(data);};


  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Как вас зовут?</FormLabel>
      <InputField
      name="name"
        mb="md"
        propsInput={{ placeholder: "Ваше имя" }}
        title="Name *"
      />
      <FormLabel>Электронная почта</FormLabel>
      <InputField
      name="email"
        mb="md"
        propsInput={{ placeholder: "E-mail" }}
      />  
      <FormLabel>
        Дополнительная информация
      </FormLabel>
      <TextAreaField name="about"/>
      <Checkbox/>
      <ButtonMD >Оставить заявку</ButtonMD>
    </FormWrapper>
  );
});
  