import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function FeaturedRecepie({ recepie } : { recepie : any }) {
	 return <section>
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
            <img
              src={featuredRecipes[featuredIndex].image || "/placeholder.svg"}
              alt={featuredRecipes[featuredIndex].title}
              width={900}
              height={600}
              className="w-full h-[500px] object-cover m-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                <Badge variant="outline" className="text-white border-white">
                  {featuredRecipes[featuredIndex].tags[0]}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{featuredRecipes[featuredIndex].title}</h1>
              <p className="text-white/80 mb-4 max-w-2xl">{featuredRecipes[featuredIndex].description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={featuredRecipes[featuredIndex].authorAvatar || "/placeholder.svg"}
                      alt={featuredRecipes[featuredIndex].author}
                    />
                    <AvatarFallback>
                      {featuredRecipes[featuredIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{featuredRecipes[featuredIndex].author}</div>
                    <div className="text-sm text-white/70">
                      <span>{featuredRecipes[featuredIndex].time}</span> •{" "}
                      <span>{featuredRecipes[featuredIndex].difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="gap-2 bg-white text-black hover:bg-white/90">
                    <BookMarked className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="gap-2 border-white text-white bg-dark opacity-">
                    View Recipe
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {featuredRecipes.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === featuredIndex ? "bg-white" : "bg-white/40"}`}
                  onClick={() => setFeaturedIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>
}