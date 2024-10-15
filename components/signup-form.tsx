"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";

import AccessibleLink from "@/components/ui/AccessibleLink";
import { Google } from "@/components/icons";

const SignUpForm = () => {
    const router = useRouter();
    const FormSchema = z.object({
        name: z.string().min(1, "Name is required").max(100),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have more than 8 characters"),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                }),
            });

            if (response.ok) {
                router.push("/sign-in");
                toast.success("Success!", {
                    description: "Signed up successfully.",
                });
            } else {
                toast.error("Sign Up Failed", {
                    description: "An error occurred. Please try again.",
                });
            }
        } catch (error) {
            toast.error("Server Error", {
                description:
                    "An unexpected error occurred. Please try again later.",
            });
        }
    };

    const signInWithGoogleOnClickHandler = async () => {
        try {
            await signIn("google", {
                redirect: false,
                callbackUrl: "/",
            });
        } catch (error) {
            toast.error("Server Error", {
                description:
                    "An unexpected error occurred. Please try again later.",
            });
        }
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <form
            className="grid content-center gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <Input
                label="Name"
                placeholder="John Doe"
                required={false}
                {...form.register("name")}
                errorMessage={form.formState.errors.name?.message}
                isInvalid={!!form.formState.errors.name}
            />
            <Input
                label="Email"
                placeholder="mail@example.com"
                required={false}
                {...form.register("email")}
                errorMessage={form.formState.errors.email?.message}
                isInvalid={!!form.formState.errors.email}
            />
            <Input
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isPasswordVisible ? (
                            <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                            <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                        )}
                    </button>
                }
                isInvalid={!!form.formState.errors.password}
                {...form.register("password")}
                errorMessage={form.formState.errors.password?.message}
                label="Password"
                placeholder="Enter your password"
                required={false}
                type={isPasswordVisible ? "text" : "password"}
            />
            <Button className="font-semibold" color="primary" type="submit">
                Create account
            </Button>
            <div className="grid grid-cols-[1fr,_auto,_1fr] items-center gap-2">
                <Divider />
                <span className="text-center">or</span>
                <Divider />
            </div>
            <Button
                className="font-semibold"
                startContent={<Google size={20} />}
                variant="ghost"
                onClick={signInWithGoogleOnClickHandler}
            >
                Sign up with Google
            </Button>
            <p className="text-center text-sm opacity-80">
                {"By signing up, you agree to our "}
                <AccessibleLink href="/sign-in" size="sm">
                    terms
                </AccessibleLink>
                {", "}
                <AccessibleLink href="/sign-in" size="sm">
                    acceptable use
                </AccessibleLink>
                {", and "}
                <AccessibleLink href="/sign-in" size="sm">
                    privacy policy
                </AccessibleLink>
            </p>
        </form>
    );
};

export default SignUpForm;
