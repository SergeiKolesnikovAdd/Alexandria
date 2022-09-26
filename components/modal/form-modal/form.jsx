import { selectServicesOptions } from "./constants";
import {ButtonMD, DropDownField, TextAreaField, InputField} from "components";
import { useFormContext } from "react-hook-form";
import { FormLabelGray, FormLabel, FormWrapper, ErrorField } from "./form-modal.style";
import { withFormProvider } from "utils";

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
      <FormLabel>Электронная почта*</FormLabel>
      <InputField
      name="email"
        mb="md"
        propsInput={{ placeholder: "E-mail" }}
      />
      <FormLabel>
        Название журнала <FormLabelGray>(При наличии)</FormLabelGray>
      </FormLabel>
      <InputField mb="md" name="magazine" />
      <FormLabel>Что вас интересует</FormLabel>
      <DropDownField
        mb="md"
        title="Выберите из списка"
        name="services"
        options={selectServicesOptions}
      />
      <FormLabel>
        Дополнительная информация
        <FormLabelGray>(Не обязательно)</FormLabelGray>
      </FormLabel>
      <TextAreaField name="about"/>
      <ButtonMD >Оставить заявку</ButtonMD>
    </FormWrapper>
  );
});
  