import { ButtonMD, CheckboxField, TextAreaField, InputField } from "components";
import { useFormContext } from "react-hook-form";
import { FormLabel, FormWrapper } from "./questions-modal.style";
import { withFormProvider } from "utils";

export const Form = withFormProvider(({ cost, discription, title }) => {
  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => {
    console.log(data);
  };

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
      <InputField name="email" mb="md" propsInput={{ placeholder: "E-mail" }} />
      <FormLabel>Дополнительная информация</FormLabel>
      <TextAreaField name="about" />
      <CheckboxField name="checkbox" />
      <ButtonMD>Оставить заявку</ButtonMD>
    </FormWrapper>
  );
});
