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
import { withFormProvider } from "utils";
import { postSubscribe } from "utils/api";
import { SendButton } from "./news-slide.style";
import { colors } from "styles";
import { ButtonSliderRight } from "components";

export const NewsForm = withFormProvider(
  ({ setIsGratitude, formName,}) => {
    // const [isChecked, setIsChecked] = useState(false);
    const { handleSubmit, formState: reset } = useFormContext();
    const onSubmit = (data) => {
      console.log(data);
      postSubscribe({
        ...data,
        email: data.email,
        formName: formName,
      })
        .then(() => {
          console.log(data);
          setIsGratitude(true);
          reset();
        })
        .catch((error) => {
          console.log("data:", data);
          console.log(error);
        });
    };

    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <InputField
            style={{ color: colors.white }}
            name="email"
            propsInput={{
              isWhite: true,
              placeholder: "Введите адрес электронной почты",
            }}
          />
        </FormFields>
          <SendButton />
      </FormWrapper>
    );
  },
  {
    mode: "onBlur",
    reValidateMode: "onBlur",
  }
);
