import { useState } from "react";
import { ButtonMD, TextAreaField, InputField, Checkbox } from "components";
import { useFormContext } from "react-hook-form";
import {
  FormLabel,
  FormWrapper,
  FormFields,
  ButtonWrapper,
  StyledInput,
} from "./news-slide.style";
import { withFormProvider, } from "utils";
import { postQuestion } from "utils/api"
import { SendButton } from "./news-slide.style";
import { colors } from "styles";

export const NewsForm = withFormProvider(
  ({ setIsGratitude, setOpen }) => {
    // const [isChecked, setIsChecked] = useState(false);
    const {
      handleSubmit,
      formState: reset
    } = useFormContext();
    const onSubmit = (data) => {
      postQuestion({
        ...data,
        email: data.email,
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

    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <StyledInput
            style={{ color: colors.white }}
            name="email"
            mb="md"
            propsInput={{ placeholder: "Введите адрес электронной почты" }}
          />
        </FormFields>
        <ButtonWrapper>
          <SendButton />
        </ButtonWrapper>
      </FormWrapper>
    );
  },
  {
    mode: "onBlur",
    reValidateMode: "onBlur",
  }
);
