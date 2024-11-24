"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";
import { Home, LayoutDashboardIcon, LogOut, Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { ThemeSwitch } from "@/components/theme-switch";
import { SignOut } from "@/actions";
import { usePRouter } from "@/components/custom-router";

export const NavMenu = ({ size }: { size?: number }) => {
    const { data: session } = useSession();
    const router = usePRouter();

    const handleSignOut = async () => {
        try {
            await SignOut();
        } catch (error) {
            toast.error(
                "An unexpected error occurred. Please try again later.",
            );
        }
    };

    const iconClasses =
        "w-4 text-default-500 flex-shrink-0 group-hover:text-foreground";

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    showFallback
                    as="button"
                    className="transition-transform"
                    size={size ? undefined : "sm"}
                    src={`${session?.user?.image}`}
                    style={{
                        width: size ? size : undefined,
                        height: size ? size : undefined,
                    }}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem
                        key="profile"
                        isReadOnly
                        className="h-14 gap-2"
                    >
                        <User
                            avatarProps={{
                                src: `${session?.user?.image}`,
                                showFallback: true,
                            }}
                            classNames={{
                                name: "text-default-600",
                                description: "text-default-500",
                            }}
                            description={session?.user?.email}
                            name={session?.user?.name}
                        />
                    </DropdownItem>
                    <DropdownItem
                        key="dashboard"
                        endContent={
                            <LayoutDashboardIcon
                                className={iconClasses}
                                size={16}
                            />
                        }
                        onClick={() => router.push("/")}
                    >
                        Dashboard
                    </DropdownItem>
                    <DropdownItem
                        key="settings"
                        endContent={
                            <Settings className={iconClasses} size={16} />
                        }
                        onClick={() => router.push("/settings")}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        key="theme"
                        isReadOnly
                        className="cursor-default"
                        endContent={<ThemeSwitch className={iconClasses} />}
                    >
                        Theme
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection showDivider aria-label="Home & Logout">
                    <DropdownItem
                        key="home"
                        endContent={<Home className={iconClasses} size={16} />}
                        onClick={() => router.push("/home")}
                    >
                        Home Page
                    </DropdownItem>
                    <DropdownItem
                        key="logout"
                        endContent={
                            <LogOut className={iconClasses} size={16} />
                        }
                        onClick={handleSignOut}
                    >
                        Log Out
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Upgrade">
                    <DropdownItem
                        key="upgrade_to_pro"
                        className="bg-foreground text-center text-background data-[hover]:bg-foreground/80 data-[hover]:text-background"
                    >
                        Upgrade to Pro
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};
