import { selectServicesOptions } from "./constants";
import { Input, DropDown, ButtonMD, TextArea } from "components";
import { useForm, useFormContext } from "react-hook-form";
import { FormLabelGray, FormLabel, FormWrapper, ErrorField } from "./form-modal.style";
import { InputField } from "components";
import { DropDownField } from "components";
import { TextAreaField } from "components";

export const Form = ({ cost, discription, title }) => {

  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => {console.log(data);};


  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Как вас зовут?</FormLabel>
      <InputField
        isError={errors? true : false}
        mb="md"
        propsInput={{ placeholder: "Ваше имя" }}
        { ...register("name", {
          required: true,
        })}
      />
      <ErrorField isError={errors? true : false}>
        {errors?.name && <p>Некоректно заполнен E-mail</p>}
      </ErrorField>
      <FormLabel>Электронная почта*</FormLabel>
      <InputField
        isError={errors.email ? true : false}
        mb="md"
        propsInput={{ placeholder: "E-mail" }}
        {...register("email", {
          required: true,
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Поле заполнено неверно",
          },
        })}
      />
      <ErrorField>
        {errors.email && <p>{errors.email.message || "Ошибка"}</p>}
      </ErrorField>
      <FormLabel>
        Название журнала <FormLabelGray>(При наличии)</FormLabelGray>
      </FormLabel>
      <InputField mb="md" />
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
      <TextAreaField />
      <ButtonMD onClick>Оставить заявку</ButtonMD>
    </FormWrapper>
  );
};
