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




export default function CreatorCard({ creator }: { creator : any }) {
	return <>
       <Card key={creator.id} className="overflow-hidden">
                    <CardHeader className="p-4 pb-0">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-3">
                          <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                          <AvatarFallback>
                            {creator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg">{creator.name}</CardTitle>
                        <CardDescription>{creator.username}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-muted-foreground mb-3">{creator.bio}</p>
                      <div className="flex justify-center gap-4 mb-3">
                        <div className="text-center">
                          <div className="font-bold">{creator.followers}</div>
                          <div className="text-xs text-muted-foreground">Followers</div>
                        </div>
                        <Separator orientation="vertical" className="h-10" />
                        <div className="text-center">
                          <div className="font-bold">{creator.recipes}</div>
                          <div className="text-xs text-muted-foreground">Recipes</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-1">
                        {creator.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Follow</Button>
                    </CardFooter>
                  </Card>
	</>
}