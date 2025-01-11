export function filterObject<T extends Record<string, any>>(
  obj: T
): { [k: string]: T } {
  return Object.fromEntries<T>(
    Object.entries(obj).filter(([_, value]) => value)
  )
}
