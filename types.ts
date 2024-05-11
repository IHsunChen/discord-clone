import { Member, Profile, Server } from "@prisma/client"
import { NextApiResponse } from "next"
import { Server as NetServer, Socket } from "net"
import { Server as SockerIOServer } from "socket.io"

export type ServerWithMemnerWithProfiles = Server & {
  members: (Member & { profile: Profile })[]
}

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SockerIOServer
    }
  }
}