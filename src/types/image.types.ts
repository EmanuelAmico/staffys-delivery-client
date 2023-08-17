export interface croppedImageI {
  aspect?: { value: number | null; text: string | null } | null;
  crop?: { x: number | null; y: number | null } | null;
  croppedImageUrl?: string;
  zoom?: number | null;
}
