import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthCardProps {
	title?: string;
	description?: string;
	children: React.ReactNode;
}

export default function AuthCard({ title, description, children }: AuthCardProps) {
	return (
		<Card className="max-w-sm w-full rounded-2xl mt-12">
			<CardHeader>
				{title && <CardTitle className="text-xl font-bold">{title}</CardTitle>}
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
