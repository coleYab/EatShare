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


export default function RecipeCard({ recipe } : { recipe : any }) {

  // console.log(recipe.user.name)
	return <Card key={recipe.id} className="overflow-hidden group">
                    <div className="aspect-video relative">
                      <img
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500 text-white">
                          <Fire className="mr-1 h-3 w-3" />
                          Trending
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge className="bg-background/80 text-foreground backdrop-blur-sm">
                          <Clock className="mr-1 h-3 w-3" />
                          {`${recipe.cooking_time + recipe.preparation_time} min`}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-base">{recipe.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={recipe.user?.image } alt={recipe.user?.name} />
                          <AvatarFallback>
                            {recipe.user?.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("") || "AU"}
                          </AvatarFallback>
                        </Avatar>
                        <span>{recipe.user?.name || "Ananomus User"}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{recipe.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookMarked className="h-4 w-4 text-blue-500" />
                          <span className="text-xs">{recipe.saves}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 rounded-full">
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
}