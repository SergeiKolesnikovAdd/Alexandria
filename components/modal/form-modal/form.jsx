import { selectServicesOptions } from "./constants";
import {
  ButtonMD,
  DropDownField,
  TextAreaField,
  InputField,
  Checkbox,
} from "components";
import { useFormContext } from "react-hook-form";
import {
  FormLabelGray,
  FormLabel,
  FormWrapper,
  ErrorField,
} from "./form-modal.style";
import { withFormProvider } from "utils";
import { useState } from "react";
import { postMain } from "utils/api";

export const Form = withFormProvider(({ tariff = "", formName, setIsGratitude, setOpen }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { handleSubmit } = useFormContext();
  // const onSubmit = (data) => { console.log(data); };

  const onSubmit = (data) => {
    postMain({
      ...data,
      email: data.email,
      name: data.name,
      journalName: data.journalName,
      action: data.action,
      tariff: tariff,
      message: data.message,
      formName: formName,
    })
      .then(() => {
        setOpen(false);
        setIsGratitude(true);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Как вас зовут?*</FormLabel>
      <InputField
        name="name"
        mb="md"
        propsInput={{ placeholder: "Ваше имя" }}
        title="Name"
      />
      <FormLabel>Электронная почта*</FormLabel>
      <InputField name="email" mb="md" propsInput={{ placeholder: "E-mail" }} />
      <FormLabel>
        Название журнала <FormLabelGray>(При наличии)</FormLabelGray>
      </FormLabel>
      <InputField rules={{}} mb="md" name="journalName" />
      <FormLabel>Что вас интересует</FormLabel>
      <DropDownField
        mb="md"
        title="Выберите из списка"
        name="action"
        options={selectServicesOptions}
      />
      <FormLabel>
        Дополнительная информация
        <FormLabelGray>(Не обязательно)</FormLabelGray>
      </FormLabel>
      <TextAreaField name="message" rules={{}} />
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
