"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Avatar } from "@nextui-org/avatar";
import { signOut, useSession } from "next-auth/react";
import { Home, LogOut, PlusIcon } from "lucide-react";

import { ThemeSwitch } from "@/components/ui/theme-switch";
import BrandLogo from "@/components/logo/brand-logo";
import Logo from "@/components/logo/logo";

export default function NavBar() {
    const { data: session } = useSession();

    const handleSignOut = () => {
        signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
        });
    };

    const iconClasses =
        "w-4 text-default-500 flex-shrink-0 group-hover:text-white";

    return (
        <Navbar isBordered maxWidth="2xl">
            <NavbarBrand>
                <Link className="hover:opacity-1" href="/">
                    <Logo />
                    <BrandLogo className="ms-2" />
                </Link>
            </NavbarBrand>
            <NavbarContent as="div" className="items-center" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            showFallback
                            as="button"
                            className="transition-transform"
                            size="sm"
                            src={`${session?.user?.image}`}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownSection
                            showDivider
                            aria-label="Profile & Actions"
                        >
                            <DropdownItem
                                key="profile"
                                isReadOnly
                                className="h-14 gap-2"
                            >
                                <User
                                    avatarProps={{
                                        size: "sm",
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
                            <DropdownItem key="dashboard">
                                Dashboard
                            </DropdownItem>
                            <DropdownItem key="settings">Settings</DropdownItem>
                            <DropdownItem
                                key="new_project"
                                endContent={
                                    <PlusIcon
                                        className={iconClasses}
                                        size={16}
                                    />
                                }
                            >
                                New Snippet
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection showDivider aria-label="Preferences">
                            <DropdownItem key="quick_search" shortcut="⌘K">
                                Quick search
                            </DropdownItem>
                            <DropdownItem
                                key="theme"
                                isReadOnly
                                className="cursor-default"
                                endContent={
                                    <ThemeSwitch className={iconClasses} />
                                }
                            >
                                Theme
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection showDivider aria-label="Home & Logout">
                            <DropdownItem
                                key="home"
                                endContent={
                                    <Home className={iconClasses} size={16} />
                                }
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
                                className="bg-foreground text-center text-background"
                            >
                                Upgrade to Pro
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}