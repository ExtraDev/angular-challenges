export class News {
    public id?: number;
    public headline?: string;
    public abstract?: string;
    public body?: string;
    public date?: Date;

    public getDay(): number {
        return this.date?.getDate() || 0;
    }
}