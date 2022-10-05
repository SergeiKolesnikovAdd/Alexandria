import { ButtonMD, TextAreaField, InputField } from "components";
import { useFormContext } from "react-hook-form";
import { FormLabel, FormWrapper } from "./questions-modal.style";
import { withFormProvider } from "utils";
import { Checkbox } from "components";
import { useState } from "react";

export const Form = withFormProvider(({ cost, discription, title }) => {
  const [isChecked, setIsChecked] = useState(false)
  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  }

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
      <TextAreaField name="about" rules={{}} />
      <Checkbox
        isActive={isChecked}
        setActive={handleCheck}
        name="checkbox"
        mb="lg"
      />
      <ButtonMD disabled={!isChecked}>Оставить заявку</ButtonMD>
    </FormWrapper>
  );
});
