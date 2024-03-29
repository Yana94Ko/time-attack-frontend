import Page from "@/components/Page";
import SignUpForm from "./_components/SignUpForm";

function page() {
  return (
    <Page title="회원가입" fullWidth={false}>
      <SignUpForm />
    </Page>
  );
}

export default page;
