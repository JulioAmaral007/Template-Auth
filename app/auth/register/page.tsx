import RegisterForm from "@/components/auth/register-form";

export default async function Login() {
	return (
		<div className="flex flex-col w-full min-h-full items-center justify-center">
			<RegisterForm />
		</div>
	);
}
