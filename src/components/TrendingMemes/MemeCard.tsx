import { Meme } from "../../../types";

export default function MemeCard({  example, id, name }: Meme) {
  return (
    <div
      className="overflow-hidden rounded-lg border bg-background"
    >
      <img
        src={example.url}
        alt={`Trending meme ${id}`}
        className="aspect-square object-contain"
      />
      <div className="p-3">
        <h3 className="font-medium truncate">{name}</h3>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <span>4.{id}k votes</span>
          <span>{id}00 comments</span>
        </div>
      </div>
    </div>
  );
}
