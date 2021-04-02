import StringDict from './StringDict';

class StringSet {
    backingDict: StringDict<boolean> = {};
    constructor(initial?: string[]) {
        if (initial !== undefined) {
            initial.forEach(str => this.backingDict[str] = true);
        }
    }
    static copyOf(src: StringSet) {
        const copy = new StringSet();
        for (const label in src.backingDict) {
            copy.add(label);
        }
        return copy;
    }
    add(e: string) {
        if (this.has(e)) return false;
        this.backingDict[e] = true;
        return true;
    }
    remove(e: string) {
        if (!this.has(e)) return false;
        delete this.backingDict[e];
        return true;
    }
    toggle(e: string) {
        if (!this.add(e)) this.remove(e);
    }
    has(e: string) {
        return this.backingDict[e] !== undefined;
    }
};

export default StringSet;
