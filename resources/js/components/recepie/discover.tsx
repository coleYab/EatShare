import { useState, useEffect } from "react"
import { Link } from "@inertiajs/react"
import {
  BookMarked,
  ChefHat,
  ChevronDown,
  Clock,
  Compass,
  Filter,
  FlameIcon as Fire,
  Heart,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import FeaturedRecipe from "@/components/recepie/featured"
import CreatorCard from "@/components/recepie/creator-card"
import RecipeCard from "@/components/recepie/recepie-card"


export default function AllRecepies({ recepies }: {recepies : any}) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [featuredIndex, setFeaturedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredRecipes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const categories = [
    { id: "all", name: "All", icon: Compass },
    { id: "my", name: "My Recipes", icon: TrendingUp },
    { id: "saved", name: "Saved Recipes", icon: BookMarked }, 
    { id: "liked", name: "Liked Recipes", icon: Heart }, 
  ]

  const featuredRecipes = [
    {
      id: 1,
      title: "Ultimate Chocolate Lava Cake",
      image: "https://static.vecteezy.com/system/resources/previews/023/010/447/non_2x/the-fast-food-meal-in-the-black-background-with-ai-generated-free-photo.jpg",
      author: "Dessert Master",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=DM",
      description:
        "Indulge in this decadent chocolate lava cake with a molten center that flows like a dream. Perfect for special occasions or when you need a chocolate fix!",
      time: "35 min",
      difficulty: "Medium",
      likes: "2.4k",
      tags: ["Dessert", "Chocolate", "Baking"],
    },
    {
      id: 2,
      title: "Mediterranean Grilled Salmon",
      image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Photos-Food-HD.jpg",
      author: "Seafood Specialist",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=SS",
      description:
        "Perfectly grilled salmon with Mediterranean herbs and spices. Served with a side of roasted vegetables and lemon garlic sauce.",
      time: "25 min",
      difficulty: "Easy",
      likes: "1.8k",
      tags: ["Dinner", "Seafood", "Healthy"],
    },
    {
      id: 3,
      title: "Authentic Thai Green Curry",
      image: "https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      author: "Asian Flavors",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=AF",
      description:
        "A fragrant and spicy Thai green curry made with fresh herbs, coconut milk, and your choice of protein. Transport yourself to Thailand with every bite!",
      time: "40 min",
      difficulty: "Medium",
      likes: "3.1k",
      tags: ["Dinner", "Asian", "Spicy"],
    },
  ]

  const popularCreators = [
    {
      id: 1,
      name: "Chef Maria",
      username: "@chefmaria",
      avatar: "/placeholder.svg?height=80&width=80&text=CM",
      bio: "Award-winning pastry chef sharing my favorite dessert recipes",
      followers: "125K",
      recipes: 86,
      specialties: ["Desserts", "French", "Baking"],
    },
    {
      id: 2,
      name: "Vegan Kitchen",
      username: "@vegankitchen",
      avatar: "/placeholder.svg?height=80&width=80&text=VK",
      bio: "Plant-based recipes that are easy, delicious and satisfying",
      followers: "98K",
      recipes: 124,
      specialties: ["Vegan", "Healthy", "Quick"],
    },
    {
      id: 3,
      name: "Grill Master",
      username: "@grillmaster",
      avatar: "/placeholder.svg?height=80&width=80&text=GM",
      bio: "Everything BBQ, smoking, and grilling. Meat lover's paradise!",
      followers: "210K",
      recipes: 92,
      specialties: ["BBQ", "Meat", "Outdoor"],
    },
    {
      id: 4,
      name: "Spice Route",
      username: "@spiceroute",
      avatar: "/placeholder.svg?height=80&width=80&text=SR",
      bio: "Exploring the world's cuisines one spice at a time",
      followers: "78K",
      recipes: 143,
      specialties: ["Indian", "Thai", "Mexican"],
    },
    {
        id: 5,
        name: "Grill Master",
        username: "@grillmaster",
        avatar: "/placeholder.svg?height=80&width=80&text=GM",
        bio: "Everything BBQ, smoking, and grilling. Meat lover's paradise!",
        followers: "210K",
        recipes: 92,
        specialties: ["BBQ", "Meat", "Outdoor"],
      },
      {
        id: 6,
        name: "Spice Route",
        username: "@spiceroute",
        avatar: "/placeholder.svg?height=80&width=80&text=SR",
        bio: "Exploring the world's cuisines one spice at a time",
        followers: "78K",
        recipes: 143,
        specialties: ["Indian", "Thai", "Mexican"],
      },
  ]

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex flex-col py-4 gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for recipes, ingredients, or users..." className="pl-10 pr-10 bg-background" />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <span>Sort By: Popular</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Most Popular</DropdownMenuItem>
                <DropdownMenuItem>Recently Added</DropdownMenuItem>
                <DropdownMenuItem>Trending Now</DropdownMenuItem>
                <DropdownMenuItem>Quick Recipes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-2 pb-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`gap-2 rounded-full ${
                    activeCategory === category.id ? "bg-orange-500 hover:bg-orange-600" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </header>

      <main className="container py-6 space-y-10">
        {/* Featured Recipe */}
        {
         featuredRecipes.map((recipe, index) => {
          <FeaturedRecipe key={index} recipe={recipe} />
         })   
        }

        {/* Main Content Tabs */}
        <Tabs defaultValue="recipes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
          </TabsList>

          <TabsContent value="recipes" className="space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Trending Recipes</h2>
                  <p className="text-muted-foreground">What everyone's cooking this week</p>
                </div>
                <Button variant="ghost" className="gap-2">
                  <span>View All</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recepies.map((recipe) => (
                    <Link  key={recipe.id} href={`/recepie/${recipe.id}`} >
                    <RecipeCard recipe={recipe} />
                    </Link>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">My Recipes</h2>
                  <p className="text-muted-foreground">What everyone's cooking this week</p>
                </div>
                <Button variant="ghost" className="gap-2">
                  <span>View All</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recepies.map((recipe) => (
                    <Link  key={recipe.id} href={`/recepie/${recipe.id}`} >
                    <RecipeCard recipe={recipe} />
                    </Link>
                ))}
              </div>
            </section>

              <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Saved Recipes</h2>
                  <p className="text-muted-foreground">What everyone's cooking this week</p>
                </div>
                <Button variant="ghost" className="gap-2">
                  <span>View All</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recepies.map((recipe) => (
                    <Link  key={recipe.id} href={`/recepie/${recipe.id}`} >
                    <RecipeCard recipe={recipe} />
                    </Link>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="creators" className="space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Popular Creators</h2>
                  <p className="text-muted-foreground">Talented chefs and food enthusiasts to follow</p>
                </div>
                <Button variant="ghost" className="gap-2">
                  <span>View All</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularCreators.map((creator) => (
                  <CreatorCard key={creator.id} creator={creator} />
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
