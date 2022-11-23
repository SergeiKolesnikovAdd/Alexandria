import { useState } from "react";
import { ButtonMD, TextAreaField, InputField, Checkbox } from "components";
import { useFormContext } from "react-hook-form";
import {
  FormLabel,
  FormWrapper,
  FormFields,
  ButtonWrapper,
} from "./questions-modal.style";
import { withFormProvider, } from "utils";
import { postQuestion } from "utils/api"

export const Form = withFormProvider(
  ({ setIsGratitude, setOpen }) => {
    const [isChecked, setIsChecked] = useState(false);
    const {
      handleSubmit,
      formState: { isValid },
      reset,
    } = useFormContext();
    const onSubmit = (data) => {
      postQuestion({
        ...data,
        email: data.email,
        name: data.name,
        message: data.message,
      })
        .then(() => {
          setOpen(false);
          setIsGratitude(true);
          reset();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleCheck = () => {
      setIsChecked((prev) => !prev);
    };
    const disabledButton = () => {
      if (isValid && isChecked) return false;
      else return true;
    };
    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <FormLabel>Как Вас зовут?</FormLabel>
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
          <FormLabel>Интересующий вопрос</FormLabel>
          <TextAreaField
            name="message"
            propsInput={{ placeholder: "Ваш вопрос" }}
            // rules={{}}
          />
        </FormFields>
        <ButtonWrapper mb="mdlg">
          <Checkbox
            isActive={isChecked}
            setActive={handleCheck}
            name="checkbox"
            mb="lg"
          />
          <ButtonMD disabled={disabledButton()}>Оставить заявку</ButtonMD>
        </ButtonWrapper>
      </FormWrapper>
    );
  },
  {
    mode: "onBlur",
    reValidateMode: "onBlur",
  }
);

