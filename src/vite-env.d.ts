/// <reference types="vite/client" />

interface LanyardUser {
  discord_user: {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar: string;
  };
}
