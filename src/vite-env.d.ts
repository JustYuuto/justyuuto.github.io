/// <reference types="vite/client" />

interface LanyardUser {
  discord_user: {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar: string;
  };
  activities: {
    type: number;
    name: string;
    details: string;
    state: string;
    assets: {
      large_image: string;
      large_text: string;
      small_image: string;
      small_text: string;
    };
    sync_id: string;
  }[];
}
