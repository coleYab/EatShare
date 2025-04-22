import type React from "react"

import { router } from "@inertiajs/react"

import { useState } from "react"
import {
  ArrowLeft,
  Camera,
  Check,
  Globe,
  ImagePlus,
  Instagram,
  Loader2,
  Lock,
  MapPin,
  Plus,
  Save,
  Twitter,
  X,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function EditProfile() {
  // Mock user data - in a real app, this would come from an API or context
  const [user, setUser] = useState({
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
    email: "maria@chefmaria.com",
    phone: "+1 (555) 123-4567",
    specialties: ["Italian", "Desserts", "Pastry", "Mediterranean", "Baking"],
    socialLinks: {
      instagram: "@chefmaria",
      twitter: "@chefmaria",
      youtube: "ChefMariaCooks",
    },
    privacy: {
      profileVisibility: "public",
      showEmail: false,
      showLocation: true,
      allowTagging: true,
      allowComments: true,
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      newFollowers: true,
      comments: true,
      likes: true,
      mentions: true,
    },
  })

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [newSpecialty, setNewSpecialty] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
    setHasChanges(true)
  }

  // Handle social link changes
  const handleSocialChange = (platform: keyof typeof user.socialLinks, value: string) => {
    setUser((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }))
    setHasChanges(true)
  }

  // Handle privacy setting changes
  const handlePrivacyChange = (setting: keyof typeof user.privacy, value: boolean | string) => {
    setUser((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value,
      },
    }))
    setHasChanges(true)
  }

  // Handle notification setting changes
  const handleNotificationChange = (setting: keyof typeof user.notifications, value: boolean) => {
    setUser((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: value,
      },
    }))
    setHasChanges(true)
  }

  // Handle avatar upload
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setHasChanges(true)
    }
  }

  // Handle cover image upload
  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setHasChanges(true)
    }
  }

  // Add a new specialty
  const addSpecialty = () => {
    if (newSpecialty && !user.specialties.includes(newSpecialty)) {
      setUser((prev) => ({
        ...prev,
        specialties: [...prev.specialties, newSpecialty],
      }))
      setNewSpecialty("")
      setHasChanges(true)
    }
  }

  // Remove a specialty
  const removeSpecialty = (specialty: string) => {
    setUser((prev) => ({
      ...prev,
      specialties: prev.specialties.filter((s) => s !== specialty),
    }))
    setHasChanges(true)
  }

  // Save profile changes
  const saveChanges = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the updated user data to your API
      setIsSaving(false)
      setHasChanges(false)

      // toast({
      //   title: "Profile updated",
      //   description: "Your profile has been successfully updated.",
      // })

      // Navigate back to profile page
      router.get(`/profile/${user.username}`)
    }, 1500)
  }

  // Discard changes and navigate back
  const discardChanges = () => {
    if (hasChanges) {
      if (confirm("You have unsaved changes. Are you sure you want to discard them?")) {
        router.back()
      }
    } else {
      router.back()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header with navigation */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
        <Button
          variant="ghost"
          onClick={discardChanges}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
        <h1 className="text-lg font-semibold">Edit Profile</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" onClick={discardChanges} disabled={isSaving || !hasChanges}>
            Cancel
          </Button>
          <Button
            onClick={saveChanges}
            className="bg-orange-500 hover:bg-orange-600"
            disabled={isSaving || !hasChanges}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </header>

      <main className="container max-w-4xl py-8">  
        <div className="flex flex-col space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
                <CardDescription>Upload a profile picture to make your profile more recognizable</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src={avatarPreview || user.avatar || "/placeholder.svg"} alt={user.displayName} />
                    <AvatarFallback className="text-4xl">{user.displayName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full cursor-pointer hover:bg-orange-600 transition-colors"
                  >
                    <Camera className="h-5 w-5" />
                    <Input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </Label>
                </div>
                <div className="text-sm text-muted-foreground">Recommended: Square image, at least 400x400 pixels</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" name="displayName" value={user.displayName} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="flex">
                      <span className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md text-muted-foreground">
                        @
                      </span>
                      <Input
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={user.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    className="min-h-[120px]"
                  />
                  <p className="text-sm text-muted-foreground">{user.bio.length}/300 characters</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
                <CardDescription>
                  Connect your social media accounts to help people find you across platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md text-muted-foreground">
                      <Instagram className="h-4 w-4" />
                    </span>
                    <Input
                      id="instagram"
                      value={user.socialLinks.instagram}
                      onChange={(e) => handleSocialChange("instagram", e.target.value)}
                      placeholder="@username"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md text-muted-foreground">
                      <Twitter className="h-4 w-4" />
                    </span>
                    <Input
                      id="twitter"
                      value={user.socialLinks.twitter}
                      onChange={(e) => handleSocialChange("twitter", e.target.value)}
                      placeholder="@username"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md text-muted-foreground">
                      <Youtube className="h-4 w-4" />
                    </span>
                    <Input
                      id="youtube"
                      value={user.socialLinks.youtube}
                      onChange={(e) => handleSocialChange("youtube", e.target.value)}
                      placeholder="channel name"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Adding social links helps your followers connect with you across platforms
                </p>
              </CardFooter>
            </Card>

        <div className="mt-8 flex justify-end gap-4">
          <Button variant="outline" onClick={discardChanges} disabled={isSaving || !hasChanges}>
            Cancel
          </Button>
          <Button
            onClick={saveChanges}
            className="bg-orange-500 hover:bg-orange-600"
            disabled={isSaving || !hasChanges}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
       </div>
      </main>
    </div>
  )
}
