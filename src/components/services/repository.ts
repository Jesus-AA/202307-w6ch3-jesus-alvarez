export interface Repository<T extends { id: number | string }> {
  getAll(): Promise<T[]>;
}
