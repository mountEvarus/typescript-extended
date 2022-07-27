export async function wait(duration = 2000): Promise<void> {
  await new Promise((r) => setTimeout(r, duration))
}
