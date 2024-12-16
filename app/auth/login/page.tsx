import LoginForm from "@/components/auth/login-form";

export default async function Login() {
	return (
		<div className="flex flex-col w-full min-h-full items-center justify-center">
			<LoginForm />
		</div>
	);
}
