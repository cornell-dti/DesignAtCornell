import StringDict from './StringDict';

class StringSet {
    backingDict: StringDict<boolean> = {};
    constructor(initial?: string[]) {
        if (initial !== undefined) {
            initial.forEach(str => this.backingDict[str] = true);
        }
    }
    add(e: string) {
        this.backingDict[e] = true;
    }
    remove(e: string) {
        delete this.backingDict[e];
    }
    has(e: string) {
        return this.backingDict[e] !== undefined;
    }
};

export default StringSet;
