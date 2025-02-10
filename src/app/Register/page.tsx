"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import FormInput from "@/components/Form Elements/FormInput";
import FormSelect from "@/components/Form Elements/FormSelect";
import FormRadioGroup from "@/components/Form Elements/FormRadioGroup";
import FormCheckBox from "@/components/Form Elements/FormCheckBox";

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const fields = [
  {
    component: FormInput,
    name: "Username",
    rules: {
      required: {
        message: "Username is required",
        value: true,
      },
    },
    label: "Username",
    placeholder: "Please Enter Your Username",
  },
  {
    component: FormSelect,
    name: "Gender",
    rules: {
      required: {
        message: "Gender is required",
        value: true,
      },
    },
    label: "Gender",
    placeholder: "Please Select Your Gender",
    options: [
      {
        value: "Male",
        text: "Male",
      },
      {
        value: "Female",
        text: "Female",
      },
    ],
  },
  {
    component: FormRadioGroup,
    name: "Batch",
    rules: {
      required: {
        message: "Batch is required",
        value: true,
      },
    },
    label: "Batch",
    options: [
      {
        value: "batch1",
        text: "Batch1",
      },
      {
        value: "batch2",
        text: "Batch2",
      },
      {
        value: "batch3",
        text: "Batch3",
      },

    ],
  },
  {
    component: FormCheckBox,
    name: "Languages",
    rules: {
      required: {
        message: "Languages is required",
        value: true,
      },
    },
    label: "Languages",
    options: [
      {
        value: "english",
        text: "English",
      },
      {
        value: "hindi",
        text: "Hindi",
      },
      {
        value: "gujarati",
        text: "Gujarati",
      },
    ],
  },
  {
    component: FormInput,
    name: "Password",
    rules: {
      required: {
        message: "Enter Your Password",
        value: true,
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Example pattern
        message: "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
      },
    },
    label: "Password",
    placeholder: "Please Enter Your Password",
    type: "password",
  },
  {
    component: FormInput,
    name: "Confirm",
    rules: {
      required: {
        message: "Enter Your Confirm-Password",
        value: true,
      },
      validate: (value, formValues) =>
        value === formValues.Password || "Passwords do not match",
    },
    label: "Confirm Password",
    placeholder: "Please Enter Your Confirm-Password",
    type: "password",
  },
];

const Register = () => {
  const form = useForm({
    defaultValues: {
      Username: "",
      Gender: "",
      Batch: "",
      Password: "",
      Confirm: "",
    },
    mode: "all"
  });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-center font-bold text-2xl mt-8 mb-8">Registration Form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          {fields.map(({ component: Component, ...x }) => (
            <Component key={x.name} control={form.control} {...x} />
          ))}
          
          <Button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
