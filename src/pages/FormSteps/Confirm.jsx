import { useForm } from "react-hook-form";
import { useAppState } from "../../hooks/state";
import {
  Button,
  Field,
  Form,
  Input,
  Section,
  SectionRow,
} from "../../components/Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    //SUBMIT DATA TO DATABASE
  };

  // SHOWING THE DATA THAT WAS ENTERED BY THE USER FOR IT TO BE CONFIRMED
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal Information" url="/">
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>

        <SectionRow>
          <div>Last Name</div>
          <div>{state.lastName}</div>
        </SectionRow>

        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <Section title="Education" url="/education">
        <SectionRow>
          <div>University</div>
          <div>state.university</div>
        </SectionRow>

        <SectionRow>
          <div>Degree</div>
          <div>state.degree</div>
        </SectionRow>
      </Section>
      <Section title="about" url="about">
        <SectionRow>
          <div>About Me</div>
          <div>state.about</div>
        </SectionRow>
      </Section>

      <div className="flex justify-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};

/*
We could have gone further with abstractions and collected the data for display into a separate structure,
 which we'd then iterate over and render. However, going that much DRY with the code could prove problematic when we get new requirements, 
 to which the code is not robust enough to adapt. One important rule to keep in mind is that it's way easier to DRY the code than to un-DRY it.

When using TypeScript with React Hook Form, it's important to properly type the form events and data. This is especially important when the form data is passed between the steps.
*/
