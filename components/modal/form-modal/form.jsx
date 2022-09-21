import { selectServicesOptions } from "./constants";
import { Input, DropDown, ButtonMD, TextArea } from "components";
import { useForm } from "react-hook-form";
import { FormLabelGray, FormLabel, FormWrapper, ErrorField } from "./form-modal.style";

export const Form = ({ cost, discription, title }) => {
  const {
    register,
    formState: { errors },
	  handleSubmit,
	 reset,
  } = useForm({
	  mode:"onBlur"
  });

  const onSubmit = (data) => {
	  console.log(JSON.stringify(data));
	  reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Как вас зовут?</FormLabel>
      <Input
        isError={errors? true : false}
        mb="md"
        propsInput={{ placeholder: "Ваше имя" }}
        {...register("name", {
          required: "Поле обязательно к заполнению",
        })}
      />
      <ErrorField isError={errors? true : false}>
        {errors?.name && <p>{errors?.name?.message || "Ошибка"}</p>}
      </ErrorField>
      <FormLabel>Электронная почта*</FormLabel>
      <Input
        isError={errors.email ? true : false}
        mb="md"
        propsInput={{ placeholder: "E-mail" }}
        {...register("email", {
          required: "Поле обязательно к заполнению",
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Поле заполнено неверно",
          },
        })}
      />
      <ErrorField>
        {errors?.email && <p>{errors?.email?.message || "Ошибка"}</p>}
      </ErrorField>
      <FormLabel>
        Название журнала <FormLabelGray>(При наличии)</FormLabelGray>
      </FormLabel>
      <Input mb="md" />
      <FormLabel>Что вас интересует</FormLabel>
      <DropDown
        mb="md"
        title="Выберите из списка"
        name="services"
        options={selectServicesOptions}
      />
      <FormLabel>
        Дополнительная информация
        <FormLabelGray>(Не обязательно)</FormLabelGray>
      </FormLabel>
      <TextArea />
      <ButtonMD type="submit">Оставить заявку</ButtonMD>
    </FormWrapper>
  );
};
