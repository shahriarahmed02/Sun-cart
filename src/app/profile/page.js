import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/login");
    }

    const { user } = session;

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto card bg-base-100 shadow-2xl border border-base-200">
                <div className="card-body items-center text-center">
                    <div className="avatar mb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.image || "https://i.pravatar.cc/150"} alt={user.name} />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold">{user.name}</h2>
                    <p className="text-lg opacity-70">{user.email}</p>
                    
                    <div className="card-actions mt-8 gap-4">
                        <Link href="/profile/update" className="btn btn-primary">
                            Update Profile
                        </Link>
                        <button className="btn btn-outline btn-error">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}