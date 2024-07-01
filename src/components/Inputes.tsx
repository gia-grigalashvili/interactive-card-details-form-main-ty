import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useState } from "react";
const schema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .min(8, "name must be least 8 characters long")
    .max(30, "name must be maximum 30 characters long")
    .test("includes space", (value) => value?.includes(" ")),
  CardNumber: yup
    .string()
    .required("CardNumber is required")
    .min(19, "card number must be 16 characters long"),
  mm: yup
    .string()
    .min(2, "month must be 2 characters long")
    .test((value) => {
      if (value) {
        parseInt(value) > 0 && parseInt(value) <= 12;
      }
    })
    .required("mm is required"),
  yy: yup
    .string()
    .test("year validation", (value) => {
      if (value) {
        parseInt(value) > 2024 && parseInt(value) <= 2030;
      }
    })
    .required("yy is required"),
  cvc: yup
    .string()
    .required("cvc is required")
    .min(3, "cvc must be 3 characters long"),
});
type Input = {
  name: string;
  CardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
};
function Inputes() {
  const [showform, setshowform] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    setshowform(false);
  };
  const name = watch("name");
  const CardNumber = watch("CardNumber");
  const mm = watch("mm");
  const yy = watch("yy");
  const cvc = watch("cvc");
  return (
    <div>
      {showform ? (
        <div>
          <div>
            <h2>{name || "jane app"}</h2>
            <h2>{CardNumber || "00000"}</h2>
            <h2>{mm}</h2>
            <h2>{yy}</h2>
            <h2>{cvc}</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">
                CARDHOLDER NAME
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="e.g. Jane Appleseed"
                />
              </label>
              {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <div>
              <label htmlFor="CardNumber">
                Card Number
                <InputMask
                  type="text"
                  id="CardNumber"
                  {...register("CardNumber")}
                  placeholder="e.g. 1234 5678 9123 0000 "
                  mask="9999 9999 9999 9999"
                  maskChar=""
                />
              </label>
              {errors.CardNumber ? <p>{errors.CardNumber.message}</p> : null}
            </div>
            <div>
              <label htmlFor="mm">
                Exp. Date (MM/YY)
                <InputMask
                  type="text"
                  id="mm"
                  {...register("mm")}
                  placeholder="mm"
                  mask="99"
                  maskChar=""
                />
              </label>
              {errors.mm ? <p>{errors.mm.message}</p> : null}
            </div>
            <div>
              <label htmlFor="yy">
                Exp. Date (MM/YY)
                <InputMask
                  type="text"
                  id="yy"
                  {...register("yy")}
                  placeholder="yy"
                  mask="9999"
                  maskChar=""
                />
              </label>
              {errors.yy ? <p>{errors.yy.message}</p> : null}
            </div>
            <div>
              <label htmlFor="cvc">
                Exp. Date (MM/YY)
                <InputMask
                  type="text"
                  id="cvv"
                  {...register("cvc")}
                  placeholder="cvc"
                  mask="999"
                  maskChar=""
                />
              </label>
              {errors.cvc ? <p>{errors.cvc.message}</p> : null}
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>thank you</h1>
          <button>go back</button>
        </div>
      )}
    </div>
  );
}

export default Inputes;
