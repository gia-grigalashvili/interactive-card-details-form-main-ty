import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useState, useEffect } from "react";
import styled from "styled-components";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(8, "Name must be at least 8 characters long")
    .max(30, "Name must be a maximum of 30 characters long")
    .test(
      "includes space",
      "Name must include a space",
      (value) => value && value.includes(" ")
    ),
  CardNumber: yup
    .string()
    .required("Card number is required")
    .min(19, "Card number must be 16 characters long"),
  mm: yup
    .string()
    .required("Month is required")
    .min(2, "Month must be 2 characters long")
    .test(
      "month validation",
      "Invalid month",
      (value) => value && parseInt(value) > 0 && parseInt(value) <= 12
    ),
  yy: yup
    .string()
    .required("Year is required")
    .test(
      "year validation",
      "Invalid year",
      (value) => value && parseInt(value) > 2024 && parseInt(value) <= 2030
    ),
  cvc: yup
    .string()
    .required("CVC is required")
    .min(3, "CVC must be 3 characters long"),
});

type Input = {
  name: string;
  CardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
};

type InputsProps = {
  cardInfo: Input;
  setCardInfo: React.Dispatch<React.SetStateAction<Input>>;
};

function Inputs({ setCardInfo }: InputsProps) {
  const [showForm, setShowForm] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    setShowForm(false);
  };

  const handleGoBack = () => {
    setShowForm(true);
  };

  useEffect(() => {
    const subscription = watch((value) => setCardInfo(value as Input));
    return () => subscription.unsubscribe();
  }, [watch, setCardInfo]);

  return (
    <div>
      {showForm ? (
        <div>
          <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <InputsDiv>
              <label htmlFor="name">CARDHOLDER NAME</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="e.g. Jane Appleseed"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </InputsDiv>
            <InputsDiv>
              <label htmlFor="CardNumber">Card Number</label>
              <InputMask
                type="text"
                id="CardNumber"
                {...register("CardNumber")}
                placeholder="e.g. 1234 5678 9123 0000 "
                mask="9999 9999 9999 9999"
                maskChar=""
              />
              {errors.CardNumber && <p>{errors.CardNumber.message}</p>}
            </InputsDiv>
            <MMYYCVC>
              <div className="mm">
                <label htmlFor="mm">Exp. Date (MM/YY)</label>
                <div className="mmmm">
                  <InputsDiv>
                    <InputMask
                      type="text"
                      id="mm"
                      {...register("mm")}
                      placeholder="MM"
                      mask="99"
                      maskChar=""
                    />
                    {errors.mm && <p>{errors.mm.message}</p>}
                  </InputsDiv>
                  <InputsDiv>
                    <InputMask
                      type="text"
                      id="yy"
                      {...register("yy")}
                      placeholder="YY"
                      mask="9999"
                      maskChar=""
                    />
                    {errors.yy && <p>{errors.yy.message}</p>}
                  </InputsDiv>
                </div>
              </div>
              <InputsDiv>
                <label htmlFor="cvc">CVC</label>
                <InputMask
                  type="text"
                  id="cvc"
                  {...register("cvc")}
                  placeholder="e.g. 123"
                  mask="999"
                  maskChar=""
                />
                {errors.cvc && <p>{errors.cvc.message}</p>}
              </InputsDiv>
            </MMYYCVC>
            <Button type="submit">Click me</Button>
          </FormDiv>
        </div>
      ) : (
        <div>
          <h1>Thank you</h1>
          <Button onClick={handleGoBack}>Confirm</Button>
        </div>
      )}
    </div>
  );
}

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
    width: 327px;
    height: 45px;
    border-radius: 8px;
    border: 1px solid #dfdee0;
    background: #fff;
    color: var(--Deep-Violet, #21092f);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Space Grotesk";
    font-size: 18px;
    font-weight: 500;
  }

  label {
    color: var(--Deep-Violet, #21092f);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Space Grotesk";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    color: red;
    font-size: 12px;
  }
`;

const MMYYCVC = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .mmmm {
    display: flex;
    gap: 10px;
    input {
      width: 72px;
      height: 45px;
      text-align: center;
    }
  }

  .mm {
    display: flex;
    flex-direction: column;
    text-align: center;
    label {
      color: var(--Deep-Violet, #21092f);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Space Grotesk";
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

  input {
    width: 164px;
    height: 45px;
  }
`;
const Button = styled.button`
  width: 327px;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  border: none;
  color: #fff;
`;
export default Inputs;
