import { Input, Caption, DropDown, ButtonMD} from "components";
import { FormWrapper } from "./form-modal.style";

export const Form = (({ cost, discription, title }) => {

	return (
		<FormWrapper onSubmit={console.log("данные формы")}>
			{/* <Caption>Как вас зовут?</Caption>
			<Input></Input>
			<Caption>Электронная почта *</Caption>
			<Input></Input>
			<Caption>Название журнала </Caption>
			<Input></Input>
			<Caption>Что вас интересует</Caption>
			<Input></Input>
			<Caption>Что вас интересует</Caption>
			<DropDown></DropDown>
			<Caption>Что вас интересует</Caption> */}
			{/* <ButtonMD type="submit">Оставить заявку</ButtonMD> */}

		</FormWrapper>


	)




});