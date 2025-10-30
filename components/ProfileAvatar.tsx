"use client"

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/app/context/AuthContext"
import { getInitials } from "@/utils/getInitials"

const ProfileAvatar = () => {
  const { user } = useAuth()
  const userNames = user?.name
  const userInitials = getInitials(userNames ?? "")
  return (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>{userInitials}</AvatarFallback>
    </Avatar>
  )
}

export default ProfileAvatar
