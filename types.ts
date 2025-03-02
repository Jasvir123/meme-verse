export interface Meme {
  id: string;
  name: string;
  example: {
    text: string[];
    url: string;
  };
}
