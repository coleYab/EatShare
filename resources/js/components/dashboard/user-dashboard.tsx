import { Link } from "@inertiajs/react"
import RecipeCard from "@/components/recepie/recepie-card"

import {
    Bell,
    BookMarked,
    ChefHat,
    Clock,
    Compass,
    Heart,
    Home,
    MessageCircle,
    Plus,
    Search,
    Settings,
    TrendingUp,
    User,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function UserDashboard({ userData }: { userData : any }) {
    console.log(userData)
    return (
        <>

            <div className="flex-1">
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search recipes..."
                            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                        />
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <Button variant="outline" size="icon" className="relative">
                            <Bell className="h-4 w-4" />
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium text-white">
                                3
                            </span>
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                            <Link href="recepie/create" className="flex gap-2">
                                <Plus className="h-4 w-4" />
                                New Recipe
                            </Link>
                        </Button>
                    </div>
                </header>

                <main className="grid gap-6 p-6 md:grid-cols-6 lg:grid-cols-12">
                    <div className="space-y-6 md:col-span-4 lg:col-span-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight">Welcome back, John!</h1>
                                <p className="text-muted-foreground">Here's what's cooking in your kitchen today.</p>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { value: userData?.recepies?.length || "12", label: "Recipes Created", icon: ChefHat, color: "bg-orange-100 text-orange-500" },
                                { value: userData?.recepies?.length || "248", label: "Recipe Saves", icon: BookMarked, color: "bg-blue-100 text-blue-500" },
                                { value: "1.2k", label: "Total Likes", icon: Heart, color: "bg-red-100 text-red-500" },
                            ].map((item, i) => (
                                <Card key={i}>
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
                                        <div className={`rounded-full p-2 ${item.color}`}>
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{item.value}</div>
                                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold">Your Recent Recipes</h2>
                        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 ">
                            {userData?.recepies.length ? userData.recepies.map((recipe, i) => (
                                <RecipeCard recipe={recipe} />
                            )) : (
                                <h1>You have no recipe please create one</h1>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6 md:col-span-2 lg:col-span-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>People to Follow</CardTitle>
                                <CardDescription>Suggested based on your interests</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        {
                                            avatar: "/placeholder.svg?height=40&width=40&text=CF",
                                            name: "Chef Fiona",
                                            username: "@cheffiona",
                                            bio: "Professional chef specializing in Italian cuisine",
                                        },
                                        {
                                            avatar: "/placeholder.svg?height=40&width=40&text=VK",
                                            name: "Vegan Kitchen",
                                            username: "@vegankitchen",
                                            bio: "Plant-based recipes for everyone",
                                        },
                                        {
                                            avatar: "/placeholder.svg?height=40&width=40&text=BM",
                                            name: "Baking Master",
                                            username: "@bakingmaster",
                                            bio: "Pastry chef sharing baking tips and recipes",
                                        },
                                    ].map((person, i) => (
                                        <div key={i} className="flex items-start justify-between">
                                            <div className="flex items-start gap-3">
                                                <Avatar>
                                                    <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                                                    <AvatarFallback>
                                                        {person.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">{person.name}</div>
                                                    <div className="text-xs text-muted-foreground">{person.username}</div>
                                                    <p className="text-xs text-muted-foreground mt-1">{person.bio}</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" size="sm" className="h-8 rounded-full">
                                                Follow
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full">
                                    View More
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="md:col-span-6 lg:col-span-12">
                        <Card className="border-t-4 border-t-orange-500">
                            <CardHeader>
                                <CardTitle>Recipes You Might Like</CardTitle>
                                <CardDescription>Personalized suggestions based on your cooking preferences</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 pt-1">
                                                                  {userData?.recepies.length ? userData.recepies.map((recipe, i) => (
                                <RecipeCard recipe={recipe} />
                            )) : (
                                <h1>You have no recipe please create one</h1>
                            )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="ghost" size="sm">
                                    Not interested
                                </Button>
                                <Button className="bg-orange-500 hover:bg-orange-600">View All Suggestions</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    )
}
