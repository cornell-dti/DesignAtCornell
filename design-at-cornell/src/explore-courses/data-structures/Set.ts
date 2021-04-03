import Dictionary from './Dictionary';

class Set {
    backingDict: Dictionary<boolean> = {};
    size = 0;
    constructor(initial?: string[]) {
        if (initial !== undefined) {
            initial.forEach(str => this.backingDict[str] = true);
        }
    }
    static copyOf(src: Set) {
        const copy = new Set();
        for (const label in src.backingDict) {
            copy.add(label);
        }
        return copy;
    }
    add(e: string) {
        if (this.has(e)) return false;
        this.backingDict[e] = true;
        this.size++;
        return true;
    }
    remove(e: string) {
        if (!this.has(e)) return false;
        delete this.backingDict[e];
        this.size--;
        return true;
    }
    toggle(e: string) {
        if (!this.add(e)) this.remove(e);
    }
    has(e: string) {
        return this.backingDict[e] !== undefined;
    }
    isEmpty() {
        return this.size === 0;
    }
};

export default Set;
