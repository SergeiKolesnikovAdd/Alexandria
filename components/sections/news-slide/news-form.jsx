import { useFormContext } from "react-hook-form";
import {
  FormWrapper,
  FormFields,
  ButtonWrapper,
} from "./news-slide.style";
import { withFormProvider } from "utils";
import { postSubscribe } from "utils/api";
import { SendButton } from "./news-slide.style";
import { colors } from "styles";
import { InputFieldNews } from "components";
import { ButtonMD } from "components";
import { Right } from "components";
import { ButtonNews } from "components";

export const NewsForm = withFormProvider(
  ({ setIsGratitude, formName,}) => {

    const { handleSubmit, reset } = useFormContext();
    const onSubmit = (data) => {
      console.log(data),
      postSubscribe({
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
          <InputFieldNews
            style={{ color: colors.white }}
            name="email"
            propsInput={{
              isWhite: true,
              placeholder: "Введите адрес электронной почты",
            }}
          />
        </FormFields>
        <ButtonWrapper><ButtonNews/></ButtonWrapper>
          
      </FormWrapper>
    );
  },
  {
    mode: "onBlur",
    reValidateMode: "onBlur",
  }
);
