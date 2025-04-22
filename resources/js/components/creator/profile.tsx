import { useState } from "react"
import { Link } from "@inertiajs/react"
import {
  ArrowLeft,
  BookMarked,
  Calendar,
  Clock,
  Edit,
  Globe,
  Grid,
  Heart,
  Instagram,
  Link2,
  MapPin,
  MoreHorizontal,
  Settings,
  Share2,
  Twitter,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserProfile() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followersCount, setFollowersCount] = useState(125432)

  // Mock user data
  const user = {
    id: "chef-maria",
    username: "chefmaria",
    displayName: "Chef Maria",
    bio: "Award-winning pastry chef sharing my favorite recipes from around the world. Author of 'Sweet Creations' cookbook. Food Network featured chef.",
    avatar: "/placeholder.svg?height=200&width=200&text=CM",
    coverImage: "/placeholder.svg?height=400&width=1200&text=Chef+Maria+Cover",
    isVerified: true,
    location: "New York, NY",
    website: "https://chefmaria.com",
    joinDate: "January 2020",
    stats: {
      recipes: 86,
      followers: followersCount,
      following: 245,
      likes: 12500,
    },
    specialties: ["Italian", "Desserts", "Pastry", "Mediterranean", "Baking"],
    socialLinks: {
      instagram: "@chefmaria",
      twitter: "@chefmaria",
      youtube: "ChefMariaCooks",
    },
  }

  // Mock recipes data
  const recipes = [
    {
      id: "tiramisu-classic",
      title: "Classic Tiramisu",
      image: "/placeholder.svg?height=300&width=400&text=Tiramisu",
      time: "45 min",
      likes: 2453,
      saves: 1287,
      tags: ["Dessert", "Italian", "Coffee"],
    },
    {
      id: "lemon-tart",
      title: "Lemon Tart with Meringue",
      image: "/placeholder.svg?height=300&width=400&text=Lemon+Tart",
      time: "60 min",
      likes: 1876,
      saves: 943,
      tags: ["Dessert", "Citrus", "Baking"],
    },
    {
      id: "pasta-carbonara",
      title: "Authentic Pasta Carbonara",
      image: "/placeholder.svg?height=300&width=400&text=Carbonara",
      time: "30 min",
      likes: 3241,
      saves: 1654,
      tags: ["Pasta", "Italian", "Dinner"],
    },
    {
      id: "chocolate-souffle",
      title: "Chocolate Soufflé",
      image: "/placeholder.svg?height=300&width=400&text=Chocolate+Souffle",
      time: "50 min",
      likes: 1987,
      saves: 1102,
      tags: ["Dessert", "Chocolate", "French"],
    },
    {
      id: "focaccia-bread",
      title: "Rosemary Focaccia Bread",
      image: "/placeholder.svg?height=300&width=400&text=Focaccia",
      time: "3 hrs",
      likes: 1543,
      saves: 876,
      tags: ["Bread", "Italian", "Baking"],
    },
    {
      id: "risotto-mushroom",
      title: "Creamy Mushroom Risotto",
      image: "/placeholder.svg?height=300&width=400&text=Risotto",
      time: "40 min",
      likes: 2134,
      saves: 1087,
      tags: ["Italian", "Dinner", "Rice"],
    },
  ]

  // Mock saved recipes data
  const savedRecipes = [
    {
      id: "korean-fried-chicken",
      title: "Korean Fried Chicken",
      image: "/placeholder.svg?height=300&width=400&text=Korean+Chicken",
      author: "Asian Flavors",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=AF",
      time: "45 min",
      likes: 3421,
      tags: ["Korean", "Chicken", "Spicy"],
    },
    {
      id: "vegan-buddha-bowl",
      title: "Rainbow Vegan Buddha Bowl",
      image: "/placeholder.svg?height=300&width=400&text=Buddha+Bowl",
      author: "Plant Power",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=PP",
      time: "25 min",
      likes: 1876,
      tags: ["Vegan", "Healthy", "Bowl"],
    },
    {
      id: "french-macarons",
      title: "French Macarons",
      image: "/placeholder.svg?height=300&width=400&text=Macarons",
      author: "Pastry Pro",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=PP",
      time: "90 min",
      likes: 2987,
      tags: ["Dessert", "French", "Baking"],
    },
    {
      id: "beef-wellington",
      title: "Classic Beef Wellington",
      image: "/placeholder.svg?height=300&width=400&text=Beef+Wellington",
      author: "Gourmet Chef",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=GC",
      time: "2 hrs",
      likes: 1543,
      tags: ["Beef", "British", "Dinner"],
    },
  ]

  // Mock followers data
  const followers = [
    {
      id: "foodie-jane",
      username: "foodiejane",
      displayName: "Jane Smith",
      avatar: "/placeholder.svg?height=80&width=80&text=JS",
      bio: "Food enthusiast and home cook",
      isFollowing: true,
      followers: 1243,
    },
    {
      id: "baking-master",
      username: "bakingmaster",
      displayName: "Baking Master",
      avatar: "/placeholder.svg?height=80&width=80&text=BM",
      bio: "Pastry chef sharing baking tips and recipes",
      isFollowing: false,
      followers: 45678,
      isVerified: true,
    },
    {
      id: "healthy-eats",
      username: "healthyeats",
      displayName: "Healthy Eats",
      avatar: "/placeholder.svg?height=80&width=80&text=HE",
      bio: "Nutritious and delicious recipes for a healthy lifestyle",
      isFollowing: true,
      followers: 32456,
    },
    {
      id: "italian-kitchen",
      username: "italiankitchen",
      displayName: "Italian Kitchen",
      avatar: "/placeholder.svg?height=80&width=80&text=IK",
      bio: "Authentic Italian recipes from my nonna's kitchen",
      isFollowing: false,
      followers: 67890,
      isVerified: true,
    },
    {
      id: "spice-route",
      username: "spiceroute",
      displayName: "Spice Route",
      avatar: "/placeholder.svg?height=80&width=80&text=SR",
      bio: "Exploring the world's cuisines one spice at a time",
      isFollowing: true,
      followers: 23456,
    },
    {
      id: "dessert-queen",
      username: "dessertqueen",
      displayName: "Dessert Queen",
      avatar: "/placeholder.svg?height=80&width=80&text=DQ",
      bio: "Sweet treats and decadent desserts",
      isFollowing: false,
      followers: 34567,
    },
  ]

  // Mock following data
  const following = [
    {
      id: "grill-master",
      username: "grillmaster",
      displayName: "Grill Master",
      avatar: "/placeholder.svg?height=80&width=80&text=GM",
      bio: "Everything BBQ, smoking, and grilling. Meat lover's paradise!",
      isFollowing: true,
      followers: 210432,
      isVerified: true,
    },
    {
      id: "vegan-kitchen",
      username: "vegankitchen",
      displayName: "Vegan Kitchen",
      avatar: "/placeholder.svg?height=80&width=80&text=VK",
      bio: "Plant-based recipes that are easy, delicious and satisfying",
      isFollowing: true,
      followers: 98765,
    },
    {
      id: "cocktail-king",
      username: "cocktailking",
      displayName: "Cocktail King",
      avatar: "/placeholder.svg?height=80&width=80&text=CK",
      bio: "Mixologist sharing creative cocktail recipes",
      isFollowing: true,
      followers: 45678,
    },
    {
      id: "breakfast-club",
      username: "breakfastclub",
      displayName: "Breakfast Club",
      avatar: "/placeholder.svg?height=80&width=80&text=BC",
      bio: "Start your day right with these breakfast recipes",
      isFollowing: true,
      followers: 34567,
    },
  ]

  const toggleFollow = () => {
    if (isFollowing) {
      setFollowersCount(followersCount - 1)
    } else {
      setFollowersCount(followersCount + 1)
    }
    setIsFollowing(!isFollowing)
  }

  const params = {
    username: "me"
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header with navigation */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
        <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">Report User</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Block User</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Copy Profile Link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="container max-w-6xl py-0">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full overflow-hidden rounded-b-xl">
          <img
            src={user.coverImage || "/placeholder.svg"}
            alt={`${user.displayName}'s cover`}
            className="object-cover"/>
          {/* Edit cover button - only shown if it's the user's own profile */}
          {params.username === "me" && (
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-4 bottom-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Cover
            </Button>
          )}
        </div>

        {/* Profile Header */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 -mt-12 md:-mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.displayName} />
                  <AvatarFallback className="text-2xl">{user.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                {user.isVerified && (
                  <div className="absolute bottom-1 right-1 bg-blue-500 text-white rounded-full p-1">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold">{user.displayName}</h1>
                  {user.isVerified && (
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <div className="text-muted-foreground">@{user.username}</div>
                <div className="flex items-center gap-4 text-sm mt-1">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.joinDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {params.username === "me" ? (
                <>
                  <Button variant="outline" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={toggleFollow}
                    className={
                      isFollowing
                        ? "bg-background text-foreground border border-input hover:bg-accent"
                        : "bg-orange-500 hover:bg-orange-600"
                    }
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline">Message</Button>
                </>
              )}
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 space-y-4">
              {/* Bio */}
              <p className="text-muted-foreground">{user.bio}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {user.website && (
                  <Link
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{user.website.replace(/^https?:\/\//, "")}</span>
                  </Link>
                )}
                {user.socialLinks?.instagram && (
                  <Link
                    href={`https://instagram.com/${user.socialLinks.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>{user.socialLinks.instagram}</span>
                  </Link>
                )}
                {user.socialLinks?.twitter && (
                  <Link
                    href={`https://twitter.com/${user.socialLinks.twitter.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>{user.socialLinks.twitter}</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg text-center">
                  <span className="font-bold text-lg">{formatNumber(user.stats.recipes)}</span>
                  <span className="text-xs text-muted-foreground">Recipes</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg text-center">
                  <span className="font-bold text-lg">{formatNumber(user.stats.followers)}</span>
                  <span className="text-xs text-muted-foreground">Followers</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg text-center">
                  <span className="font-bold text-lg">{formatNumber(user.stats.following)}</span>
                  <span className="text-xs text-muted-foreground">Following</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg text-center">
                  <span className="font-bold text-lg">{formatNumber(user.stats.likes)}</span>
                  <span className="text-xs text-muted-foreground">Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="recipes" className="px-4 sm:px-6 lg:px-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>

          {/* Recipes Tab */}
          <TabsContent value="recipes" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recipes</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Grid className="h-4 w-4" />
                  Grid
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Sort By
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.26618 11.9026 7.38064 11.95 7.49999 11.95C7.61933 11.95 7.73379 11.9026 7.81819 11.8182L10.0682 9.56819Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer">Most Recent</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Most Popular</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Most Liked</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden group">
                  <div className="aspect-video relative">
                    <img
        
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-background/80 text-foreground backdrop-blur-sm">
                        <Clock className="mr-1 h-3 w-3" />
                        {recipe.time}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1 text-base">{recipe.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {recipe.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-xs">{formatNumber(recipe.likes)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookMarked className="h-4 w-4 text-blue-500" />
                        <span className="text-xs">{formatNumber(recipe.saves)}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 rounded-full">
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Saved Tab */}
          <TabsContent value="saved" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Saved Recipes</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Grid className="h-4 w-4" />
                Grid
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedRecipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden group">
                  <div className="aspect-video relative">
                    <img
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-background/80 text-foreground backdrop-blur-sm">
                        <Clock className="mr-1 h-3 w-3" />
                        {recipe.time}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1 text-base">{recipe.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={recipe.authorAvatar || "/placeholder.svg"} alt={recipe.author} />
                        <AvatarFallback>
                          {recipe.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{recipe.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {recipe.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-xs">{formatNumber(recipe.likes)}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 rounded-full">
                      <BookMarked className="h-4 w-4 fill-current text-blue-500" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Followers Tab */}
          <TabsContent value="followers" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Followers</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Users className="h-4 w-4" />
                  All
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Sort By
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.26618 11.9026 7.38064 11.95 7.49999 11.95C7.61933 11.95 7.73379 11.9026 7.81819 11.8182L10.0682 9.56819Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer">Recently Followed</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Most Popular</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Alphabetical</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {followers.map((follower) => (
                <Card key={follower.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={follower.avatar || "/placeholder.svg"} alt={follower.displayName} />
                        <AvatarFallback>
                          {follower.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold">{follower.displayName}</h3>
                          {follower.isVerified && (
                            <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">@{follower.username}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {formatNumber(follower.followers)} followers
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{follower.bio}</p>
                    <div className="mt-4">
                      <Button variant={follower.isFollowing ? "outline" : "default"} size="sm" className="w-full">
                        {follower.isFollowing ? "Following" : "Follow"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Following Tab */}
          <TabsContent value="following" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Following</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Users className="h-4 w-4" />
                  All
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      Sort By
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.26618 11.9026 7.38064 11.95 7.49999 11.95C7.61933 11.95 7.73379 11.9026 7.81819 11.8182L10.0682 9.56819Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer">Recently Followed</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Most Popular</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Alphabetical</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {following.map((follow) => (
                <Card key={follow.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={follow.avatar || "/placeholder.svg"} alt={follow.displayName} />
                        <AvatarFallback>
                          {follow.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold">{follow.displayName}</h3>
                          {follow.isVerified && (
                            <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">@{follow.username}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {formatNumber(follow.followers)} followers
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{follow.bio}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        Following
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
